import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import i1 from '../Assets/1.jpeg';
import i2 from '../Assets/2.jpeg';
import i3 from '../Assets/3.jpeg'
function HeaderTop (){
    return (
        <div>
            <h1 style={{textAlign : "center", color: "pink"}}> Let Us Live Like Flowers</h1>
            <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={i1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Pink</h5>
          <p>May The Flowers Remind Us Why The Rain Was So Necessary.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={i2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>White</h5>
          <p>May The Petals Teach Me The Art Of Letting Go.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={i3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Yellow</h5>
          <p>
            Choose What Helps Your Heart Bloom.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
           
        </div>
    )
}
export default HeaderTop;