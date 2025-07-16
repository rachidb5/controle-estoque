"use client";
import Header from "@/componentes/Header/header";
import Table from "@/componentes/table/table";
import { ProductModel } from "@/models/product-model";
import { useState } from "react";

export default function EstoquePage() {
  const [data, setData] = useState<ProductModel[]>([
    {
      id: 1,
      modelo: "iPhone 15 Pro",
      capacidade: "256GB",
      cor: "Titânio Natural",
      preco: 10999.0,
      quantidade_estoque: 15,
      historico: [
        {
          data: "2025-07-01T10:15:00Z",
          usuario: "admin",
          acao: "Cadastro inicial",
        },
        {
          data: "2025-07-10T09:00:00Z",
          usuario: "joao",
          acao: "Atualizou quantidade para 15",
        },
      ],
    },
    {
      id: 2,
      modelo: "iPhone 15",
      capacidade: "128GB",
      cor: "Azul",
      preco: 7299.0,
      quantidade_estoque: 25,
      historico: [
        {
          data: "2025-07-03T14:22:00Z",
          usuario: "maria",
          acao: "Cadastro inicial",
        },
      ],
    },
    {
      id: 3,
      modelo: "iPhone SE (3ª geração)",
      capacidade: "64GB",
      cor: "Product(RED)",
      preco: 4299.0,
      quantidade_estoque: 40,
      historico: [],
    },
    {
      id: 4,
      modelo: "iPhone 15 Pro Max",
      capacidade: "512GB",
      cor: "Titânio Azul",
      preco: 13299.0,
      quantidade_estoque: 5,
      historico: [],
    },
  ]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("");
  //     const result = await response.json();
  //     setData(result);
  //   }

  //   fetchData();
  // }, []);
  return (
    <div>
      <Header />
      <Table data={data} />
    </div>
  );
}
