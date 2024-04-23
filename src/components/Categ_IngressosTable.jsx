import Link from 'next/link';

export default function EventosTable({categ_ingressos}) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Ingressos</h1>
          <p className="mt-2 text-sm text-gray-700">
            Lista de todos as categorias de ingresso cadastrados no sistema.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link
            href="/admin/categ_ingressos/add"
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Adicionar
          </Link>
        </div>
      </div>
      <div className="-mx-4 mt-8 sm:-mx-0">
        <table className="min-w-full divide-y divide-gray-300">
        <thead>
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                Tipo
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Descricao
              </th>                         
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
          {(Array.isArray(categ_ingressos)?categ_ingressos:[]).map((categ_ingresso) => (
              <tr key={categ_ingresso.id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                  {categ_ingresso.tipo}
                </td>
                <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  {categ_ingresso.descricao}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}