import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import AnimatedSection from "../../components/AnimatedSection";
import { ArrowLeft, ArrowRight, Droplet, Facebook, Feather, Instagram, Leaf, Star, Twitter } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useNavigate } from "react-router";
import cravingImage from "../../assets/images/craving.jpg"; // Adjust the path as necessary
import hunt from "../../assets/images/hunt.jpg";
import photo1 from "../../assets/images/photo-1484821582734-6c6c9f99a672.jpg";
import photo2 from "../../assets/images/photo-1517248135467-4c7edcad34c4.jpg";
import photo3 from "../../assets/images/photo-1595295333158-4742f28fbd85.jpg";
import photo4 from "../../assets/images/photo-1600585152220-90363fe7e115.jpg";
import photo5 from "../../assets/images/photo-1601050690597-df0568f70950.jpg";

interface ExperienceItem {
    icon: React.ComponentType<{ size?: number }>;
    title: string;
    desc: string;
}
interface MenuHighlight {
    name: string;
    description: string;
    image: string;
}
const comingSoonImageUrl = "";
const menuHighlights: MenuHighlight[] = [
    { name: "Shorshe Ilish", description: "Hilsa fish steamed in a pungent mustard-poppy seed gravy.", image: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Kolkata Biryani", description: "Aromatic long-grain rice, tender meat, and a signature potato.", image: "https://images.pexels.com/photos/7437399/pexels-photo-7437399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Daab Chingri", description: "Prawns in a creamy coconut curry, served inside a green coconut.", image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Mishti Doi", description: "Sweet, caramelized yogurt, set in traditional earthenware pots.", image: "https://images.pexels.com/photos/16307841/pexels-photo-16307841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Kosha Mangsho", description: "Slow-cooked mutton in a rich, spicy, and dark gravy.", image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Luchi Alur Dom", description: "Fluffy deep-fried bread with a spicy, flavorful potato curry.", image: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Chingri Malai Curry", description: "A creamy and mild prawn curry made with coconut milk.", image: "https://images.pexels.com/photos/5410422/pexels-photo-5410422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Rasgulla", description: "Spongy cottage cheese balls soaked in a light sugar syrup.", image: "https://images.pexels.com/photos/6149937/pexels-photo-6149937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
];
const heroImages: string[] = [
    photo1, // Traditional Bengali thali with steamed rice, fish curry, dal, and sides
    photo2, // Modern coastal restaurant interior
    photo3, // Bengali prawns curry
    photo4, // Rustic-modern fusion dining space
    photo5 // Goa beach sunset with palm trees
];

const HomePage = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000); // Change image every 5 seconds
        return () => clearTimeout(timer);
    }, [currentImageIndex]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                type: "tween",
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };
    const navigate = useNavigate()
    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1.0]
            }
        }
    };

    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 768px)': { slidesToScroll: 2 },
            '(min-width: 1024px)': { slidesToScroll: 4 }
        }
    });

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden bg-slate-900">
                <AnimatePresence>
                    <motion.img
                        key={currentImageIndex}
                        src={heroImages[currentImageIndex]}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute z-0 w-full h-full object-cover"
                        alt="Deuri Restaurant Ambiance"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
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
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
                    {heroImages.map((_, index) => (
                        <button key={index} onClick={() => setCurrentImageIndex(index)} className={`w-3 h-3 rounded-full transition-colors ${currentImageIndex === index ? 'bg-amber-500' : 'bg-white/50'}`}></button>
                    ))}
                </div>
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
                        {[
                            { icon: Star, title: "Authentic Flavors", desc: "Timeless recipes passed down through generations." },
                            { icon: Droplet, title: "Goan Fusion Twist", desc: "Classic Bengali dishes reimagined with a coastal vibe." },
                            { icon: Leaf, title: "Fresh Ingredients", desc: "Locally sourced produce and the freshest catch of the day." },
                            { icon: Feather, title: "Modern Ambiance", desc: "Elegant and comfortable dining for a memorable experience." }
                        ].map((item: ExperienceItem) => (
                            <AnimatedSection key={item.title} delay={0.15 * Math.random()}>
                                <div className="bg-slate-900 p-8 rounded-lg shadow-lg h-full">
                                    <div className="text-amber-400 mb-4 mx-auto w-fit p-3 bg-slate-800 rounded-full">
                                        <item.icon size={32} />
                                    </div>
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
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex">
                                {menuHighlights.map((item: MenuHighlight) => (
                                    <div key={item.name} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_25%] p-4">
                                        <div className="bg-slate-800 rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 shadow-lg h-full flex flex-col">
                                            <div className="h-56 overflow-hidden">
                                                <img 
                                                    src={item.image} 
                                                    alt={item.name} 
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                                />
                                            </div>
                                            <div className="p-6 flex-grow flex flex-col">
                                                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                    {item.name}
                                                </h3>
                                                <p className="text-slate-400 flex-grow">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button 
                            onClick={scrollPrev} 
                            className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-4 bg-amber-500 text-slate-900 p-3 rounded-full shadow-lg hover:bg-amber-400 transition-colors z-10 border-none disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={!canScrollPrev}
                        >
                            <ArrowLeft size={24} />
                        </button>
                        <button 
                            onClick={scrollNext} 
                            className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-4 bg-amber-500 text-slate-900 p-3 rounded-full shadow-lg hover:bg-amber-400 transition-colors z-10 border-none disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={!canScrollNext}
                        >
                            <ArrowRight size={24} />
                        </button>
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