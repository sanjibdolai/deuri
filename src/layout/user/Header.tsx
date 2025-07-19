import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import logo from "../../assets/images/logo.jpg"; // Adjust the path as necessary



const Header = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const navigate = useNavigate()
    useEffect(() => {
        const handleScroll = () => { setIsScrolled(window.scrollY > 10); };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navButtonClasses: string = "cursor-pointer text-white hover:text-amber-400 transition-colors duration-300 bg-transparent border-none p-0";
    const mobileNavButtonClasses: string = "block py-4 text-2xl text-center " + navButtonClasses;

    const handleNavClick = (page: string) => {
        navigate(page);
        setIsMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-slate-900/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <button onClick={() => handleNavClick('/')} className="flex items-center bg-transparent border-none p-0 cursor-pointer">
                    <img src={logo} alt="Deuri Logo" className="h-20 w-20 md:h-32 md:w-32 rounded-full border-2 border-amber-400 p-1" />
                    <h1 className="text-2xl md:text-3xl font-bold text-white ml-3" style={{ fontFamily: "'Playfair Display', serif" }}>Deuri</h1>
                </button>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    <button onClick={() => handleNavClick('/')} className={navButtonClasses}>Home</button>
                    <button onClick={() => handleNavClick('/about')} className={navButtonClasses}>About Us</button>
                    <button onClick={() => handleNavClick('/contact')} className={navButtonClasses}>Contact Us</button>
                </nav>
                <button onClick={() => handleNavClick('/reservation')} className="hidden md:block bg-amber-500 text-slate-900 font-bold py-2 px-6 rounded-full hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 cursor-pointer border-none">
                    Reserve
                </button>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white bg-transparent border-none">
                        {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden"
                    >
                        <nav className="flex flex-col items-center justify-center py-8 space-y-4">
                            <button onClick={() => handleNavClick('/')} className={mobileNavButtonClasses}>Home</button>
                            <button onClick={() => handleNavClick('/about')} className={mobileNavButtonClasses}>About Us</button>
                            <button onClick={() => handleNavClick('/contact')} className={mobileNavButtonClasses}>Contact Us</button>
                            <button onClick={() => handleNavClick('/reservation')} className="mt-4 bg-amber-500 text-slate-900 font-bold py-3 px-8 rounded-full text-lg border-none">
                                Reserve
                            </button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;