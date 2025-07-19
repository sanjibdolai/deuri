import { useState, useEffect } from 'react';
import type { User, Booking, MenuItem, Order } from '@/types';
import { getAllBookings } from '@/lib/bookings';
import { getMenuItems } from '@/lib/menuItems';
import { getAllOrders } from '@/lib/orders';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export function useAdminData() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bookingsData, menuItemsData, ordersData, usersSnapshot] = await Promise.all([
          getAllBookings(),
          getMenuItems(),
          getAllOrders(),
          getDocs(query(collection(db, 'users'))),
        ]);

        setBookings(bookingsData);
        setMenuItems(menuItemsData);
        setOrders(ordersData);
        setUsers(usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as User[]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { bookings, menuItems, orders, users, loading, error };
}

export function useStats() {
  const { bookings, orders, users } = useAdminData();

  const stats = {
    totalBookings: bookings.length,
    totalRevenue: orders.reduce((sum, order) => sum + order.total, 0),
    totalUsers: users.length,
    pendingBookings: bookings.filter(booking => booking.status === 'pending').length,
    confirmedBookings: bookings.filter(booking => booking.status === 'confirmed').length,
    activeOrders: orders.filter(order => 
      ['pending', 'preparing'].includes(order.status)
    ).length,
  };

  return stats;
}
