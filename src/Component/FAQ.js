import React, { useState } from "react";

const faqs = [
  { pregunta: "¿Cuánto dura una sesión?", respuesta: "Aproximadamente 45 minutos." },
  { pregunta: "¿Aceptan seguros?", respuesta: "Sí, trabajamos con varias EPS." },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <h2>Preguntas Frecuentes</h2>
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item ${activeIndex === i ? "active" : ""}`} onClick={() => toggleFAQ(i)}>
          <h4>{faq.pregunta}</h4>
          <p className="faq-answer">{faq.respuesta}</p>
        </div>
      ))}
    </section>
  );
};

export default FAQ;
