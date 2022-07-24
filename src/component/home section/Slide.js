import React, { useState } from "react";

const Slide = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <section className="slider">
        <div className="control-btn">
          <button className="prev" onClick={prevSlide}>
            <i className="fas fa-caret-left"></i>
          </button>
          <button className="next" onClick={nextSlide}>
            <i className="fas fa-caret-right"></i>
          </button>
        </div>

        {slides.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && <img src={slide.image} alt="Home" />}
            </div>
          );
        })}
      </section>

      <section className="slide-form">
        <div className="container">
          <h2>Pata Hostel</h2>
          <span> Search, find and book from anywhere</span>

          <form>
            <input type="text" placeholder="where do you want to live" />
            <div className="flex_space">
            <select _ngcontent-c6="" class="form-control ng-pristine ng-valid ng-touched" id="hostel_type" name="sex">
              <option _ngcontent-c6="" disabled="" selected="" value="0: undefined">Hostel type</option>
              <option _ngcontent-c6="">Male</option><option _ngcontent-c6="">Female</option><option _ngcontent-c6="">Mixed</option>
              </select>
              {/* <input type="date" placeholder="Check In" />
              <input type="date" placeholder="Check Out" /> */}
            </div>
            <div className="flex_space">
              <input type="gender" placeholder="male/female" />
            </div>
            <input type="number" placeholder="Rooms" />
            <input type="Submit" value="Search" className="submit" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Slide;
