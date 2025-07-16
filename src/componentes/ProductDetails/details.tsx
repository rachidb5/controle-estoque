/* eslint-disable @typescript-eslint/no-explicit-any */
// components/HistoricoModal.tsx
"use client";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  historico: any[];
};

export default function DetalhesModal({ isOpen, onClose, historico }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-xl shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Histórico de Alterações</h2>
        <ul className="space-y-2 max-h-64 overflow-y-auto">
          {historico.map((item, index) => (
            <li key={index} className="text-sm border-b pb-2">
              <p>
                <strong>Data:</strong>{" "}
                {new Date(item.data).toLocaleString("pt-BR")}
              </p>
              <p>
                <strong>Usuário:</strong> {item.usuario}
              </p>
              <p>
                <strong>Ação:</strong> {item.acao}
              </p>
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
