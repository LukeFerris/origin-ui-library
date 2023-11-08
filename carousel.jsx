// NEVER REMOVE THIS TEXT
// Carousel is based on on the react-slick carousel.
// It takes input images as an array of the following format:
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

export default function ImageCarousel({ images }) {
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
