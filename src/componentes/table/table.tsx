"use client";
import { ProductModel } from "@/models/product-model";
import DetalhesModal from "../ProductDetails/details";
import { useState } from "react";
import {
  TrashIcon,
  PencilSquareIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function Table(props: { data: ProductModel[] }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [historicoSelecionado, setHistoricoSelecionado] =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    useState<any[]>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const abrirHistorico = (historico: any[]) => {
    setHistoricoSelecionado(historico);
    setModalOpen(true);
  };

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("");
  //     const result = await response.json();
  //     setData(result);
  //   }

  //   fetchData();
  // }, []);
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-12 ml-auto mr-auto">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3 text-left">Modelo</th>
              <th className="px-6 py-3 text-left">Capacidade</th>
              <th className="px-6 py-3 text-left">Cor</th>
              <th className="px-6 py-3 text-right">Preço (R$)</th>
              <th className="px-6 py-3 text-center">Qtd. Estoque</th>
              <th className="px-6 py-3 text-right"></th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-700 bg-gray-800">
                <td className="px-6 py-4 whitespace-nowrap">{item.modelo}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.capacidade}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.cor}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  {item.preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {item.quantidade_estoque}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button
                    className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                    onClick={() => abrirHistorico(item.historico)}
                  >
                    <MagnifyingGlassIcon className="w-6 h-6 text-white-600" />
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                    <PencilSquareIcon className="w-6 h-6 text-white-600" />
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                    <TrashIcon className="w-6 h-6 text-white-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DetalhesModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        historico={historicoSelecionado ?? []}
      />
    </div>
  );
}
