import React from "react";
import useBreakpoint from "use-breakpoint";
import styles from "./style.module.css";
import cloudArrowUpIcon from "../../assets/icons/CloudArrowUpIcon";
import smileIcon from "../../assets/icons/SmileIcon";
import plugIcon from "../../assets/icons/PlugIcon";
import thumbsUpIcon from "../../assets/icons/ThumbsUpIcon";
import ReviewCard from "./ReviewCard";
import { BREAKPOINTS, reviewsData } from "../../constants";
import ReviewsSlider from "./ReviewsSlider";

const statistics = [
  { Icon: smileIcon, title: "1790", description: "Довольных клиентов" },
  { Icon: cloudArrowUpIcon, title: "24", description: "Клиентских серверов" },
  { Icon: plugIcon, title: "491", description: "Интеграций сервиса" },
  {
    Icon: thumbsUpIcon,
    title: "1000+",
    description: "Благодарностей и отзывов",
  },
];

const StatisticsReviews = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);

  const isMobile = ["smallMobile", "mobile", "bigMobile", "tablet"].includes(
    breakpoint
  );

  return (
    <div className={styles.statisticsReviewsContainer}>
      <div className="container">
        <h2>Статистика и отзывы</h2>
        <div className={styles.description}>1С в Облаке</div>
        <div className={styles.statisticsContainer}>
          {statistics.map(({ Icon, title, description }) => {
            return (
              <div className={styles.statisticsContent} key={title}>
                <Icon />
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
        {!isMobile ? (
          <div className={styles.reviewsContainer}>
            {reviewsData.map((item) => {
              return <ReviewCard key={item.title} item={item} />;
            })}
          </div>
        ) : (
          <ReviewsSlider />
        )}
      </div>
    </div>
  );
};

export default StatisticsReviews;
