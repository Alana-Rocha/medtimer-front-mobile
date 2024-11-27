import { create } from "zustand";
import { ConsultaMedicamentoResponse } from "../querys/useQueryConsultaMedicamentos";

export type User = {
  sub: string;
};

type AuthStoreType = {
  medicamento: ConsultaMedicamentoResponse;
  setMedicamento: (medicamento: ConsultaMedicamentoResponse) => void;
};

export const useEditarMedicamentoStore = create<AuthStoreType>((set) => ({
  medicamento: undefined!,
  setMedicamento(medicamento) {
    set({ medicamento });
  },
}));
