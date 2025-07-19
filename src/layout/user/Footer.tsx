import { Facebook, Instagram, Twitter } from "lucide-react";
import { useNavigate } from "react-router";
import logoUrl from "../../assets/images/logo.jpg"; // Adjust the path as necessary

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="bg-slate-950 text-slate-400 py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center mb-4">
                            <img src={logoUrl} alt="Deuri Logo" className="h-12 w-12 rounded-full border-2 border-amber-400 p-1" />
                            <h3 className="text-2xl font-bold text-white ml-3" style={{ fontFamily: "'Playfair Display', serif" }}>Deuri</h3>
                        </div>
                        <p className="max-w-xs">Bringing bold Bengali flavors with a modern, fusion twist to the shores of Goa.</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 list-none p-0">
                            <li><button onClick={() => navigate('/')} className="cursor-pointer hover:text-amber-400 bg-transparent border-none p-0 text-slate-400">Home</button></li>
                            <li><button onClick={() => navigate('about')} className="cursor-pointer hover:text-amber-400 bg-transparent border-none p-0 text-slate-400">About Us</button></li>
                            <li><button onClick={() => navigate('contact')} className="cursor-pointer hover:text-amber-400 bg-transparent border-none p-0 text-slate-400">Contact Us</button></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-4">Follow Our Journey</h4>
                        <p className="mb-4">Follow @deuri.goa for more updates!</p>
                        <div className="flex justify-center md:justify-start space-x-6">
                            <a href="#" aria-label="Instagram" className="hover:text-amber-400 transition-colors"><Instagram size={24} /></a>
                            <a href="#" aria-label="Facebook" className="hover:text-amber-400 transition-colors"><Facebook size={24} /></a>
                            <a href="#" aria-label="Twitter" className="hover:text-amber-400 transition-colors"><Twitter size={24} /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Deuri Goa. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;