export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface Booking {
  id: string;
  userId: string;
  date: Date;
  time: string;
  numberOfGuests: number;
  specialRequests?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  isAvailable: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: {
    menuItemId: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  status: 'pending' | 'preparing' | 'ready' | 'delivered';
  createdAt: Date;
  updatedAt: Date;
}
