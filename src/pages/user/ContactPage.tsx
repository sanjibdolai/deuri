import { Facebook, Instagram, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const ContactPage = () => (
    <div className="bg-slate-800 text-white pt-32 pb-20">
        <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-20">
                <h1 className="text-5xl md:text-7xl font-bold text-amber-400 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Get In Touch</h1>
                <p className="text-xl text-slate-300">We're located in the heart of Vagator. Come say hello!</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-16 mb-20">
                <AnimatedSection>
                    <div className="bg-slate-900 p-8 rounded-lg shadow-2xl h-full">
                        <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Send a Message</h3>
                        <form className="space-y-6">
                            <input type="text" placeholder="Your Name" className="w-full bg-slate-700 border-2 border-slate-600 rounded-md p-3 focus:outline-none focus:border-amber-400 transition-colors" />
                            <input type="email" placeholder="Your Email" className="w-full bg-slate-700 border-2 border-slate-600 rounded-md p-3 focus:outline-none focus:border-amber-400 transition-colors" />
                            <textarea placeholder="Your Message" rows="5" className="w-full bg-slate-700 border-2 border-slate-600 rounded-md p-3 focus:outline-none focus:border-amber-400 transition-colors"></textarea>
                            <button type="submit" className="w-full flex items-center justify-center bg-amber-500 text-slate-900 font-bold py-3 px-6 rounded-md hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 border-none">
                                Send Message <Send className="ml-2" size={20} />
                            </button>
                        </form>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2} className="h-full">
                    <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-slate-700 h-full min-h-[500px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15388.92242413125!2d73.74351114999999!3d15.60233085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfe66644555555%3A0x54423039f9a76082!2sVagator%2C%20Goa!5e0!3m2!1sen!2sin!4v1678191224159!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Deuri Location in Vagator, Goa"
                        ></iframe>
                    </div>
                </AnimatedSection>
            </div>

            <AnimatedSection>
                <h3 className="text-4xl text-center font-bold mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <MapPin className="text-amber-400 mb-3" size={32} />
                        <p className="text-lg">Vagator, Goa, India</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Phone className="text-amber-400 mb-3" size={32} />
                        <p className="text-lg">+91 12345 67890</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Mail className="text-amber-400 mb-3" size={32} />
                        <p className="text-lg">reservations@deuri.goa</p>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Follow Us</h3>
                    <div className="flex justify-center space-x-6">
                        <a href="#" aria-label="Instagram" className="hover:text-amber-400 transition-colors"><Instagram size={28} /></a>
                        <a href="#" aria-label="Facebook" className="hover:text-amber-400 transition-colors"><Facebook size={28} /></a>
                        <a href="#" aria-label="Twitter" className="hover:text-amber-400 transition-colors"><Twitter size={28} /></a>
                    </div>
                </div>
            </AnimatedSection>

        </div>
    </div>
);

export default ContactPage