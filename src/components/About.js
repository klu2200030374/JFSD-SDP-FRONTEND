import React from "react";
import culturalImage from "../assests/cultural.jpg";  
import spiritualImage from "../assests/spiritual.jpg";  
import artImage from "../assests/art.jpg";  
function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Indian Culture and Heritage</h1>
      <p className="about-description">
        India’s culture and heritage are an extraordinary tapestry of diversity, a harmonious fusion of ancient traditions, spirituality, languages and arts. The vibrant culture of India is a treasure trove that captivates the world with its colorful festivals, profound philosophies and artistic brilliance. Each region of India contributes to this diversity with its unique customs, language, attire and traditions.
      </p>

      <section className="about-section">
        <h2 className="section-heading">Rich Cultural Traditions</h2>
        <div className="about-content">
          <p className="section-description">
            India’s culture spans thousands of years, from the Vedic age to modern times. It is enriched by its historical evolution and the influence of countless dynasties, kingdoms and rulers. The country boasts a unique blend of different cultures, where people of different religious and cultural backgrounds live together in harmony. From ancient temple architecture, sacred scriptures and the Sanskrit language to classical dances, music and a rich culinary legacy, every part of India tells a story of cultural richness.
          </p>
          <img src={culturalImage} alt="Cultural Traditions" className="about-image" />
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-heading">Spiritual Heritage</h2>
        <div className="about-content">
        <img src={spiritualImage} alt="Spiritual Heritage" className="about-image" />
          <p className="section-description">
            India is renowned worldwide for its spiritual heritage. It is the birthplace of several major religions, including Hinduism, Buddhism, Jainism and Sikhism. Temples, mosques, churches, monasteries and gurdwaras can be found in every corner of India, reflecting the country’s deep connection to spirituality. Festivals such as Diwali, Holi, Eid, Christmas and others are celebrated with great enthusiasm, further cementing the sense of unity in diversity.
          </p>
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-heading">Art and Architecture</h2>
        <div className="about-content">
          <p className="section-description">
            Indian art is a rich and dynamic field, from the mesmerizing classical dances like Bharatanatyam and Kathak to the intricate beauty of miniature paintings and handloom textiles. India is home to architectural wonders like the Taj Mahal, ancient temples in South India, the fort cities of Rajasthan and much more, offering a visual feast of diverse styles that reflect centuries of history and craftsmanship.
          </p>
          <img src={artImage} alt="Art and Architecture" className="about-image" />
        </div>
      </section>
    </div>
  );
}

export default About;
