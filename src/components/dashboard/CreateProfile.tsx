import Link from "next/link"

export const CreateProfile = () => {
  return (
    <div className="absolute bottom-10  w-full flex justify-center">
      <Link href='/create-profile' className="text-white bg-orange-500 rounded-lg font-semibold px-8 py-2">
       Nuevo perfil
      </Link>
    </div>
  )
}
