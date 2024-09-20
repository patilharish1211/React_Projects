// Welcome page for the application.
// Content:- Displays a welcome message and brief introduction to the product catalog.
import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="Home-class" style={{ color: "#BC6C25" }}>Welcome to Product Catalog</h1>
      <p style={{color: 'gray' }}>
        Explore a wide range of products and learn more about what we offer.Use the navigation
        bar to browse through different sections of the application.Enjoy your shopping experience!
        We offer a diverse selection of high-quality items ranging from electronics to home appliances,
        fashion, and more. Our catalog is regularly updated to bring you the latest trends and innovations.
        Whether you're looking for something specific or just browsing, we're here to help you find what
        you need. Don't forget to check out our special deals and discounts available for a limited time.
      </p>
      <b style={{ color: "#BC6C25" }}>Happy shopping!</b>
    </div>
  )
}

export default Home;


