import { DateTime } from "luxon";

export const horariosMedicamento = (
  horaInicial: string,
  frequencia: number
): string => {
  const horarios = [
    DateTime.fromFormat(horaInicial, "HH:mm:ss").toFormat("HH:mm"),
  ];

  for (let i = 0; i < frequencia; i++) {
    const ultimaHora = horarios.at(-1) || "";

    const dataFormatada = DateTime.fromFormat(ultimaHora, "HH:mm")
      .plus({ hours: 8 })
      .toFormat("HH:mm");

    horarios.push(dataFormatada);
  }

  return horarios.join(", ");
};
