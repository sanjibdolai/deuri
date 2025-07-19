import { db } from '@/lib/firebase';
import type { Order } from '@/types';
import { collection, addDoc, updateDoc, doc, getDoc, getDocs, query, where, orderBy } from 'firebase/firestore';

export const createOrder = async (order: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>) => {
  const docRef = await addDoc(collection(db, 'orders'), {
    ...order,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return {
    id: docRef.id,
    ...order,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

export const updateOrderStatus = async (orderId: string, status: Order['status']) => {
  const orderRef = doc(db, 'orders', orderId);
  await updateDoc(orderRef, {
    status,
    updatedAt: new Date(),
  });
};

export const getOrder = async (orderId: string) => {
  const orderDoc = await getDoc(doc(db, 'orders', orderId));
  if (!orderDoc.exists()) return null;

  return {
    id: orderDoc.id,
    ...orderDoc.data(),
  } as Order;
};

export const getUserOrders = async (userId: string) => {
  const ordersQuery = query(
    collection(db, 'orders'),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );

  const ordersDocs = await getDocs(ordersQuery);
  return ordersDocs.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Order[];
};

export const getAllOrders = async () => {
  const ordersQuery = query(
    collection(db, 'orders'),
    orderBy('createdAt', 'desc')
  );

  const ordersDocs = await getDocs(ordersQuery);
  return ordersDocs.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Order[];
};
