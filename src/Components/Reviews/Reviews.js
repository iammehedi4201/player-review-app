import React from 'react';
import CustomarReviews from '../CustomarReview/CustomarReviews';

const Reviews = () => {

    let Value =false;

    return (
        <div className='reviews-section'>
             <CustomarReviews Value={Value}></CustomarReviews>
        </div>
    );
};

export default Reviews;