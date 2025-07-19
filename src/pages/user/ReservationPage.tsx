import { useState } from 'react'
import AnimatedSection from '../../components/AnimatedSection';
import { Calendar, Clock, Minus, Plus, Users } from 'lucide-react';

const ReservationPage = () => {
    const [guests, setGuests] = useState<number>(2);

    const handleGuestChange = (amount: number) => {
        setGuests((prev) => Math.max(1, prev + amount));
    };

    return (
        <div className="bg-slate-900 text-white pt-32 pb-20">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold text-amber-400 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Reserve Your Table</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">We look forward to welcoming you. Please fill out the form below to book your table.</p>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <div className="max-w-4xl mx-auto bg-slate-800 p-8 md:p-12 rounded-lg shadow-2xl">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Personal Details */}
                            <div className="space-y-6">
                                <input type="text" placeholder="Full Name" required className="w-full bg-slate-700 border-2 border-slate-600 rounded-md p-4 focus:outline-none focus:border-amber-400 transition-colors" />
                                <input type="email" placeholder="Email Address" required className="w-full bg-slate-700 border-2 border-slate-600 rounded-md p-4 focus:outline-none focus:border-amber-400 transition-colors" />
                                <input type="tel" placeholder="Phone Number" required className="w-full bg-slate-700 border-2 border-slate-600 rounded-md p-4 focus:outline-none focus:border-amber-400 transition-colors" />
                            </div>

                            {/* Reservation Details */}
                            <div className="space-y-6">
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input type="date" required className="w-full bg-slate-700 border-2 border-slate-600 rounded-md p-4 pl-12 focus:outline-none focus:border-amber-400 transition-colors" />
                                </div>
                                <div className="relative">
                                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input type="time" required className="w-full bg-slate-700 border-2 border-slate-600 rounded-md p-4 pl-12 focus:outline-none focus:border-amber-400 transition-colors" />
                                </div>
                                <div className="flex items-center justify-between bg-slate-700 border-2 border-slate-600 rounded-md p-4">
                                    <div className="flex items-center">
                                        <Users className="text-slate-400 mr-4" />
                                        <span>Number of Guests</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button type="button" onClick={() => handleGuestChange(-1)} className="bg-slate-600 p-2 rounded-full hover:bg-slate-500 transition-colors"><Minus size={16} /></button>
                                        <span className="font-bold text-lg w-8 text-center">{guests}</span>
                                        <button type="button" onClick={() => handleGuestChange(1)} className="bg-slate-600 p-2 rounded-full hover:bg-slate-500 transition-colors"><Plus size={16} /></button>
                                    </div>
                                </div>
                            </div>

                            {/* Full-width fields */}
                            <div className="md:col-span-2">
                                <textarea placeholder="Special Requests (optional)" rows={4} className="w-full bg-slate-700 border-2 border-slate-600 rounded-md p-4 focus:outline-none focus:border-amber-400 transition-colors"></textarea>
                            </div>

                            <div className="md:col-span-2">
                                <button type="submit" className="w-full flex items-center justify-center bg-amber-500 text-slate-900 font-bold py-4 px-6 rounded-md hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 border-none text-lg">
                                    Confirm Reservation
                                </button>
                            </div>
                        </form>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default ReservationPage