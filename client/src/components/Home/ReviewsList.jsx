import Review from "./Review";
import Carousel from "react-multi-carousel";

const reviews = [
  {
    image: "https://picsum.photos/200/300",
    text: "This is the first review",
    name: "John Doe",
  },
  {
    image: "https://picsum.photos/200/300",
    text: "This is the second review",
    name: "Jane Doe",
  },
  {
    image: "https://picsum.photos/200/300",
    text: "This is the third review",
    name: "Sam Smith",
  },
  {
    image: "https://picsum.photos/200/300",
    text: "This is the fourth review",
    name: "Alex Johnson",
  },
  {
    image: "https://picsum.photos/200/300",
    text: "This is the fifth review",
    name: "Chris Lee",
  },
  {
    image: "https://picsum.photos/200/300",
    text: "This is the first review",
    name: "John Doe",
  },
  {
    image: "https://picsum.photos/200/300",
    text: "This is the second review",
    name: "Jane Doe",
  },
  {
    image: "https://picsum.photos/200/300",
    text: "This is the third review",
    name: "Sam Smith",
  },
  {
    image: "https://picsum.photos/200/300",
    text: "This is the fourth review",
    name: "Alex Johnson",
  },
  {
    image: "https://picsum.photos/200/300",
    text: "This is the fifth review",
    name: "Chris Lee",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ReviewsList = () => {
  return (
    <div className="h-96 lg:mx-10 mx-2 lg:pt-6 pt-0">
      <Carousel responsive={responsive} className="bg-white">
        {reviews.map((review, index) => (
          <div key={index}>
            <Review {...review} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewsList;
