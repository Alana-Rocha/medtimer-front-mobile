import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";

const Apresentacao = () => {
  const slides = [
    {
      title: "Lorem Ipsum é simplesmente a melhor prática para testar.",
      description:
        "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja.",
      image: require("../assets/images/slide1.png"),
    },
    {
      title: "Outro título para o próximo slide.",
      description:
        "Descrição do segundo slide, que pode ser diferente do primeiro.",
      image: require("../assets/images/slide2.png"),
    },
    {
      title: "Mais um slide para ilustrar.",
      description:
        "Texto adicional para o terceiro slide, com outra imagem e descrição.",
      image: require("../assets/images/slide3.png"),
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const PaginationDots = () => {
    return (
      <View style={styles.paginationContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentSlide === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: "#E8E1C5",
        height: "100%",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        gap: 60,
      }}
    >
      <View style={{ gap: 15 }}>
        <Text style={{ fontFamily: "GilroyBold", fontSize: 23 }}>
          {slides[currentSlide].title}
        </Text>
        <Text
          style={{
            fontFamily: "GilroyRegular",
            marginTop: 8,
            fontSize: 15,
          }}
        >
          {slides[currentSlide].description}
        </Text>
      </View>

      <Image
        source={slides[currentSlide].image}
        style={{ width: 330, height: 320 }}
      />

      <PaginationDots />

      <View style={{ marginTop: 30 }}>
        <Button
          mode="contained"
          buttonColor="#66B4B0"
          textColor="#fff"
          onPress={handleNextSlide}
          style={{
            width: 140,
            borderRadius: 50,
            elevation: 4,
          }}
          labelStyle={{ fontFamily: "GilroyBold" }}
        >
          Continuar
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 5,
    elevation: 3,
  },
  activeDot: {
    backgroundColor: "#66B4B0",
  },
  inactiveDot: {
    backgroundColor: "#eee",
  },
});

export default Apresentacao;
