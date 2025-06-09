import React, { useState, useEffect } from 'react';
import { 
  Phone, Clock, MapPin, Users, Package, Truck, MessageCircle, 
  Facebook, Mail, Navigation, Shield, CheckCircle, Star,
  Calendar, Heart, Briefcase, GraduationCap, Church, PartyPopper,
  Sun, Moon, Menu, X, ArrowRight, Award, Globe, Leaf,
  Bus
} from 'lucide-react';
import RouteMap from './components/RouteMap';
import TestimonialsSlider from './components/TestimonialsSlider';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-comarapa-white font-inter">
      {/* Header moderno siempre blanco */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-comarapa-light/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo rediseñado */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="bg-gradient-to-br from-comarapa-dark to-comarapa-medium p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg">
                <Bus className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-comarapa-dark">Trans Comarapa</h1>
                <p className="text-comarapa-medium text-xs sm:text-sm font-medium hidden sm:block">Conectando el corazón de Bolivia</p>
              </div>
            </div>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              {[
                { href: "#inicio", text: "Inicio" },
                { href: "#horarios", text: "Horarios" },
                { href: "#servicios", text: "Servicios" },
                { href: "#rutas", text: "Rutas" },
                { href: "#oficinas", text: "Oficinas" },
                { href: "#testimonios", text: "Reseñas" },
                { href: "#contacto", text: "Contacto" }
              ].map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-comarapa-dark font-medium hover:text-comarapa-light transition-colors duration-300 relative group text-sm xl:text-base"
                >
                  {item.text}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-comarapa-light transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <a 
                href="https://wa.me/59168921188" 
                className="bg-comarapa-dark text-white px-4 xl:px-6 py-2 xl:py-3 rounded-lg xl:rounded-xl font-semibold transition-all duration-300 hover:bg-comarapa-medium hover:shadow-lg transform hover:-translate-y-1 flex items-center gap-2 text-sm xl:text-base"
              >
                <svg className="h-4 w-4 xl:h-5 xl:w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Reservar Ahora
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-comarapa-dark touch-manipulation"
              style={{ minWidth: '44px', minHeight: '44px' }}
              aria-label="Menú de navegación"
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-comarapa-light/20 bg-white">
              <nav className="flex flex-col space-y-1 pt-4">
                {[
                  { href: "#inicio", text: "Inicio" },
                  { href: "#horarios", text: "Horarios" },
                  { href: "#servicios", text: "Servicios" },
                  { href: "#rutas", text: "Rutas" },
                  { href: "#oficinas", text: "Oficinas" },
                  { href: "#testimonios", text: "Reseñas" },
                  { href: "#contacto", text: "Contacto" }
                ].map((item) => (
                  <a 
                    key={item.href}
                    href={item.href} 
                    className="text-comarapa-dark font-medium hover:text-comarapa-light transition-colors py-3 px-2 rounded-lg hover:bg-comarapa-gray text-base"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ minHeight: '44px' }}
                  >
                    {item.text}
                  </a>
                ))}
                <a 
                  href="https://wa.me/59168921188" 
                  className="bg-comarapa-dark text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-comarapa-medium hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2 mt-4 text-base"
                  style={{ minHeight: '44px' }}
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Reservar WhatsApp
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - Rediseñado con gradiente verde */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-16 sm:pt-20 md:pt-24">
        {/* Background con overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/bus-hero.jpg)' }}
        ></div>
        <div className="absolute inset-0 comarapa-gradient opacity-85"></div>
        
        {/* Patrón geométrico sutil boliviano */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20l10-10v20l-10-10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-white z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge regional */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8">
              <Leaf className="h-4 w-4 sm:h-5 sm:w-5 text-comarapa-light" />
              <span className="text-xs sm:text-sm font-medium">Transporte Regional de Comarapa</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Unimos tus destinos en los
              <span className="text-comarapa-light"> Valles cruceños</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed px-4">
            Trazamos la ruta que te importa. Desde el corazón de Comarapa hasta el dinamismo de Santa Cruz, tejemos una red que une 23 localidades.
          
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-lg sm:max-w-none mx-auto">
              <a 
                href="#horarios" 
                className="bg-white text-comarapa-dark border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-comarapa-light hover:border-comarapa-light hover:shadow-lg transform hover:-translate-y-1 flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base"
                style={{ minHeight: '44px' }}
              >
                <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                Ver Horarios
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a 
                href="https://wa.me/59168921188" 
                className="bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 flex items-center gap-2 hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto justify-center text-sm sm:text-base"
                style={{ minHeight: '44px' }}
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Reservar WhatsApp
              </a>
            </div>

            {/* Stats destacados */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-4xl mx-auto">
              {[
                { number: "23", label: "Localidades", icon: MapPin },
                { number: "20+", label: "Años de experiencia", icon: Award },
                { number: "4", label: "Oficinas", icon: Globe }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-2 sm:mb-3 inline-flex">
                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-comarapa-medium" />
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-white/80 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Horarios Section - Diseño tipo Dashboard moderno */}
      <section id="horarios" className="py-16 sm:py-20 md:py-24 bg-comarapa-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-comarapa-light/20 px-3 sm:px-4 py-2 rounded-full mb-4">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-comarapa-dark" />
              <span className="text-comarapa-dark font-medium text-sm sm:text-base">Horarios de Salida</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-comarapa-dark mb-4 sm:mb-6">
              Salidas Diarias Programadas
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conectamos 23 localidades con horarios confiables y puntuales
            </p>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {/* Comarapa a Santa Cruz - Actualizado según nueva dirección */}
            <div className="comarapa-card p-4 sm:p-6 md:p-8 border-t-4 border-comarapa-dark">
              <div className="text-center mb-6 sm:mb-8">
                <div className="bg-gradient-to-br from-comarapa-dark to-comarapa-medium rounded-full p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
                  <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-comarapa-dark mb-2">Comarapa ➡️ Santa Cruz</h3>
                <p className="text-sm sm:text-base text-gray-600 font-medium">Ruta completa (23 paradas)</p>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { hora: '08:30 AM', tipo: 'dia' },
                  { hora: '02:00 AM', tipo: 'dia' },
                  { hora: '08:30 PM', tipo: 'noche' },
                  { hora: '11:30 PM', tipo: 'noche' }
                ].map(({hora, tipo}) => (
                  <div key={hora} className="flex items-center justify-between bg-comarapa-gray p-3 sm:p-4 rounded-xl hover:bg-comarapa-light/10 transition-colors">
                    <div className="flex items-center gap-2 sm:gap-3">
                      {tipo === 'dia' ? (
                        <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
                      ) : (
                        <Moon className="h-5 w-5 sm:h-6 sm:w-6 text-comarapa-dark" />
                      )}
                      <span className="font-bold text-base sm:text-lg text-comarapa-dark">{hora}</span>
                    </div>
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                      tipo === 'dia' ? 'bg-yellow-100 text-yellow-700' : 'bg-comarapa-dark/10 text-comarapa-dark'
                    }`}>
                      {tipo === 'dia' ? 'Día' : 'Noche'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Salidas desde San Isidro */}
            <div className="comarapa-card p-4 sm:p-6 md:p-8 border-t-4 border-comarapa-light md:col-span-2 lg:col-span-1">
              <div className="text-center mb-6 sm:mb-8">
                <div className="bg-gradient-to-br from-comarapa-light to-green-400 rounded-full p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
                  <Navigation className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-comarapa-dark mb-2">San Isidro ➡️ Santa Cruz</h3>
                <p className="text-sm sm:text-base text-gray-600 font-medium">Conexión directa nueva</p>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { hora: '09:00 AM', tipo: 'dia' },
                  { hora: '02:30 AM', tipo: 'dia' },
                  { hora: '09:00 PM', tipo: 'noche' },
                  { hora: '00:00 PM', tipo: 'noche' }
                ].map(({hora, tipo}) => (
                  <div key={hora} className="flex items-center justify-between bg-comarapa-gray p-3 sm:p-4 rounded-xl hover:bg-comarapa-light/10 transition-colors">
                    <div className="flex items-center gap-2 sm:gap-3">
                      {tipo === 'dia' ? (
                        <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
                      ) : (
                        <Moon className="h-5 w-5 sm:h-6 sm:w-6 text-comarapa-dark" />
                      )}
                      <span className="font-bold text-base sm:text-lg text-comarapa-dark">{hora}</span>
                    </div>
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                      tipo === 'dia' ? 'bg-yellow-100 text-yellow-700' : 'bg-comarapa-dark/10 text-comarapa-dark'
                    }`}>
                      {tipo === 'dia' ? 'Día' : 'Noche'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          
            {/* Santa Cruz a Comarapa */}
            <div className="comarapa-card p-4 sm:p-6 md:p-8 border-t-4 border-comarapa-medium">
              <div className="text-center mb-6 sm:mb-8">
                <div className="bg-gradient-to-br from-comarapa-medium to-comarapa-light rounded-full p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
                  <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-comarapa-dark mb-2">Santa Cruz ➡️ Comarapa</h3>
                <p className="text-sm sm:text-base text-gray-600 font-medium">Ruta completa (23 paradas)</p>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { hora: '10:30 AM', tipo: 'dia' },
                  { hora: '02:00 PM', tipo: 'dia' },
                  { hora: '06:30 PM', tipo: 'noche' },
                  { hora: '08:30 PM', tipo: 'noche' }
                ].map(({hora, tipo}) => (
                  <div key={hora} className="flex items-center justify-between bg-comarapa-gray p-3 sm:p-4 rounded-xl hover:bg-comarapa-light/10 transition-colors">
                    <div className="flex items-center gap-2 sm:gap-3">
                      {tipo === 'dia' ? (
                        <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
                      ) : (
                        <Moon className="h-5 w-5 sm:h-6 sm:w-6 text-comarapa-dark" />
                      )}
                      <span className="font-bold text-base sm:text-lg text-comarapa-dark">{hora}</span>
                    </div>
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                      tipo === 'dia' ? 'bg-yellow-100 text-yellow-700' : 'bg-comarapa-dark/10 text-comarapa-dark'
                    }`}>
                      {tipo === 'dia' ? 'Día' : 'Noche'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* CTA de reserva destacado */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="comarapa-card p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-comarapa-dark mb-3 sm:mb-4">
                ¿Necesitas reservar tu asiento?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Contacta a cualquiera de nuestras oficinas por WhatsApp
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <a 
                  href="https://wa.me/59168921188" 
                  className="bg-green-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
                  style={{ minHeight: '44px' }}
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Santa Cruz
                </a>
                <a 
                  href="https://wa.me/59168921154" 
                  className="bg-green-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
                  style={{ minHeight: '44px' }}
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Comarapa
                </a>
                <a 
                  href="https://wa.me/59171651781" 
                  className="bg-green-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
                  style={{ minHeight: '44px' }}
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Los Negros
                </a>
                <a 
                  href="https://wa.me/59171641780" 
                  className="bg-green-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
                  style={{ minHeight: '44px' }}
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  San Isidro
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ruta Visual Section - Rediseñada con UX optimizada */}
      <section id="rutas" className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-comarapa-light/20 px-3 sm:px-4 py-2 rounded-full mb-4">
              <Navigation className="h-4 w-4 sm:h-5 sm:w-5 text-comarapa-dark" />
              <span className="text-comarapa-dark font-medium text-sm sm:text-base">Nuestra Ruta</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-comarapa-dark mb-4 sm:mb-6">
              Conectamos 23 Localidades
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un recorrido completo desde Comarapa hasta Santa Cruz por el hermoso paisaje del Valle
            </p>
          </div>

          {/* Componente de ruta existente mejorado */}
          <RouteMap />

          {/* Información adicional de la ruta */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-comarapa-light/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-comarapa-dark" />
              </div>
              <h3 className="text-xl font-bold text-comarapa-dark mb-2">Tiempo de Viaje</h3>
              <p className="text-gray-600">Aproximadamente 6-7 horas de Santa Cruz a Comarapa</p>
            </div>
            <div className="text-center">
              <div className="bg-comarapa-light/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-comarapa-dark" />
              </div>
              <h3 className="text-xl font-bold text-comarapa-dark mb-2">Distancia Total</h3>
              <p className="text-gray-600">235 kilómetros de recorrido seguro y confortable</p>
            </div>
            <div className="text-center">
              <div className="bg-comarapa-light/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-comarapa-dark" />
              </div>
              <h3 className="text-xl font-bold text-comarapa-dark mb-2">Seguridad</h3>
              <p className="text-gray-600">Conductores profesionales y buses inspeccionados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section - Grid responsivo moderno */}
      <section id="servicios" className="py-24 bg-comarapa-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-comarapa-light/20 px-4 py-2 rounded-full mb-4">
              <Package className="h-5 w-5 text-comarapa-dark" />
              <span className="text-comarapa-dark font-medium">Nuestros Servicios</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-comarapa-dark mb-6">
              Soluciones Integrales de Transporte
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Servicios completos para todas tus necesidades de viaje y envío
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Transporte de Pasajeros */}
            <div className="comarapa-card p-8 bg-gradient-to-br from-comarapa-dark/5 to-comarapa-medium/5">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-br from-comarapa-dark to-comarapa-medium rounded-2xl p-4 shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-comarapa-dark">Transporte de Pasajeros</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-4">
                  {[
                    "Buses cómodos y climatizados",
                    "Asientos reclinables",
                    "Viajes nocturnos y diurnos",
                    "Ruta completa con 23 localidades"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-comarapa-medium mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4">
                  {[
                    "Viajes con mascotas permitidos",
                    "Tarifas para estudiantes y tercera edad",
                    "Seguro de viajero incluido",
                    "Salidas directas desde San Isidro"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-comarapa-medium mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Envío de Encomiendas */}
            <div className="comarapa-card p-8 bg-gradient-to-br from-comarapa-light/10 to-green-100/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-br from-comarapa-medium to-comarapa-light rounded-2xl p-4 shadow-lg">
                  <Package className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-comarapa-dark">Envío de Encomiendas</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-4">
                  {[
                    "Servicio puerta a puerta",
                    "Entrega en todas las localidades",
                    "Seguimiento de paquetes",
                    "Servicio express y regular"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-comarapa-medium mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4">
                  {[
                    "Paquetes de todos los tamaños",
                    "Documentos y correspondencia",
                    "Productos perecederos",
                    "Cuidado especial"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-comarapa-medium mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Viajes Personalizados */}
          <div className="comarapa-card p-8">
            <div className="text-center mb-12">
              <div className="bg-gradient-to-br from-comarapa-dark to-comarapa-light rounded-2xl p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Truck className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-comarapa-dark mb-4">Viajes Personalizados</h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Servicios especiales para eventos y ocasiones importantes
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { icon: Briefcase, title: "Empresariales", color: "blue", items: ["Delegaciones empresariales", "Reuniones de trabajo", "Eventos corporativos", "Transporte ejecutivo"] },
                { icon: Heart, title: "Familiares", color: "red", items: ["Excursiones turísticas", "Reuniones familiares", "Celebraciones y bodas", "Viajes grupales"] },
                { icon: PartyPopper, title: "Especiales", color: "yellow", items: ["Fiestas patronales", "Carnavales y ferias", "Eventos religiosos", "Peregrinaciones"] },
                { icon: GraduationCap, title: "Educativos", color: "green", items: ["Transporte escolar", "Viajes educativos", "Graduaciones", "Paseos de promoción"] },
                { icon: Church, title: "Religiosos", color: "purple", items: ["Grupos religiosos", "Retiros espirituales", "Eventos de iglesia", "Misiones"] },
                { icon: Shield, title: "Adicionales", color: "indigo", items: ["Servicios especiales", "Atención personalizada", "Flexibilidad de horarios", "Tarifas preferenciales"] }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className={`h-6 w-6 text-${service.color}-600`} />
                    <h4 className="text-lg font-bold text-gray-900">{service.title}</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Section - Slider mejorado */}
      <section id="testimonios" className="py-24 bg-comarapa-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-comarapa-light/20 px-4 py-2 rounded-full mb-4">
              <Star className="h-5 w-5 text-comarapa-light" />
              <span className="text-comarapa-light font-medium">Testimonios</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Lo que dicen nuestros <span className="text-comarapa-light">clientes</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Más de 20 años construyendo confianza con nuestros pasajeros
            </p>
          </div>

          <TestimonialsSlider />
        </div>
      </section>

      {/* Oficinas Section - Cards con mejor diseño */}
      <section id="oficinas" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-comarapa-light/20 px-4 py-2 rounded-full mb-4">
              <MapPin className="h-5 w-5 text-comarapa-dark" />
              <span className="text-comarapa-dark font-medium">Nuestras Oficinas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-comarapa-dark mb-6">
              Te Atendemos en 4 Ubicaciones
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Encuentra nuestra oficina más cercana para reservas y consultas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Santa Cruz */}
            <div className="comarapa-card p-6 group">
              <div className="bg-gradient-to-br from-comarapa-dark to-comarapa-medium rounded-xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-comarapa-dark text-center mb-4">Santa Cruz</h3>
              <div className="space-y-3 text-center mb-6">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Oficina 4to Anillo doble via la Guardia</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-medium">68921188</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">6:00 AM - 09:00 PM</span>
                </div>
              </div>
              <a 
                href="https://wa.me/59168921188" 
                className="w-full bg-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Comarapa */}
            <div className="comarapa-card p-6 group">
              <div className="bg-gradient-to-br from-comarapa-medium to-comarapa-light rounded-xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-comarapa-dark text-center mb-4">Comarapa</h3>
              <div className="space-y-3 text-center mb-6">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Terminal de Buses mercado campesino</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-medium">68921154</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">06:30 AM - 11:30 PM</span>
                </div>
              </div>
              <a 
                href="https://wa.me/59168921154" 
                className="w-full bg-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Los Negros */}
            <div className="comarapa-card p-6 group">
              <div className="bg-gradient-to-br from-comarapa-light to-green-400 rounded-xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-comarapa-dark text-center mb-4">Los Negros</h3>
              <div className="space-y-3 text-center mb-6">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Sobre la carretera cerca del puente</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-medium">71651781</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">6AM - 10PM</span>
                </div>
              </div>
              <a 
                href="https://wa.me/59171651781" 
                className="w-full bg-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
            </div>

            {/* San Isidro */}
            <div className="comarapa-card p-6 group">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Navigation className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-comarapa-dark text-center mb-4">San Isidro</h3>
              <div className="space-y-3 text-center mb-6">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Sobre la avenida cerca del mercado central</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-medium">71641780</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">6AM - 00:00 AM</span>
                </div>
              </div>
              <a 
                href="https://wa.me/59171641780" 
                className="w-full bg-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section - Rediseñado */}
      <section id="contacto" className="py-24 bg-comarapa-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-comarapa-light/20 px-4 py-2 rounded-full mb-4">
              <MessageCircle className="h-5 w-5 text-comarapa-dark" />
              <span className="text-comarapa-dark font-medium">Contacto</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-comarapa-dark mb-6">
              Estamos Aquí para Ayudarte
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Atención personalizada en horarios de oficina
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="comarapa-card p-8 comarapa-gradient text-white">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold mb-8">Información de Contacto</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 rounded-lg p-3">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-bold text-lg mb-1">Teléfonos principales:</p>
                        <p className="text-white/90">Santa Cruz: 68921188 | Comarapa: 68921154</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 rounded-lg p-3">
                        <MessageCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-bold text-lg mb-1">WhatsApp:</p>
                        <p className="text-white/90">Disponible en horarios de oficina</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 rounded-lg p-3">
                        <Shield className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-bold text-lg mb-1">Atención al cliente:</p>
                        <p className="text-white/90">Respuesta rápida en horarios de oficina</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-8">Reserva Inmediata</h3>
                  <div className="space-y-6">
                    <p className="text-white/90 text-lg">
                      Contáctanos por WhatsApp para reservar tu asiento de manera fácil y rápida.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { city: "Santa Cruz", phone: "59168921188" },
                        { city: "Comarapa", phone: "59168921154" },
                        { city: "Los Negros", phone: "59171651781" },
                        { city: "San Isidro", phone: "59171641780" }
                      ].map((office) => (
                        <a 
                          key={office.city}
                          href={`https://wa.me/${office.phone}`} 
                          className="bg-green-500 hover:bg-green-600 px-4 py-4 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                        >
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                          </svg>
                          {office.city}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer moderno */}
      <footer className="bg-comarapa-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo y descripción */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-comarapa-medium to-comarapa-light p-3 rounded-2xl">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <span className="text-2xl font-bold">Trans Comarapa</span>
              </div>
              <p className="text-white/80 mb-6 text-lg leading-relaxed max-w-md">
                Conectando Bolivia desde hace más de 20 años. Tu transporte seguro y confiable 
                en el corazón de la región de Comarapa.
              </p>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-comarapa-light">Síguenos en redes</h4>
                <div className="flex gap-3">
                  <a 
                    href="https://wa.me/59168921188" 
                    className="group bg-green-500 hover:bg-green-400 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center"
                    title="WhatsApp"
                  >
                    <svg 
                      className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.facebook.com/TransComarapa" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-blue-600 hover:bg-blue-500 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center"
                    title="Facebook"
                  >
                    <Facebook className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@trans_comarapa_oficial" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-black hover:bg-gray-700 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center relative overflow-hidden"
                    title="TikTok"
                  >
                    <div className="relative z-10">
                      <svg 
                        className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </a>
                </div>
                <div className="mt-4 text-white/70 text-sm">
                  <p>Conecta con nosotros para ofertas exclusivas y noticias</p>
                </div>
              </div>
            </div>
            
            {/* Enlaces rápidos */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-comarapa-light">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                {[
                  { href: "#horarios", text: "Horarios" },
                  { href: "#servicios", text: "Servicios" },
                  { href: "#rutas", text: "Rutas" },
                  { href: "#oficinas", text: "Oficinas" },
                  { href: "#testimonios", text: "Reseñas" },
                  { href: "#contacto", text: "Contacto" }
                ].map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      className="text-white/80 hover:text-comarapa-light transition-colors hover:translate-x-2 inline-block duration-300"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Información de oficinas */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-comarapa-light">Nuestras Oficinas</h4>
              <div className="space-y-4">
                {[
                  { city: "Santa Cruz", phone: "68921188" },
                  { city: "Comarapa", phone: "68921154" },
                  { city: "Los Negros", phone: "71651781" },
                  { city: "San Isidro", phone: "71641780" }
                ].map((office) => (
                  <div key={office.city} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-comarapa-light rounded-full"></div>
                    <span className="text-white/80">
                      <strong className="text-white">{office.city}:</strong> {office.phone}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-comarapa-medium/30 pt-8 text-center">
            <p className="text-white/60">
              &copy; 2024 Trans Comarapa. Todos los derechos reservados. | Transporte seguro y confiable
            </p>
            <p className="text-comarapa-light/80 mt-2">
              Conectando el corazón de Bolivia
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
