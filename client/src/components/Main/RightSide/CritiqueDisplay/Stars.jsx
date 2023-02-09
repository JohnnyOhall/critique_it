// import React, { useState } from 'react';
// import StarRatingComponent from 'react-star-rating-component';

// const Stars = props => {

//   const [rating, setRating] = useState(1)

//   return (
//     <div>
//       <h2>Rating from state: {rating}</h2>
//       <StarRatingComponent
//         name="rate2"
//         editing={false}
//         renderStarIcon={() => <span></span>}
//         starCount={10}
//         value={8}
//       />
//     </div>
//   );
// }


// export default Stars;


import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const Stars = props => {
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)

    // other logic
  }


  return (
    <div className='App'>
      <Rating
        onClick={handleRating}
        /* Available Props */
        iconsCount={10}
      />
    </div>
  )
}

export default Stars;