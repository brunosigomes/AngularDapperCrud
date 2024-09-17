export interface Response<T> {
  dados: T;
  mensagem: string;
  status: boolean;
}