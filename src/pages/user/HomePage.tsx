import { cloneElement, useEffect, useState, type ReactElement } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from "../../components/AnimatedSection";
import { ArrowLeft, ArrowRight, Droplet, Facebook, Feather, Instagram, Leaf, Star, Twitter } from "lucide-react";
import { useNavigate } from "react-router";
import cravingImage from "../../assets/images/craving.jpg"; // Adjust the path as necessary

interface ExperienceItem {
    icon: ReactElement;
    title: string;
    desc: string;
}
interface MenuHighlight {
    name: string;
    description: string;
    image: string;
}
const comingSoonImageUrl = 'https://images.unsplash.com/photo-1606791422814-b32c70526e27?q=80&w=1974&auto=format&fit=crop';
const menuHighlights: MenuHighlight[] = [
    { name: "Shorshe Ilish", description: "Hilsa fish steamed in a pungent mustard-poppy seed gravy.", image: "https://images.unsplash.com/photo-1625944015196-2a85e156f1f4?q=80&w=2070&auto=format&fit=crop" },
    { name: "Kolkata Biryani", description: "Aromatic long-grain rice, tender meat, and a signature potato.", image: "https://images.unsplash.com/photo-1633933358117-a27b954754d0?q=80&w=1974&auto=format&fit=crop" },
    { name: "Daab Chingri", description: "Prawns in a creamy coconut curry, served inside a green coconut.", image: "https://images.unsplash.com/photo-1567188042027-28d4039311a3?q=80&w=1935&auto=format&fit=crop" },
    { name: "Mishti Doi", description: "Sweet, caramelized yogurt, set in traditional earthenware pots.", image: "https://images.unsplash.com/photo-1610446750983-730b9107a826?q=80&w=2070&auto=format&fit=crop" },
    { name: "Kosha Mangsho", description: "Slow-cooked mutton in a rich, spicy, and dark gravy.", image: "https://images.unsplash.com/photo-1606791422814-b32c70526e27?q=80&w=1974&auto=format&fit=crop" },
    { name: "Luchi Alur Dom", description: "Fluffy deep-fried bread with a spicy, flavorful potato curry.", image: "https://images.unsplash.com/photo-1604329226859-5a73e874b8c2?q=80&w=2070&auto=format&fit=crop" },
    { name: "Chingri Malai Curry", description: "A creamy and mild prawn curry made with coconut milk.", image: "https://images.unsplash.com/photo-1626502128209-59799513813a?q=80&w=1974&auto=format&fit=crop" },
    { name: "Rasgulla", description: "Spongy cottage cheese balls soaked in a light sugar syrup.", image: "https://images.unsplash.com/photo-1568801556943-4403993c187f?q=80&w=1974&auto=format&fit=crop" }
];

