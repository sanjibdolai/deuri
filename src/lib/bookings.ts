import { db } from '@/lib/firebase';
import type { Booking } from '@/types';
import { collection, addDoc, updateDoc, doc, getDoc, getDocs, query, where, orderBy } from 'firebase/firestore';

export const createBooking = async (booking: Omit<Booking, 'id' | 'createdAt' | 'updatedAt'>) => {
  const docRef = await addDoc(collection(db, 'bookings'), {
    ...booking,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return {
    id: docRef.id,
    ...booking,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

export const updateBookingStatus = async (bookingId: string, status: Booking['status']) => {
  const bookingRef = doc(db, 'bookings', bookingId);
  await updateDoc(bookingRef, {
    status,
    updatedAt: new Date(),
  });
};

export const getBooking = async (bookingId: string) => {
  const bookingDoc = await getDoc(doc(db, 'bookings', bookingId));
  if (!bookingDoc.exists()) return null;

  return {
    id: bookingDoc.id,
    ...bookingDoc.data(),
  } as Booking;
};

export const getUserBookings = async (userId: string) => {
  const bookingsQuery = query(
    collection(db, 'bookings'),
    where('userId', '==', userId),
    orderBy('date', 'desc')
  );

  const bookingsDocs = await getDocs(bookingsQuery);
  return bookingsDocs.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Booking[];
};

export const getAllBookings = async () => {
  const bookingsQuery = query(
    collection(db, 'bookings'),
    orderBy('date', 'desc')
  );

  const bookingsDocs = await getDocs(bookingsQuery);
  return bookingsDocs.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Booking[];
};
