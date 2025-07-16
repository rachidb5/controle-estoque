export type ProductModel = {
  id: number;
  modelo: string;
  capacidade: string;
  cor: string;
  preco: number;
  quantidade_estoque: number;
  historico: HistoricoModel[];
};

export type HistoricoModel = {
  data: string;
  usuario: string;
  acao: string;
};
