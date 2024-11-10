import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Carousel, {
  ParallaxImage,
  AdditionalParallaxProps,
} from "react-native-snap-carousel";

const { width: screenWidth } = Dimensions.get("window");

interface CarouselItem {
  image: string;
}

interface ParallaxCarouselProps {
  data: CarouselItem[];
}

const ParallaxCarousel: React.FC<ParallaxCarouselProps> = ({ data }) => {
  const renderItem = (
    { item }: { item: CarouselItem },
    parallaxProps?: AdditionalParallaxProps
  ) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.image }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  };

  return (
    <Carousel
      sliderWidth={screenWidth}
      itemWidth={screenWidth - 60}
      data={data}
      renderItem={renderItem}
      hasParallaxImages
    />
  );
};

const styles = StyleSheet.create({
  item: {
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 20,
  },
  imageContainer: {
    width: screenWidth - 40,
    height: 200,
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
});

export default ParallaxCarousel;
