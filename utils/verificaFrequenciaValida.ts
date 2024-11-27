import { DateTime } from "luxon";

export const verificaFrequenciaValida = (
  horaInicial: string,
  frequencia: number
) => {
  const horario = DateTime.fromFormat(horaInicial, "HH:mm");
  const dataInicial = DateTime.fromObject({
    hour: horario.hour,
    minute: horario.minute,
  });
  const dataFim = dataInicial.plus({ hours: 8 * frequencia - 8 });
  console.log({
    dataInicial: dataInicial.day,
    dataFim: dataFim.day,
    calculo: 8 * frequencia - 8,
  });
  return dataInicial.day === dataFim.day;
};
