import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './ReviewBox.style.css';
import Review from '../Review/Review';

const ReviewBox = ({ review }) => {
  return (
    <div className='review-box-area'>
      {review?.length === 0 ? (
        <Row className='mt-4 px-4'>
          <Col>No Review</Col>
        </Row>
      ) : (
        <Row className='mt-4 px-4 py-2 review-box'>
          {review?.map((item, index) => (
            <Col
              key={index}
              lg={12}
              className={index !== review.length - 1 && 'border-style' }
            >
              <Review review={item} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ReviewBox;