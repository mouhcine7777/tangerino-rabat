'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Define menu category type
type MenuCategory = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function MenuCategorySection() {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0,  // Trigger immediately when any part of the element becomes visible
        rootMargin: '100px 0px' // Trigger 100px before the element enters the viewport
      }
    );

    if (menuRef.current) {
      observer.observe(menuRef.current);
    }

    return () => {
      if (menuRef.current) {
        observer.unobserve(menuRef.current);
      }
    };
  }, []);

  // Menu categories data with links
  const menuCategories: MenuCategory[] = [
    {
      id: 'cocktails',
      title: 'Cócteles y Refrescos',
      description: 'Bebidas exclusivas refrescantes con sabores mediterráneos',
      image: '/cocktails.jpg',
      link: '/es/menu/cocktails'
    },
    {
      id: 'wines',
      title: 'Champagne y Vinos',
      description: 'Selección cuidadosa de renombrados viñedos mediterráneos',
      image: '/wines.jpg',
      link: '/es/menu/champagne'
    },
    {
      id: 'beers',
      title: 'Cervezas y Licores',
      description: 'Cervezas artesanales y licores de calidad superior',
      image: '/beers.jpg',
      link: '/es/menu/beers'
    },
    {
      id: 'seafood',
      title: 'Ostras y Mariscos',
      description: 'Frescos tesoros marinos de aguas costeras',
      image: '/seafood.jpg',
      link: '/es/menu/seafood'
    },
    {
      id: 'tapas',
      title: 'Tapas y Entrantes',
      description: 'Pequeños platos rebosantes de sabores mediterráneos',
      image: '/tapas.jpg',
      link: '/es/menu/tapas'
    },
    {
      id: 'tortillas',
      title: 'Tortillas y Frituras',
      description: 'Tortillas españolas tradicionales y delicias crujientes',
      image: '/tortillas.jpg',
      link: '/es/menu/tortillas'
    },
    {
      id: 'cassolettes',
      title: 'Cazuelitas',
      description: 'Sabrosos platos servidos en recipientes tradicionales de barro',
      image: '/cassolettes.jpg',
      link: '/es/menu/cassolettes'
    },
    {
      id: 'paellas',
      title: 'Paellas, Arroces y Pastas',
      description: 'Platos tradicionales de arroz y pastas artesanales',
      image: '/paellas.jpg',
      link: '/es/menu/paellas'
    },
    {
      id: 'mains',
      title: 'Pescados y Carnes',
      description: 'Pescados y carnes perfectamente preparados',
      image: '/mains.jpg',
      link: '/es/menu/poissons'
    },
    {
      id: 'desserts',
      title: 'Postres',
      description: 'Dulces conclusiones para completar su viaje culinario',
      image: '/desserts.jpg',
      link: '/es/menu/desserts'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="menu" ref={menuRef} className="py-20 bg-[#3e4c52] text-amber-50 relative">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[url('/texture.png')] bg-repeat opacity-10"></div>
      </div>
      
      {/* Elegant divider top */}
      <div className="flex items-center justify-center mb-16">
        <div className="h-px w-24 bg-amber-200/40"></div>
        <div className="mx-4 text-amber-200/60">✦</div>
        <div className="h-px w-24 bg-amber-200/40"></div>
      </div>
      
{/* Section Title */}
<motion.div 
  className="text-center mb-16"
  initial={{ opacity: 0, y: 20 }}
  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{ duration: 0.8 }}
>
  <h2 className="font-SweetSansProBold text-4xl md:text-5xl font-serif tracking-wider text-amber-50 mb-4">NUESTRO MENÚ</h2>
  <p className="text-amber-100/70 font-light max-w-2xl mx-auto">
  Ojo, este menú puede hacerte la boca agua, despertar tus sentidos y abrirte un apetito inesperado.</p>
</motion.div>
      
      {/* Menu Category Cards */}
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {menuCategories.map((category, index) => (
            <Link key={category.id} href={category.link} className="block">
              <motion.div
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <div className="aspect-[4/5] relative shadow-xl rounded-lg">
                  {/* Card background image with subtle rotation on hover */}
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-all duration-700 ease-out group-hover:scale-105 brightness-90 rounded-lg"
                  />
                  
                  {/* Stylized overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-lg"></div>
                  
                  {/* Decorative elements */}
                  <div className="absolute inset-0">
                    {/* Corner accents */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-200/40"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-200/40"></div>
                    
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 bg-[url('/texture.png')] bg-repeat opacity-5"></div>
                  </div>
                  
                  {/* Content container */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* Category number and title */}
                    <div>
                      <span className="text-amber-200/60 text-xs font-light tracking-widest">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <h3 className="font-SweetSansProBold text-xl md:text-2xl font-serif tracking-wide text-amber-50 mt-1">
                        {category.title}
                      </h3>
                      <div className="w-12 h-px bg-amber-200/40 my-3"></div>
                    </div>
                    
                    {/* Description and button */}
                    <div>
                      <p className="text-amber-100/90 text-sm font-light mb-6">
                        {category.description}
                      </p>
                      
                      <span className="inline-block bg-amber-700/80 hover:bg-amber-600 text-amber-50 py-2 px-6 text-sm uppercase tracking-wider border-b-2 border-amber-500/50 rounded transition-all duration-300 group-hover:translate-y-1 group-hover:shadow-lg">
                      Explorar
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Animated highlight effect on hover */}
                <div className="absolute inset-0 bg-amber-200/5 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 rounded-lg"></div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
      
      {/* Elegant divider bottom */}
      <div className="flex items-center justify-center mt-20">
        <div className="h-px w-24 bg-amber-200/40"></div>
        <div className="mx-4 text-amber-200/60">✦</div>
        <div className="h-px w-24 bg-amber-200/40"></div>
      </div>
    </section>
  );
}