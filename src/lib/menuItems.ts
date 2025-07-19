import { db } from '@/lib/firebase';
import type { MenuItem } from '@/types';
import { collection, addDoc, updateDoc, doc, deleteDoc, getDoc, getDocs, query, where } from 'firebase/firestore';

export const createMenuItem = async (menuItem: Omit<MenuItem, 'id'>) => {
  const docRef = await addDoc(collection(db, 'menuItems'), menuItem);
  return {
    id: docRef.id,
    ...menuItem,
  };
};

export const updateMenuItem = async (id: string, data: Partial<MenuItem>) => {
  const menuItemRef = doc(db, 'menuItems', id);
  await updateDoc(menuItemRef, data);
};

export const deleteMenuItem = async (id: string) => {
  await deleteDoc(doc(db, 'menuItems', id));
};

export const getMenuItem = async (id: string) => {
  const menuItemDoc = await getDoc(doc(db, 'menuItems', id));
  if (!menuItemDoc.exists()) return null;

  return {
    id: menuItemDoc.id,
    ...menuItemDoc.data(),
  } as MenuItem;
};

export const getMenuItems = async () => {
  const menuItemsQuery = query(collection(db, 'menuItems'));
  const menuItemsDocs = await getDocs(menuItemsQuery);
  
  return menuItemsDocs.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as MenuItem[];
};

export const getMenuItemsByCategory = async (category: string) => {
  const menuItemsQuery = query(
    collection(db, 'menuItems'),
    where('category', '==', category)
  );
  
  const menuItemsDocs = await getDocs(menuItemsQuery);
  return menuItemsDocs.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as MenuItem[];
};
