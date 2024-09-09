import React, { FC, ReactElement } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Fade(),
    Autoplay({ playOnInit: true, delay: 1500 }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla" style={{ padding: "54px 0 0" }}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((data, index) => (
            <div
              className="embla__slide"
              key={index}
              style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                padding: "0px",
                position: "relative",
              }}
            >
              <img
                className="embla__slide__img"
                src={`${data.bg}`}
                alt={`${data.name}`}
              />
              <p
                style={{
                  position: "absolute",
                  width: "100%",
                  top: "40%",
                  padding: "0 2rem",
                  textAlign: "center",
                  color: "#fff !important",
                  fontSize: "3rem",
                  lineHeight: "3rem",
                }}
              >
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default EmblaCarousel;
