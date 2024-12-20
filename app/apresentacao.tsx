import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

const Apresentacao = () => {
  // const navigation = useNavigation();

  const slides = [
    {
      title: "Seja bem vindo(a) ao MedTimer, aqui a sua saúde é prioridade!",
      description:
        "A sua saúde em primeiro lugar! Com o MedTimer, você nunca mais se esquecerá dos horários de seus medicamentos. Estamos aqui para ajudar você a cuidar do seu bem-estar, facilitando o acompanhamento da sua rotina de medicação.",
      image: require("../assets/images/slide1.png"),
    },
    {
      title: "Cadastre seus medicamentos",
      description:
        "No MedTimer, é fácil registrar todos os medicamentos que você precisa tomar. Basta adicionar o nome, a dosagem e a frequência. Assim, você tem um controle mais seguro e organizado de todos os seus remédios.",
      image: require("../assets/images/slide2.png"),
    },
    {
      title: "Lembretes na hora certa",
      description:
        "Com nossos lembretes personalizados, você poderá consultar todas as informações relacionadas ao seu medicamento. Nunca mais perca um horário importante! Deixe o MedTimer te ajudar a manter sua saúde em dia, sem complicações.",
      image: require("../assets/images/slide3.png"),
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeAnim.setValue(0);
    slideAnim.setValue(50);

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  }, [currentSlide]);

  const handleNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      router.push("/(tabs)/medicamentos");
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
        width: "100%",
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateX: slideAnim }],
        }}
      >
        <Text
          style={{ fontFamily: "GilroyBold", fontSize: 25, color: "#31658B" }}
        >
          {slides[currentSlide].title}
        </Text>
        <Text
          style={{
            color: "#31658B",
            fontFamily: "GilroyRegular",
            marginTop: 8,
            fontSize: 18,
          }}
        >
          {slides[currentSlide].description}
        </Text>
      </Animated.View>

      <Animated.Image
        key={currentSlide}
        source={slides[currentSlide].image}
        style={{
          width: 330,
          height: 320,
          opacity: fadeAnim,
          transform: [{ translateX: slideAnim }],
        }}
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
            padding: 4,
          }}
          labelStyle={{ fontFamily: "GilroyBold" }}
        >
          {currentSlide === slides.length - 1 ? "Finalizar" : "Continuar"}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
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
