import React from 'react'

function Slider() {
  return (
    <div className='container-fluid ' id='slider'>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner px-3">
          <div className="carousel-item active">
            <img src="https://www.clariwell.in/resources/best-web-development-course-top-training-institute-in-pune.webp" className="d-block img-fluid" alt="https://w3-lab.com/wp-content/uploads/2019/12/Get-the-Most-Fancied-Web-Development-Services-min-scaled.jpg" />
          </div>
          <div className="carousel-item">
            <img src="https://futureskillsprime.in//sites/default/files/2021-04/web-development.jpg" className="d-block img-fluid" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://futureskillsprime.in//sites/default/files/2021-04/web-development.jpg" className="d-block img-fluid" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      

    </div>
  )
}

export default Slider;