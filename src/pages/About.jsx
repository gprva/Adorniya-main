import React, { useState } from 'react';
import jobbber1 from '../assets/obber.jpg'
import jobbber2 from '../assets/joobber2.jpg'

import jobbber3 from '../assets/jobber3.jpg'


const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="about-us-container">

      <section className="about-us-accordion">

        <div className="accordion">
          {[
            { question: 'What products do you offer?', answer: 'In our jewelry store, we offer a wide range of unique and exquisite pieces that reflect high levels of craftsmanship and individual style. Our collection includes diverse adornments crafted using the finest materials, including precious and semi-precious gemstones, gold, silver, and platinum. We provide exclusive rings, necklaces, bracelets, earrings, and more, each piece of which is a unique work of art. Our designers carefully track the latest trends in the world of fashion and jewelry art to offer you only the most stylish and relevant accessories.' },
            { question: 'How can I contact customer service?', answer: 'In our jewelry store, we offer a wide range of unique and exquisite pieces that reflect high levels of craftsmanship and individual style. Our collection includes diverse adornments crafted using the finest materials, including precious and semi-precious gemstones, gold, silver, and platinum. We provide exclusive rings, necklaces, bracelets, earrings, and more, each piece of which is a unique work of art. Our designers carefully track the latest trends in the world of fashion and jewelry art to offer you only the most stylish and relevant accessories.' },
            { question: 'Do you offer international shipping?', answer: 'In our jewelry store, we offer a wide range of unique and exquisite pieces that reflect high levels of craftsmanship and individual style. Our collection includes diverse adornments crafted using the finest materials, including precious and semi-precious gemstones, gold, silver, and platinum. We provide exclusive rings, necklaces, bracelets, earrings, and more, each piece of which is a unique work of art. Our designers carefully track the latest trends in the world of fashion and jewelry art to offer you only the most stylish and relevant accessories.' },
          ].map((item, index) => (
            <div key={index} className="accordion-item">
              <button
                className={`accordion-button ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleAccordionClick(index)}
              >
                {item.question}
              </button>
              <div className={`accordion-content ${activeIndex === index ? 'active' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default AboutUs;
