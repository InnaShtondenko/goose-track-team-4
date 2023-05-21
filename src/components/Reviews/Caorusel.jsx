// import { useState } from 'react';

// export function Carousel({ images }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
//   };

//   const nextSlide = () => {
//     setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
//   };

//   return (
//     <div className="carousel">
//       <img src={images[currentIndex]} alt="Carousel Slide" />
//       <div className="controls">
//         <button onClick={prevSlide}>Prev</button>
//         <button onClick={nextSlide}>Next</button>
//       </div>
//     </div>
//   );
// }
