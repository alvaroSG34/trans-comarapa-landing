import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Viajo desde hace 3 años con Trans Comarapa y siempre llegó puntual. Los buses son cómodos y el personal muy amable.",
    name: "M.R.",
    role: "Comerciante de Comarapa"
  },
  {
    id: 2,
    text: "Excelente servicio de encomiendas. Mi familia en Santa Cruz siempre recibe mis paquetes en perfecto estado.",
    name: "J.C.",
    role: "Agricultor de San Isidro"
  },
  {
    id: 3,
    text: "Los horarios nocturnos me permiten viajar después del trabajo. Buses seguros y conductores responsables.",
    name: "A.V.",
    role: "Estudiante universitario"
  },
  {
    id: 4,
    text: "Contraté sus servicios para una excursión familiar a Comarapa. Todo salió perfecto, muy recomendable.",
    name: "L.S.",
    role: "Organizadora de eventos"
  },
  {
    id: 5,
    text: "Precios justos y atención personalizada. Me gusta que puedo reservar fácilmente por WhatsApp.",
    name: "C.M.",
    role: "Ama de casa"
  },
  {
    id: 6,
    text: "Como empresario necesito puntualidad, y Trans Comarapa nunca me ha fallado en mis viajes de negocios.",
    name: "R.H.",
    role: "Empresario de Santa Cruz"
  },
  {
    id: 7,
    text: "Mi abuela de 80 años viaja sola y siempre la cuidan muy bien. Personal muy atento con los adultos mayores.",
    name: "D.P.",
    role: "Nieta agradecida"
  },
  {
    id: 8,
    text: "Viajo con mi mascota y es la única empresa que me permite llevarla sin problemas. Muy flexible.",
    name: "S.T.",
    role: "Veterinaria"
  },
  {
    id: 9,
    text: "Los buses están siempre limpios y son cómodos para los viajes largos. Air acondicionado funcionando perfecto.",
    name: "F.G.",
    role: "Viajero frecuente"
  },
  {
    id: 10,
    text: "Envío productos de mi panadería a Santa Cruz y siempre llegan frescos. Servicio de encomiendas excelente.",
    name: "M.A.",
    role: "Panadera de Comarapa"
  }
];

const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Slider Container */}
        <div className="max-w-5xl mx-auto">
          <div 
            className="relative h-64 sm:h-72 md:h-80 lg:h-96 flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Comillas decorativas con colores de Comarapa */}
            <div className="absolute top-2 sm:top-4 left-4 sm:left-8 text-[#2196F3] opacity-20 sm:opacity-30">
              <Quote className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
            </div>
            <div className="absolute bottom-2 sm:bottom-4 right-4 sm:right-8 text-[#2196F3] opacity-20 sm:opacity-30 transform rotate-180">
              <Quote className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
            </div>

            {/* Testimonials */}
            <div className="relative w-full">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="text-center px-4 sm:px-8 md:px-12 lg:px-16">
                    <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-4 sm:mb-6 md:mb-8 italic font-medium">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="text-[#2196F3]">
                      <p className="text-sm sm:text-base md:text-lg font-bold">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm md:text-base text-white/80 mt-1">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores de puntos con colores de Comarapa */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 hover:scale-110 touch-manipulation ${
                  index === currentIndex 
                    ? 'bg-[#2196F3] scale-110 shadow-lg' 
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
                style={{ minWidth: '44px', minHeight: '44px' }}
                aria-label={`Ir a reseña ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Elementos decorativos con colores de Comarapa */}
        <div className="hidden sm:block absolute top-6 sm:top-10 left-6 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 bg-[#7FB069] rounded-full opacity-60"></div>
        <div className="hidden sm:block absolute top-12 sm:top-20 right-12 sm:right-20 w-4 h-4 sm:w-6 sm:h-6 bg-[#4A8B3A] rounded-full opacity-40"></div>
        <div className="hidden sm:block absolute bottom-6 sm:bottom-10 left-12 sm:left-20 w-2 h-2 sm:w-3 sm:h-3 bg-[#7FB069] rounded-full opacity-50"></div>
        <div className="hidden sm:block absolute bottom-12 sm:bottom-20 right-6 sm:right-10 w-3 h-3 sm:w-5 sm:h-5 bg-[#2D5A27] rounded-full opacity-30"></div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
