import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

// Las 23 localidades en orden invertido: Comarapa → Santa Cruz
const routeLocalities = [
  { name: 'Comarapa', type: 'principal' },
  { name: 'Tambo', type: 'normal' },
  { name: 'San Isidro', type: 'principal' },
  { name: 'La Palizada', type: 'normal' },
  { name: 'El Quiñe', type: 'normal' },
  { name: 'Mataral', type: 'normal' },
  { name: 'Los Negros', type: 'normal' },
  { name: 'Agua Clara', type: 'normal' },
  { name: 'Hierba Buena', type: 'normal' },
  { name: 'Mairana', type: 'normal' },
  { name: 'Samaipata', type: 'normal' },
  { name: 'Achiras', type: 'normal' },
  { name: 'Cuevas', type: 'normal' },
  { name: 'La Angostura', type: 'normal' },
  { name: 'San Luis', type: 'normal' },
  { name: 'Taruma', type: 'normal' },
  { name: 'Jorochito', type: 'normal' },
  { name: 'Limoncito', type: 'normal' },
  { name: 'El Torno', type: 'normal' },
  { name: 'Santa Rita', type: 'normal' },
  { name: 'San José', type: 'normal' },
  { name: 'La Guardia', type: 'normal' },
  { name: 'Santa Cruz', type: 'principal' }
];

const RouteMap: React.FC = () => {
  return (
    <div className="w-full">
      {/* Título de la sección */}
      <div className="text-center mb-6 md:mb-8 px-4">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-comarapa-dark mb-3 md:mb-4">
          Nuestra Ruta Completa
        </h3>
        <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Conectando 23 localidades desde Comarapa hasta Santa Cruz, 
          ahora con salidas directas desde San Isidro
        </p>
      </div>

      {/* Contenedor de la ruta con scroll horizontal */}
      <div className="relative overflow-x-auto pb-6 md:pb-8">
        {/* Indicador de scroll en móviles */}
        <div className="block md:hidden text-center mb-4">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
            <span>👈 Desliza para ver toda la ruta 👉</span>
          </p>
        </div>
        
        <div className="flex items-center justify-start min-w-max px-4 md:px-8 lg:px-12" style={{ minWidth: '1600px' }}>
          {routeLocalities.map((locality, index) => (
            <React.Fragment key={index}>
              {/* Nodo de la localidad */}
              <div className="flex flex-col items-center relative touch-manipulation">
                {/* Círculo numerado */}
                <div
                  className={`
                    w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 
                    rounded-full flex items-center justify-center 
                    font-bold text-white border-4 border-white shadow-lg relative z-10
                    transition-all duration-300 hover:scale-110 cursor-pointer
                    ${locality.type === 'principal' 
                      ? 'bg-comarapa-dark text-base sm:text-lg md:text-xl lg:text-2xl' 
                      : 'bg-comarapa-light text-sm sm:text-base md:text-lg lg:text-xl'
                    }
                  `}
                  title={`${locality.name} - Parada ${index + 1}`}
                >
                  {index + 1}
                </div>
                
                {/* Nombre de la localidad */}
                <div className="mt-2 sm:mt-3 text-center max-w-16 sm:max-w-20 md:max-w-24 lg:max-w-28">
                  <p 
                    className={`
                      text-xs sm:text-sm md:text-base font-semibold leading-tight
                      ${locality.type === 'principal' 
                        ? 'text-comarapa-dark' 
                        : 'text-gray-700'
                      }
                    `}
                  >
                    {locality.name}
                  </p>
                </div>

                {/* Indicador especial para ciudades principales */}
                {locality.type === 'principal' && (
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 z-20">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                      <MapPin className="w-2 h-2 sm:w-3 sm:h-3 text-comarapa-dark" />
                    </div>
                  </div>
                )}
              </div>

              {/* Línea conectora (no mostrar después del último elemento) */}
              {index < routeLocalities.length - 1 && (
                <div className="flex-1 h-1 sm:h-1.5 bg-comarapa-light mx-2 sm:mx-3 md:mx-4 lg:mx-6 min-w-12 sm:min-w-16 md:min-w-20 lg:min-w-24 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-comarapa-light to-comarapa-medium rounded-full shadow-sm"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Leyenda */}
      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 mt-6 md:mt-8 mb-6 md:mb-8 px-4">
        <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-comarapa-dark rounded-full"></div>
          <span className="text-xs sm:text-sm text-gray-600 font-medium">Ciudades Principales</span>
        </div>
        <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-comarapa-light rounded-full"></div>
          <span className="text-xs sm:text-sm text-gray-600 font-medium">Localidades</span>
        </div>
        <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm">
          <div className="w-4 h-1 sm:w-4 sm:h-1 bg-comarapa-light rounded-full"></div>
          <span className="text-xs sm:text-sm text-gray-600 font-medium">Conexión</span>
        </div>
      </div>

      {/* Botón para ver en Google Maps */}
      <div className="text-center mt-6 md:mt-8 px-4">
        <a 
          href="https://maps.app.goo.gl/sTTbpF179E2ZnpyV9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 sm:gap-3 bg-comarapa-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-comarapa-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 touch-manipulation text-sm sm:text-base"
          style={{ minHeight: '44px' }}
        >
          <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="whitespace-nowrap">Ver ruta en Google Maps</span>
          <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
        </a>
      </div>

      {/* Información adicional */}
      <div className="mt-6 md:mt-8 mx-4 p-4 sm:p-6 bg-comarapa-gray rounded-2xl">
        <div className="text-center">
          <h4 className="text-base sm:text-lg md:text-xl font-bold text-comarapa-dark mb-4 md:mb-6">
            Información Importante de la Ruta
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-sm md:text-base text-gray-600">
            <div className="flex flex-col items-center p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-comarapa-light rounded-full flex items-center justify-center mb-2 sm:mb-3">
                <span className="text-white font-bold text-sm sm:text-base">23</span>
              </div>
              <span className="font-semibold text-comarapa-dark">Localidades</span>
              <span className="text-xs sm:text-sm">Conectadas</span>
            </div>
            <div className="flex flex-col items-center p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-comarapa-medium rounded-full flex items-center justify-center mb-2 sm:mb-3">
                <span className="text-white font-bold text-sm sm:text-base">3</span>
              </div>
              <span className="font-semibold text-comarapa-dark">Ciudades</span>
              <span className="text-xs sm:text-sm">Principales</span>
            </div>
            <div className="flex flex-col items-center p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-comarapa-dark rounded-full flex items-center justify-center mb-2 sm:mb-3">
                <span className="text-white font-bold text-sm sm:text-base">4</span>
              </div>
              <span className="font-semibold text-comarapa-dark">Oficinas</span>
              <span className="text-xs sm:text-sm">Disponibles</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteMap;
