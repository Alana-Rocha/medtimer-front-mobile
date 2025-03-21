import { Input } from "@/components/form/Input";
import { Select } from "@/components/form/Select";
import { TimeSelect } from "@/components/form/TimeSelect";
import {
  EditarMedicamentoForm,
  MedicamentoForm,
  medicamentoSchema,
} from "@/constants/schemas/schemas";
import { useMutationEditarMedicamento } from "@/hooks/mutations/useMutationEditarMedicamento";
import { useEditarMedicamentoStore } from "@/hooks/stores/EditarMedicamento";
import { queryClient } from "@/service/queryClient";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";

import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import Toast from "react-native-toast-message";

export default function Medicamentos() {
  const router = useRouter();

  const medicamento = useEditarMedicamentoStore((s) => s.medicamento);
  console.log({ medicamento });
  const { mutateAsync: editarMedicamento, isLoading } =
    useMutationEditarMedicamento();

  const listaFrequencias = [
    { value: 1, label: "1x ao dia" },
    { value: 2, label: "2x ao dia" },
    { value: 3, label: "3x ao dia" },
    { value: 4, label: "4x ao dia" },
    { value: 5, label: "5x ao dia" },
  ];

  const methods = useForm<EditarMedicamentoForm>({
    values: {
      descricao: medicamento?.descricao || "",
      dosagem: medicamento?.dosagem,
      duracao: medicamento?.duracao,
      frequencia: medicamento?.frequencia,
      horario: medicamento?.horario || "",
      nome: medicamento?.nome || "",
    },
    resolver: zodResolver(medicamentoSchema),
  });

  const submit: SubmitHandler<MedicamentoForm> = async (data) => {
    await editarMedicamento({
      id: medicamento.id,
      nome: data.nome,
      descricao: data.descricao,
      dosagem: data.dosagem,
      duracao: data.duracao,
      frequencia: data.frequencia,
      horario: data.horario,
    });
    queryClient.invalidateQueries(["medicamentos"]);
    Toast.show({
      type: "success",
      text1: "Sucesso",
      text2: "Medicamento editado com sucesso!",
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
    router.replace("/(tabs)/medicamentos");
  };

  return (
    <FormProvider {...methods}>
      <View
        style={{
          backgroundColor: "#31658B",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          gap: 50,
          paddingHorizontal: 35,
        }}
      >
        <View
          style={{
            gap: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "GilroyBold",
              fontSize: 25,
              color: "#EC8568",
            }}
          >
            Editar Medicamento
          </Text>
          <View
            style={{
              transform: [{ rotate: "10deg" }],
            }}
          >
            <Image
              source={require("../assets/images/cadastrar-medicamento.png")}
              style={{ width: 25, height: 25 }}
            />
          </View>
        </View>

        <View
          style={{
            gap: 20,
          }}
        >
          <Input id="nome" label="Nome do Medicamento" />
          <Input
            id="descricao"
            label="Descrição"
            placeholder="Remédio para dor de cabeça"
          />

          <View style={{ flexDirection: "row", gap: 7 }}>
            <TimeSelect id="horario" />
            <Select id="frequencia" options={listaFrequencias} />
          </View>

          <View style={{ flexDirection: "row", gap: 7 }}>
            <Input id="duracao" label="Duração (dias)" width={150} />
            <Input id="dosagem" label="Dosagem" width={182} />
          </View>

          <View style={{ gap: 10, alignItems: "center" }}>
            <Button
              mode="contained"
              buttonColor="#EC8568"
              textColor="#fff"
              style={{
                width: "100%",
                borderRadius: 4,
                elevation: 4,
                padding: 5,
              }}
              loading={isLoading}
              disabled={isLoading}
              onPress={methods.handleSubmit(submit)}
              labelStyle={{ fontFamily: "GilroyBold" }}
            >
              Editar
            </Button>

            <Button
              mode="contained"
              buttonColor="#66B4B0"
              textColor="#fff"
              style={{
                width: "100%",
                borderRadius: 4,
                elevation: 4,
                padding: 5,
              }}
              onPress={() => router.push("/(tabs)/medicamentos")}
              labelStyle={{ fontFamily: "GilroyBold" }}
            >
              Voltar
            </Button>
          </View>
        </View>
      </View>
    </FormProvider>
  );
}
