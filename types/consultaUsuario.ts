type Medicamento = {
  id: number;
  nome: string;
  descricao: string;
  dosagem: number;
  duracao: number;
  frequencia: number;
  horario: string;
};

type Authority = {
  authority: string;
};

export type ConsultaUsuarioResponse = {
  id: number;
  nome: string;
  dataNascimento: string;
  peso: number;
  altura: number;
  email: string;
  senha: string;
  alergia: string | null;
  role: string | null;
  medicamentos: Medicamento[];
  enabled: boolean;
  password: string;
  accountNonLocked: boolean;
  username: string;
  authorities: Authority[];
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
};
