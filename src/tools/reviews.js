import React from 'react';
import Card from 'react-bootstrap/Card';
import review from '../images/review.webp';

function ReviewCard() {
  return (
    <div className="col-sm-4 mx-auto">
      <div className="card review d-flex justify-content-center align-items-center border-0 text-center">
        <div className="face front-face">
          <img src={review}
		  	  style={{width: '100%', height: '400px', objectFit: 'contain'}}
              alt="" className="profile" />
          <div className="pt-3 text-uppercase name">
            Uber Driver
          </div>
          <div className="designation">Google Review</div>
          <div className="row">
            <div className="col-sm-2">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
        </div>
        <div className="face back-face">
          <i className="fa fa-quote-left"></i>
          <div className="testimonial">
		  	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <i className="fa fa-quote-right"></i>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
