import React from 'react';
import templeImage from '../assests/temple.jpg';  
import danceImage from '../assests/dance.jpg';    
import foodImage from '../assests/food.jpg';      

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome to Indian Heritage</h1>
      <p className="home-description">
        Explore the rich culture, history and famous monuments of India!
      </p>

      <section className="culture-section">
      <h1 className="section-heading">Indian Heritage & Culture</h1>
        <p className="section-description">
          The pertinent identifying elements of India's nationalism, culture and heritage represent the heart and soul of the country. The fragrance of India's inherent ethnic essence lingers to mesmerize the world at large.
        </p>

        <div className="culture-grid">
          {/* Temples */}
          <div className="culture-item">
            <img src={templeImage} alt="Indian Temple" className="culture-image" />
            <h3 className="item-heading">Temples</h3>
            <p className="item-description">
              India is home to countless temples, each with a rich history and spiritual significance. They represent architectural grandeur and spiritual devotion across centuries.
            </p>
          </div>

          {/* Dance */}
          <div className="culture-item">
            <img src={danceImage} alt="Indian Dance" className="culture-image" />
            <h3 className="item-heading">Classical Dances</h3>
            <p className="item-description">
              Indian classical dances such as Bharatanatyam, Kathak, Odissi and Kuchipudi beautifully express India's artistic and cultural values through movement, music and storytelling.
            </p>
          </div>

          {/* Cuisine */}
          <div className="culture-item">
            <img src={foodImage} alt="Indian Food" className="culture-image" />
            <h3 className="item-heading">Indian Cuisine</h3>
            <p className="item-description">
              From the spicy flavors of the North to the tropical sweetness of the South, Indian cuisine reflects the diversity of its people and regions. Enjoy an extraordinary journey of taste and spices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
