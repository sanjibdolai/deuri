import AnimatedSection from "../../components/AnimatedSection";
import cravingImage from "../../assets/images/craving.jpg";
import { ChefHat } from "lucide-react";

const AboutPage = () => (
  <div className="bg-slate-900 text-white pt-32 pb-20">
    <div className="container mx-auto px-6">
      <AnimatedSection className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-bold text-amber-400 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>About Deuri</h1>
        <p className="text-xl text-slate-300">From a simple craving to a culinary destination.</p>
      </AnimatedSection>

      <AnimatedSection className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-24">
        <div className="md:pr-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Story: A Taste of Home
          </h2>
          <p className="text-lg text-slate-300 mb-4">
            It all began with a simple craving. A longing for the authentic, soul-stirring flavors of Bengali cuisine amidst the sun-kissed beaches of Goa. We realized the hunt for that perfect Kosha Mangsho or a fragrant Daab Chingri was a journey many shared.
          </p>
          <p className="text-lg text-slate-300">
            Deuri (দেউড়ী), meaning 'grand doorway' or 'threshold', was born from this desire. We aim to be the gateway for you to experience the rich culinary heritage of Bengal, right here in Vagator.
          </p>
        </div>
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
          <img src={cravingImage} alt="Craving Bengali Food" className="w-full h-full " />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </AnimatedSection>

      <div className="border-t border-slate-700 my-24"></div>

      <AnimatedSection className="text-center max-w-4xl mx-auto mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          Our Culinary Philosophy
        </h2>
        <p className="text-lg text-slate-300 mb-4">
          At Deuri, we believe food is a celebration of life. Our philosophy is rooted in the rich tapestry of Bengali culinary heritage, where every dish tells a story. We are dedicated to preserving the authenticity of these age-old recipes while infusing them with a touch of Goan spirit. It's a dialogue between two vibrant cultures, served on a plate.
        </p>
        <p className="text-lg text-slate-300">
          We are committed to sourcing the freshest local produce from Goan markets and the finest spices from the heartlands of Bengal. This commitment to quality is the cornerstone of our kitchen, ensuring every bite is a testament to flavor and freshness.
        </p>
      </AnimatedSection>

      <div className="border-t border-slate-700 my-24"></div>

      <AnimatedSection className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-24">
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl order-last md:order-first">
          <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" alt="Restaurant Ambiance" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="md:pl-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            An Ambiance of Elegance
          </h2>
          <p className="text-lg text-slate-300 mb-4">
            Step into a space where modern elegance meets traditional charm. The decor at Deuri is inspired by the grand old houses of Kolkata, with subtle hints of Goan artistry.
          </p>
          <p className="text-lg text-slate-300">
            Whether you're here for an intimate dinner, a family celebration, or a casual meal, our warm and inviting atmosphere provides the perfect backdrop for a memorable dining experience.
          </p>
        </div>
      </AnimatedSection>

      <div className="border-t border-slate-700 my-24"></div>

      <AnimatedSection className="text-center max-w-4xl mx-auto">
        <div className="text-amber-400 mb-4 mx-auto w-fit p-4 bg-slate-800 rounded-full"><ChefHat size={48} /></div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Meet Our Chef</h2>
        <p className="text-lg text-slate-300 mb-4">
          At the heart of our kitchen is our Head Chef, a culinary artist with a deep-rooted passion for Bengali food. With decades of experience in the traditional kitchens of Kolkata and a flair for innovation, our chef masterfully blends authentic techniques with contemporary presentations.
        </p>
        <p className="text-lg text-slate-300">
          "For me, every dish is a piece of art and a slice of home. I want our guests to feel the love and history that goes into every recipe," says the Chef.
        </p>
      </AnimatedSection>
    </div>
  </div>
);
export default AboutPage