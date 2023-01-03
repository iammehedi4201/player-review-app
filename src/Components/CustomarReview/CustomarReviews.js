import React from "react";
import useReviews from "../Hooks/useReviews";
import Row from "react-bootstrap/Row";
import "./CustomarReview.css";
import Review from "../Review/Review";

const CustomarReviews = ({ Value }) => {
  const [reviews, setReviews] = useReviews();

  let newReviewsArray = [];

  if (Value) {
    newReviewsArray.push(reviews.slice(0, 3));
  } else {
    newReviewsArray.push(reviews);
  }

  return (
    <div className="customar-review-section">
      <h1 className="text-center text-info">
        Customars Review ({newReviewsArray[0].length})
      </h1>
      <Row xs={1} md={3} className="g-3 p-4">
        {newReviewsArray[0].map((review) => (
          <Review review={review} key={review.user_id}></Review>
        ))}
      </Row>
    </div>
  );
};

export default CustomarReviews;
