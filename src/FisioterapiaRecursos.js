import React from "react";
import {
  MdElectricalServices,
  MdGraphicEq,
  MdLocalActivity,
  MdHotTub,
  MdOpacity,
  MdFitnessCenter,
  MdDirectionsBike,
  MdSports,
  MdRadioButtonChecked,
} from "react-icons/md";

const resources = [
  { icon: <MdElectricalServices size={40} />, label: "Equipos de electroterapia" },
  { icon: <MdGraphicEq size={40} />, label: "Ultrasonido" },
  { icon: <MdHotTub size={40} />, label: "Compresas húmedo-calientes" },
  { icon: <MdOpacity size={40} />, label: "Hidrocolector" },
  { icon: <MdLocalActivity size={40} />, label: "Mecanoterapia" },
  { icon: <MdDirectionsBike size={40} />, label: "Spinning" },
  { icon: <MdSports size={40} />, label: "Pilates Matt" },
  { icon: <MdRadioButtonChecked size={40} />, label: "Balones de Bobath" },
];

const PhysicalResources = () => {
  return (
    <section className="py-12 bg-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-sky-600 mb-6">
          Nuestros Recursos Físicos
        </h2>
        <hr className="mb-10 border-t border-gray-300 w-1/2 mx-auto" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {resources.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-sky-600 mb-2">{item.icon}</div>
              <p className="text-gray-800 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhysicalResources;
