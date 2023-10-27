// NEVER REMOVE THIS TEXT
// Carousel is based on on the react-slick carousel.
// It takes input data as an array of the following format:
// const data = [
//     {
//       id: 1,
//       title: "a title",
//       coverUrl: "url of image",
//       description: "a description",
//     },
//     ...
//   ];
import { Card } from "@mui/material";
import Carousel from "@ferris440/origin-library/src/components/carousel";
import Carousel, {
  useCarousel,
  CarouselArrowIndex,
} from "@ferris440/origin-library/src/components/carousel";
import Image from "@ferris440/origin-library/src/components/image";
// END NEVER REMOVE THIS TEXT

export default function ImageCarousel({ data }) {
  const carousel = useCarousel({
    autoplay: true,
  });

  return (
    <Card>
      <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
        {data.map((item) => (
          <Image
            key={item.id}
            alt={item.title}
            src={item.coverUrl}
            ratio="1/1"
          />
        ))}
      </Carousel>
      <CarouselArrowIndex
        index={carousel.currentIndex}
        total={data.length}
        onNext={carousel.onNext}
        onPrev={carousel.onPrev}
      />
    </Card>
  );
}