const HomePage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } }
    };
    const navigate = useNavigate()
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const [carouselIndex, setCarouselIndex] = useState<number>(0);
    const [itemsPerPage, setItemsPerPage] = useState<number>(4);

    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth < 768) setItemsPerPage(1);
            else if (window.innerWidth < 1024) setItemsPerPage(2);
            else setItemsPerPage(4);
        };
        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

    const totalPages: number = Math.ceil(menuHighlights.length / itemsPerPage);
    const pages: MenuHighlight[][] = Array.from({ length: totalPages }, (_, i) =>
        menuHighlights.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage)
    );

    const nextSlide = () => setCarouselIndex((prev) => (prev + 1) % totalPages);
    const prevSlide = () => setCarouselIndex((prev) => (prev - 1 + totalPages) % totalPages);

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
                <video autoPlay loop muted playsInline className="absolute z-0 w-auto min-w-full min-h-full max-w-none">
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-sea-seen-from-the-beach-22123-large.mp4" type="video/mp4" />
                </video>
                <motion.div className="relative z-20 px-4" variants={containerVariants} initial="hidden" animate="visible">
                    <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold" style={{ fontFamily: "'Playfair Display', serif", textShadow: '2px 2px 10px rgba(0,0,0,0.7)' }} variants={itemVariants}>
                        The Soul of Bengal
                    </motion.h1>
                    <motion.h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-amber-300 mb-8" style={{ fontFamily: "'Playfair Display', serif', textShadow: '1px 1px 8px rgba(0,0,0,0.7)'" }} variants={itemVariants}>
                        in the Heart of Goa
                    </motion.h2>
                    <motion.div variants={itemVariants}>
                        <button onClick={() => navigate('/reservation')} className="bg-amber-500 text-slate-900 font-bold py-4 px-10 rounded-full text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer border-none">
                            Reserve a Table
                        </button>
                    </motion.div>
                </motion.div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 md:py-32 bg-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                        <div className="md:pr-10">
                            <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Craving Bengali Food in Goa?
                            </h2>
                            <p className="text-lg text-slate-300 mb-4">
                                We were too. That craving sparked a journey to bring the rich, diverse, and soulful cuisine of Bengal to the vibrant shores of Goa.
                            </p>
                            <p className="text-lg text-slate-300 mb-6">
                                Deuri (দেউড়ী) means 'threshold'. We invite you to cross our threshold and discover bold Bengali flavors presented with a contemporary, fusion twist.
                            </p>
                            <button onClick={() => navigate('/about')} className="text-amber-400 font-semibold text-lg hover:text-amber-300 transition-colors cursor-pointer bg-transparent border-none p-0">
                                Learn More About Us &rarr;
                            </button>
                        </div>
                        <div className="relative  w-96 rounded-lg overflow-hidden shadow-2xl transform md:-rotate-3 hover:rotate-0 transition-transform duration-500">
                            <img src={cravingImage} alt="Craving Bengali Food" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/20"></div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* The Deuri Experience Section */}
            <section className="py-20 md:py-32 bg-slate-800">
                <div className="container mx-auto px-6 text-center">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>The Deuri Experience</h2>
                        <p className="text-lg text-amber-300 mb-16 max-w-3xl mx-auto">More than a meal, it's a journey of flavors where tradition meets innovation.</p>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {(
                            [
                                { icon: <Star />, title: "Authentic Flavors", desc: "Timeless recipes passed down through generations." },
                                { icon: <Droplet />, title: "Goan Fusion Twist", desc: "Classic Bengali dishes reimagined with a coastal vibe." },
                                { icon: <Leaf />, title: "Fresh Ingredients", desc: "Locally sourced produce and the freshest catch of the day." },
                                { icon: <Feather />, title: "Modern Ambiance", desc: "Elegant and comfortable dining for a memorable experience." }
                            ] as ExperienceItem[]
                        ).map((item: ExperienceItem) => (
                            <AnimatedSection key={item.title} delay={0.15 * Math.random()}>
                                <div className="bg-slate-900 p-8 rounded-lg shadow-lg h-full">
                                    <div className="text-amber-400 mb-4 mx-auto w-fit p-3 bg-slate-800 rounded-full">{cloneElement(item.icon, { size: 32 })}</div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-slate-400">{item.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Menu Carousel Section */}
            <section className="py-20 md:py-32 bg-slate-900">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>A Taste of Tradition</h2>
                        <p className="text-lg text-amber-300 mb-12 max-w-3xl mx-auto">From the rivers of Padma to the streets of Kolkata, our menu is a curated collection of Bengal's most cherished dishes.</p>
                    </AnimatedSection>
                    <div className="relative">
                        <div className="overflow-hidden">
                            <AnimatePresence initial={false}>
                                <motion.div
                                    key={carouselIndex}
                                    className="flex"
                                    initial={{ x: "100%" }}
                                    animate={{ x: 0 }}
                                    exit={{ x: "-100%" }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                >
                                    {pages.length > 0 && pages[carouselIndex].map((item: MenuHighlight) => (
                                        <div key={item.name} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 p-4">
                                            <div className="bg-slate-800 rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 shadow-lg h-full flex flex-col">
                                                <div className="h-56 overflow-hidden"><img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
                                                <div className="p-6 flex-grow flex flex-col"><h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.name}</h3><p className="text-slate-400 flex-grow">{item.description}</p></div>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        {totalPages > 1 && <>
                            <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-4 bg-amber-500 text-slate-900 p-3 rounded-full shadow-lg hover:bg-amber-400 transition-colors z-10 border-none">
                                <ArrowLeft size={24} />
                            </button>
                            <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-4 bg-amber-500 text-slate-900 p-3 rounded-full shadow-lg hover:bg-amber-400 transition-colors z-10 border-none">
                                <ArrowRight size={24} />
                            </button>
                        </>}
                    </div>
                </div>
            </section>

            {/* "The Hunt is OVER" Section */}
            <section className="relative py-24 md:py-40 bg-slate-800 text-white">
                <div className="absolute inset-0">
                    <img src={comingSoonImageUrl} alt="Bengali Food" className="w-full h-full object-cover opacity-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/80 to-slate-800"></div>
                </div>
                <div className="relative container mx-auto px-6 text-center">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>The Hunt is <span className="text-amber-400">OVER.</span></h2>
                        <p className="text-2xl md:text-4xl text-amber-300 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Coming Soon to Vagator.</p>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
                            Get ready to embark on a culinary adventure. Follow us for the latest updates, launch dates, and exclusive opening offers.
                        </p>
                        <div className="flex justify-center space-x-6">
                            <a href="#" className="text-white hover:text-amber-400 transition-colors"><Instagram size={32} /></a>
                            <a href="#" className="text-white hover:text-amber-400 transition-colors"><Facebook size={32} /></a>
                            <a href="#" className="text-white hover:text-amber-400 transition-colors"><Twitter size={32} /></a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
};
export default HomePage;