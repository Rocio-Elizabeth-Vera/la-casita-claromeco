import React from 'react';
import PropertyDescription from './property-description.tsx';

const App: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Otros componentes y secciones */}
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="property-details lg:w-2/3">
          <PropertyDescription />
        </div>

        <aside id="contacto" className="booking-form lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
          {/* Formulario de disponibilidad */}
        </aside>
      </div>

      {/* Otras secciones */}
    </div>
  );
};

export default App;