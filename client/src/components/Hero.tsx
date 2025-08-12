import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero = ({ 
  title, 
  subtitle, 
  backgroundImage = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  ctaText = "Get Quote",
  ctaLink = "/contact"
}: HeroProps) => {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 transform scale-100 hover:scale-105"
        style={{ 
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-6 sm:mb-8 font-medium text-balance max-w-4xl mx-auto">
          {subtitle}
        </p>
        <Link href={ctaLink}>
          <Button 
            className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-base sm:text-lg transition duration-300 transform hover:scale-105 shadow-lg"
            size="lg"
          >
            {ctaText}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
