import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

// Import images
import fw1 from './images/fw1.jpg';
import fw2 from './images/fw2.jpg';
import fw3 from './images/fw3.jpg';
import fw5 from './images/fw5.jpg';
import fw6 from './images/fw6.jpg';
import fw7 from './images/fw7.png';
import fw8 from './images/fw8.jpg';

const More = () => {
  // Define an array of media paths
  const images = [fw1, fw2, fw3, fw5, fw6, fw7, fw8];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div id="textblock">
      <div id="textblock-container-more">
        {/* Slider */}
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slider-image-container">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="slider-image"
              />
            </div>
          ))}
        </Slider>

        {/* System Requirements */}
        <h2 id="textblock-moretitle">System Requirements (Minimum) -</h2>
        <p id="textblock-more">
          CPU: Intel Core i3 2.00 GHz or AMD equivalent <br />
          RAM: 6 GB <br />
          VIDEO CARD: NVIDIA GeForce 450 or higher with 1GB Memory <br />
          DEDICATED VIDEO RAM: 1 GB <br />
          PIXEL SHADER: 5.0 <br />
          VERTEX SHADER: 5.0 <br />
          OS: Windows 7 or higher 64bit <br />
          FREE DISK SPACE: 4 GB <br />
        </p>
        <br />
        <h2 id="textblock-moretitle">System Requirements (Recommended) -</h2>
        <p id="textblock-more">
          CPU: Intel Core i5 2.00 GHz or AMD equivalent <br />
          RAM: 8 GB <br />
          VIDEO CARD: NVIDIA GeForce 1050Ti or higher with 1GB Memory <br />
          DEDICATED VIDEO RAM: 2 GB <br />
          PIXEL SHADER: 5.0 <br />
          VERTEX SHADER: 5.0 <br />
          OS: Windows 10 or higher 64bit <br />
          FREE DISK SPACE: 4 GB <br />
        </p>
      </div>
    </div>
  );
};

export default More;
