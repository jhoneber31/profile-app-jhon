import { Buttons, Dashboard } from "@/components";

export default function Home() {
  return (
    <main className="pl-72">
      <div className="mx-10 mt-12">
        <h3 className="font-bold text-[18px] mb-4 text-blue-900">Actividades de licencia</h3>
        <p className="text-blue-900 mb-4">Gestiona tus perfiles, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quam ab unde pariatur commodi, odit ducimus? Facilis, vel reprehenderit? Corrupti facilis esse nulla rerum ea non vero totam ullam fuga.</p>
        <hr className="mb-4" />
        <Dashboard/>
        <Buttons/>
      </div>
    </main>
  );
}
