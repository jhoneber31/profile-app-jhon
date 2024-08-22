import Link from "next/link"

export const Buttons = () => {
  return (
    <div className="w-full px-4 py-2 flex justify-end gap-x-4 mt-10">
      <button className="text-white bg-orange-500 rounded-lg font-semibold px-4 py-2">
        Guardar cambios
      </button>
      <button className="text-white bg-orange-500 rounded-lg font-semibold px-4 py-2">
        Eliminar perfil
      </button>
      <Link href='/' className="text-orange-500 bg-white border-2 border-orange-500 rounded-lg font-semibold px-4 py-2">
        Cancelar
      </Link>
    </div>
  )
}
