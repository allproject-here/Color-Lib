import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
let dragging = false;
class Sliders extends React.Component{
  render(){
       var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ],
         beforeChange: () => dragging = true,
      afterChange: () => dragging = false,
    };
  return(<>
     	<Slider {...settings} className="py-5">

        	<div>
                <a href="index.js" onClick={(e)=> dragging}>
                    <img src='https://preview.colorlib.com/theme/universityedu/assets/img/gallery/brand2.png.webp' className="img-fluid" width={'110px'} alt=""/>
                </a>
            </div>

        	<div>
                <a href="index.js" onClick={(e)=> dragging}>
                    <img src='https://preview.colorlib.com/theme/universityedu/assets/img/gallery/brand3.png.webp' className="img-fluid" width={'110px'} alt=""/>
                </a>
            </div>

            <div>
                <a href="index.js" onClick={(e)=> dragging}>
                    <img src='https://preview.colorlib.com/theme/universityedu/assets/img/gallery/brand4.png.webp' className="img-fluid" width={'110px'} alt=""/>
                </a>
            </div>

        	<div>
                <a href="index.js" onClick={(e)=> dragging}>
                    <img src='https://preview.colorlib.com/theme/universityedu/assets/img/gallery/brand1.png.webp' className="img-fluid" width={'110px'} alt=""/>
                </a>
            </div>

            <div>
                <a href="index.js" onClick={(e)=> dragging}>
                    <img src='https://preview.colorlib.com/theme/universityedu/assets/img/gallery/brand2.png.webp' className="img-fluid" width={'110px'}  alt=""/>
                </a>
            </div>

        	<div>
                <a href="index.js" onClick={(e)=> dragging}>
                    <img src='https://preview.colorlib.com/theme/universityedu/assets/img/gallery/brand3.png.webp' className="img-fluid" width={'110px'} alt=""/>
                </a>
            </div>

            <div>
                <a href="index.js" onClick={(e)=> dragging}>
                    <img src='https://preview.colorlib.com/theme/universityedu/assets/img/gallery/brand4.png.webp' className="img-fluid" width={'110px'} alt="" />
                </a>
            </div>

        	<div>
                <a href="index.js" onClick={(e)=> dragging}>
                    <img src='https://preview.colorlib.com/theme/universityedu/assets/img/gallery/brand1.png.webp' className="img-fluid" width={'110px'} alt=""/>
                </a>
            </div>

            <div>
                <a href="index.js" onClick={(e)=> dragging}>
                    <img src='https://preview.colorlib.com/theme/universityedu/assets/img/gallery/brand2.png.webp' className="img-fluid" width={'110px'}  alt=""/>
                </a>
            </div>

        	<div>
                <a href="index.js" onClick={(e)=> dragging}>
                    <img src='https://preview.colorlib.com/theme/universityedu/assets/img/gallery/brand3.png.webp' className="img-fluid" width={'110px'} alt=""/>
                </a>
            </div>

            <div>
                <a href="index.js" onClick={(e)=> dragging}>
                    <img src='https://preview.colorlib.com/theme/universityedu/assets/img/gallery/brand4.png.webp' className="img-fluid" width={'110px'} alt="" />
                </a>
            </div>

        	<div>
                <a href="index.js" onClick={(e)=> dragging}>
                    <img src='https://preview.colorlib.com/theme/universityedu/assets/img/gallery/brand1.png.webp' className="img-fluid" width={'110px'} alt="" />
                </a>
            </div>

        </Slider>
  </>)
  }
}

export default Sliders



