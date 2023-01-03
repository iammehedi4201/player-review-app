import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./Review.css";

const Review = ({ review }) => {
  const { user_img, review_text,rating,date} = review;

  return (
    <Col>
      <Card className="review-card-sizing">
        <Card.Img
          className="review-card-img-sizing"
          variant="top"
          src={user_img}
        />
        <Card.Body>
          <Card.Title>{date}</Card.Title>
          <Card.Text>{review_text}</Card.Text>
          <h6 className="card-text">
            <small className="text-muted">Ratings :{rating}.0</small>
          </h6>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Review;
