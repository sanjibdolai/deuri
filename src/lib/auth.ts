import { auth, db } from '@/lib/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  AuthErrorCodes
} from 'firebase/auth';
import type { AuthError } from 'firebase/auth';
import { 
  doc, 
  setDoc, 
  getDoc
} from 'firebase/firestore';
import type { User } from '@/types';

class AuthenticationError extends Error {
  code?: string;
  originalError?: Error;

  constructor(message: string, code?: string, originalError?: Error) {
    super(message);
    this.name = 'AuthenticationError';
    this.code = code;
    this.originalError = originalError;
  }
}

const handleAuthError = (error: unknown) => {
  if (error instanceof Error) {
    const authError = error as AuthError;
    switch (authError.code) {
      case AuthErrorCodes.NETWORK_REQUEST_FAILED:
        throw new AuthenticationError('Network error. Please check your connection.', 'network-error', error);
      case AuthErrorCodes.USER_DELETED:
      case AuthErrorCodes.INVALID_PASSWORD:
        throw new AuthenticationError('Invalid email or password', 'invalid-credentials', error);
      case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
        throw new AuthenticationError('Too many attempts. Please try again later.', 'too-many-attempts', error);
      case AuthErrorCodes.EMAIL_EXISTS:
        throw new AuthenticationError('Email already in use', 'email-exists', error);
      default:
        throw new AuthenticationError('Authentication failed', authError.code, error);
    }
  }
  throw new AuthenticationError('An unexpected error occurred');
};

export const signUp = async (email: string, password: string, name: string): Promise<User> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    const now = new Date();
    const userData: Omit<User, 'id'> = {
      email,
      name,
      createdAt: now
    };

    await setDoc(doc(db, 'users', userCredential.user.uid), {
      id: userCredential.user.uid,
      ...userData
    });

    return {
      id: userCredential.user.uid,
      ...userData,
      createdAt: new Date(),
    };
  } catch (error) {
    handleAuthError(error);
    throw error; // TypeScript needs this even though handleAuthError always throws
  }
};

export const signIn = async (email: string, password: string): Promise<User> => {
  try {
    // First authenticate with Firebase Auth
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
    try {
      // Then try to get the user document with proper error handling
      const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
      
      if (!userDoc.exists()) {
        // If the user auth exists but no Firestore document, something is wrong
        await signOut(auth); // Sign out the user since their data is invalid
        throw new AuthenticationError(
          'User account is incomplete. Please contact support.', 
          'incomplete-account'
        );
      }

      const userData = userDoc.data() as User;
      
      // Verify user has required fields
      // Ensure we have the user data
      if (!userData) {
        await signOut(auth);
        throw new AuthenticationError(
          'User data not found. Please try again.',
          'user-not-found'
        );
      }

      return {
        ...userData,
        id: userCredential.user.uid, // Ensure ID is set correctly
      };
    } catch (firestoreError) {
      // If there's a permission error reading the user document
      if (firestoreError instanceof Error && 
          firestoreError.message.includes('permission-denied')) {
        await signOut(auth); // Sign out the user
        throw new AuthenticationError(
          'Access denied. Please contact support if you believe this is an error.', 
          'permission-denied',
          firestoreError
        );
      }
      throw firestoreError; // Re-throw other errors to be handled by outer catch
    }
  } catch (error) {
    handleAuthError(error);
    throw error; // TypeScript needs this even though handleAuthError always throws
  }
};

export const getCurrentUser = async (): Promise<User | null> => {
  const currentUser = auth.currentUser;
  if (!currentUser) return null;

  try {
    const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
    if (!userDoc.exists()) return null;

    const userData = userDoc.data() as User;
    
    // Just check if we have any user data
    if (!userData) {
      console.error('User data not found');
      return null;
    }

    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};

export const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    handleAuthError(error);
  }
};
