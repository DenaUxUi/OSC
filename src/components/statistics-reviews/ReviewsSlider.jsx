import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./style.module.css";
import { reviewsData } from "../../constants";
import ReviewCard from "./ReviewCard";

const sliderSettigs = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0px",
};

const ReviewsSlider = () => {
  return (
    <div className={styles.sliderReviews}>
      <Slider {...sliderSettigs}>
        {reviewsData.map((item) => {
          return (
            <div key={item.title} className={styles.contentCenter}>
              <ReviewCard key={item.title} item={item} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ReviewsSlider;
