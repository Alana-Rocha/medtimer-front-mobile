import { DateTime } from "luxon";

export const verificaFrequenciaValida = (
  horaInicial: string,
  frequencia: number
) => {
  const horaAtual = DateTime.now().toObject();
  const horario = DateTime.fromFormat(horaInicial, "HH:mm");
  const dataInicial = DateTime.fromObject({
    ...horaAtual,
    hour: horario.hour,
    minute: horario.minute,
    second: 0,
  });
  const dataFim = dataInicial.plus({ hours: 8 * frequencia - 8 });

  return dataInicial.day === dataFim.day;
};
