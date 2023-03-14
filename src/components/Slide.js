import React from 'react'
import banner from "../banner.png"
import Slide2 from "../slide2.png"
import best from "../best.png";



const Slide = () => {
  return (
    
  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={banner} className="d-block w-100 aaa" alt="banner"  />
      </div>
      <div className="carousel-item">
        <img src={Slide2} className="d-block w-100 aaa" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={best} className="d-block w-100  aaa" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </button>
    
      </div>





  )
}

export default Slide;
