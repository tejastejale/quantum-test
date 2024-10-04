import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

import carousalImgs from "../Assets/Testimonials.png";
const items = [
  {
    src: carousalImgs,
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: carousalImgs,
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: carousalImgs,
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
];

function Testimonials(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <div className="d-flex justify-content-center my-5">
          <img
            src={item.src}
            alt={item.altText}
            className="w-75"
            //   style={{ paddingBottom: "50px", padding: "50px" }}
          />
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      dark
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Testimonials;
