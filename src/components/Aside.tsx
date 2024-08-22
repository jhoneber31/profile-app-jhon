import { CreateProfile } from "./dashboard/CreateProfile"

export const Aside = () => {
  return (
    <div className="bg-white border-r-2 border-gray-500 min-h-screen flex w-72 flex-col fixed left-0 top-0">
      <h3 className="text-blue-600 font-bold text-end mb-5 px-4 text-2xl mt-4">Perfiles</h3>
      <ul className="flex flex-col text-blue-500 font-semibold text-end gap-y-2">
        <li className="bg-orange-500 text-white px-6 py-3 text-[18px] cursor-pointer">Gerente</li>
        <li className="px-6 py-3 text-[18px] cursor-pointer">Perfil 1</li>
      </ul>
      <CreateProfile/>
    </div>
  )
}
