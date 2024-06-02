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
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Discover the story behind Nike Shop and our commitment to excellence.</p>
      </header>

      <section className="about-us-banner">
        <img src="https://i-fotok.ru/moda/samie-dorogie-kolca-ot-Tiffani_4/7.jpg" alt="Nike Shop Banner" />
      </section>

      <section className="about-us-content">
        <article className="about-us-description">
          <h2>Who We Are</h2>
          <p>
            Welcome to Nike Shop, your ultimate destination for trendy and high-quality sportswear.
            We are passionate about providing athletes and sports enthusiasts with top-notch products
            to enhance their performance and style.
          </p>
        </article>

        <article className="about-us-mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to inspire and motivate individuals to reach their fitness goals by offering
            a wide range of athletic apparel, footwear, and accessories. We believe that everyone has
            the potential to push their limits and excel in their chosen sports.
          </p>
        </article>

        <article className="about-us-values">
          <h2>Our Values</h2>
          <p>
            At Nike Shop, we value innovation, quality, and customer satisfaction. We work closely with
            athletes, designers, and experts to create products that combine cutting-edge technology,
            comfort, and style. Your satisfaction is our top priority, and we strive to provide exceptional
            customer service and a seamless shopping experience.
          </p>
        </article>
      </section>

      <section className="about-us-visit">
        <h2>Visit Us</h2>
        <p>Visit us today and unleash your potential with Nike Shop!</p>
      </section>

      <section className="about-us-accordion">
        <h2>Frequently Asked Questions</h2>
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

      <section className="about-us-cards">
        <h2>Our Team</h2>
        <div className="cards-container">
          <div className="card">
            <img src={jobbber1} alt="Team Member" />
            <h3>Nasty Alekseevna</h3>
            <p>CEO</p>
          </div>
          <div className="card">
            <img src={jobbber2} alt="Team Member" />
            <h3>Marya Eduardovna</h3>
            <p>Head of Design</p>
          </div>
          <div className="card">
            <img src={jobbber3} alt="Team Member" />
            <h3>Emilya Ivanovna</h3>
            <p>Marketing Director</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
