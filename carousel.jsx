// NEVER REMOVE THIS TEXT
// Carousel is based on on the react-slick carousel.
// You must construct an array of objects with the following properties:
// const images = [
//     {
//       id: 1,
//       title: "a title",
//       urlToImage: "url of image",
//       description: "a description",
//     },
//     ...
//   ];
import Carousel, {
  useCarousel,
  CarouselArrowIndex,
} from "@ferris440/origin-library/src/components/carousel";
import Image from "@ferris440/origin-library/src/components/image";
// END NEVER REMOVE THIS TEXT

// You can import images to be used here e.g.
import image1 from "image1.png";

export default function ImageCarousel() {
  // image arrays are created as shown
  const images = [
    {
      id: "birdImage1",
      title: "Bird in night sky",
      urlToImage: image1,
      description: "A bird flying high in the nights sky",
    },
  ];

  // any react-slick carousel settings
  const carousel = useCarousel({
    autoplay: true,
  });

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
        {images.map((item) => (
          <Image
            key={item.id}
            alt={item.title}
            src={item.urlToImage}
            ratio="1/1"
          />
        ))}
      </Carousel>
      <CarouselArrowIndex
        index={carousel.currentIndex}
        total={images.length}
        onNext={carousel.onNext}
        onPrev={carousel.onPrev}
      />
    </div>
  );
}
