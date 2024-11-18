import { InputCadastro } from "@/components/form/InputCadastro";
import { Select } from "@/components/form/Select";
import { TimeSelect } from "@/components/form/TimeSelect";
import {
  MedicamentoForm,
  medicamentoSchema,
} from "@/constants/schemas/schemas";
import { useMutationCadastraMedicamento } from "@/hooks/mutations/useMutationCadastraMedicamento";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function Medicamentos() {
  // const router = useRouter();
  const methods = useForm<MedicamentoForm>({
    resolver: zodResolver(medicamentoSchema),
    defaultValues: {
      horario: "",
      nome: "",
      descricao: "",
      dosagem: 1,
      duracao: 1,
      frequencia: 0,
    },
  });

  const { mutateAsync: cadastrarMedicamento, isLoading } =
    useMutationCadastraMedicamento();

  const submit: SubmitHandler<MedicamentoForm> = async (data) => {
    console.log(data);
    // await cadastrarMedicamento({
    //   nome: data.nome,
    //   descricao: data.descricao,
    //   dosagem: data.dosagem,
    //   duracao: data.duracao,
    //   frequencia: data.frequencia,
    //   horario: data.horario,
    // });
    // Toast.show({
    //   type: "success",
    //   text1: "Sucesso",
    //   text2: "Cadastro realizado!",
    //   visibilityTime: 4000,
    //   autoHide: true,
    //   topOffset: 30,
    //   bottomOffset: 40,
    // });
    // router.push("/apresentacao");
  };

  const listaFrequencias = [
    "1x ao dia",
    "2x ao dia",
    "3x ao dia",
    "4x ao dia",
    "5x ao dia",
  ];

  return (
    <FormProvider {...methods}>
      <View
        style={{
          backgroundColor: "#31658B",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ gap: 15 }}>
          <Text
            style={{
              fontFamily: "GilroyBold",
              fontSize: 30,
              marginBottom: 50,
              color: "#EC8568",
            }}
          >
            Cadastrar Medicamento
          </Text>
        </View>

        <View
          style={{
            gap: 20,
          }}
        >
          <InputCadastro
            id="nome"
            label="Nome do Medicamento"
            style={{ width: "100%" }}
          />
          <InputCadastro
            id="descricao"
            label="Descrição"
            placeholder="Remédio para dor de cabeça"
          />
          <View style={{ flexDirection: "row", gap: 7 }}>
            <InputCadastro
              id="duracao"
              label="Intervalo (dias)"
              style={{ width: 40 }}
            />
            <Select id="frequencia" options={listaFrequencias} />
          </View>

          <View style={{ flexDirection: "row", gap: 7 }}>
            <InputCadastro id="dosagem" label="Dosagem (comprimidos)" />
            <TimeSelect id="horario" />
          </View>
        </View>

        <View style={{ gap: 10, marginTop: 23 }}>
          <Button
            mode="contained"
            buttonColor="#66B4B0"
            textColor="#fff"
            style={{
              width: 300,
              borderRadius: 4,
              elevation: 4,
              padding: 5,
            }}
            // onPress={() => router.push("/apresentacao")}
            // onPress={console.log(methods.getValues())}
            labelStyle={{ fontFamily: "GilroyBold" }}
          >
            Cadastrar
          </Button>

          <Button
            mode="contained"
            buttonColor="#66B4B0"
            textColor="#fff"
            style={{
              width: 300,
              borderRadius: 4,
              elevation: 4,
              padding: 5,
            }}
            // onPress={() => router.push("/apresentacao")}
            // onPress={methods.handleSubmit(submit)}
            labelStyle={{ fontFamily: "GilroyBold" }}
          >
            Voltar
          </Button>
        </View>
      </View>
    </FormProvider>
  );
}
