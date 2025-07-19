import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import type { User as FirebaseUser } from 'firebase/auth';
import { getCurrentUser } from '@/lib/auth';
import { loginStart, loginSuccess, loginFailure, logout } from '@/store/redux/slices/authSlice';

/**
 * Custom hook to handle authentication state management
 * - Listens to Firebase auth state changes
 * - Verifies token and user data
 * - Updates Redux store accordingly
 */
export const useAuthState = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        let mounted = true;

        const handleAuthStateChange = async (firebaseUser: FirebaseUser | null) => {
            if (!mounted) return;

            try {
                if (!firebaseUser) {
                    dispatch(logout());
                    return;
                }

                dispatch(loginStart());

                // Verify token and get user data
                const user = await getCurrentUser();
                
                if (!mounted) return;

                if (user) {
                    dispatch(loginSuccess(user));
                } else {
                    // If no user data or invalid token
                    dispatch(loginFailure('Failed to verify user credentials'));
                }
            } catch (error) {
                console.error('Auth state change error:', error);
                if (mounted) {
                    dispatch(loginFailure(error instanceof Error ? error.message : 'Authentication failed'));
                }
            }
        };

        // Subscribe to auth state changes
        const unsubscribe = onAuthStateChanged(auth, handleAuthStateChange);

        // Cleanup subscription and prevent state updates if unmounted
        return () => {
            mounted = false;
            unsubscribe();
        };
    }, [dispatch]);
};
