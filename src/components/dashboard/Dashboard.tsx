import { AiFillProduct } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaDollarSign, FaShoppingCart, FaSuitcase, FaTag, FaTruck } from "react-icons/fa";
import { IoHome, IoPerson } from "react-icons/io5";

export const Dashboard = () => {
  return (
    <>
    <div className="flex gap-x-4 px-3 items-center mb-4">
      <span className="font-semibold text-blue-800 text-[18px]">Nombre del perfil: </span>
      <input type="text" className="px-4 border-2 border-gray-500 rounded-md py-1 w-[400px]" placeholder="Ingrese nombre"/>
    </div>
    <div className="grid grid-cols-3 gap-5 h-[600px] shadow-md py-5 px-3">
      <div className="col-span-1 flex text-blue-700 flex-col">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <IoHome />
            <span>Inicio</span>
          </div>
          <input type="checkbox" name="checkbox1" disabled className="w-5 h-5 bg-gray-500 border-gray-500 rounded-full appearance-none" />
        </div>
      </div>
      <div className="col-span-1 flex text-blue-700 flex-col">
        {/* /icon */}
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <BsFillCalendarDateFill />
            <span>Calendario</span>
          </div>
          <input type="checkbox" name="checkbox2" className="w-5 h-5 bg-white border-blue-900 border-2 appearance-none rounded-full focus:bg-orange-500 focus:border-orange-500" />
        </div>
      </div>
      <div className="col-span-1 flex text-blue-700 flex-col">
        {/* /icon */}
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <FaSuitcase />
            <span>RR HH</span>
          </div>
          <input type="checkbox" name="checkbox3" className="w-5 h-5 bg-white border-blue-900 border-2 appearance-none rounded-full focus:bg-orange-500 focus:border-orange-500" />
        </div>
        <div className="flex flex-col text-end gap-y-2 mt-2">
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" name="checkbox4" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" name="checkbox5" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" name="checkbox6" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" name="checkbox7" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex text-blue-700 flex-col">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <FaShoppingCart />
            <span>Ventas</span>
          </div>
          <input type="checkbox" name="checkbox8" className="w-5 h-5 bg-white border-blue-900 border-2 appearance-none rounded-full focus:bg-orange-500 focus:border-orange-500" />
        </div>
        <div className="flex flex-col text-end gap-y-2 mt-2">
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" name="checkbox9" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" name="checkbox10" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" name="checkbox11" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" name="checkbox12" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex text-blue-700 flex-col">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <FaTag />
            <span>Compras</span>
          </div>
          <input type="checkbox" name="checkbox13" className="w-5 h-5 bg-white border-blue-900 border-2 appearance-none rounded-full focus:bg-orange-500 focus:border-orange-500" />
        </div>
        <div className="flex flex-col text-end gap-y-2 mt-2">
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" name="checkbox14" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" name="checkbox15" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" name="checkbox16" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex text-blue-700 flex-col">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <FaTruck />
            <span>Proveedores</span>
          </div>
          <input type="checkbox" className="w-5 h-5 bg-white border-blue-900 border-2 appearance-none rounded-full focus:bg-orange-500 focus:border-orange-500" />
        </div>
        <div className="flex flex-col text-end gap-y-2 mt-2">
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex text-blue-700 flex-col">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <IoPerson />
            <span>Clientes</span>
          </div>
          <input type="checkbox" className="w-5 h-5 bg-white border-blue-900 border-2 appearance-none rounded-full focus:bg-orange-500 focus:border-orange-500" />
        </div>
        <div className="flex flex-col text-end gap-y-2 mt-2">
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex text-blue-700 flex-col">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <AiFillProduct />
            <span>Productos</span>
          </div>
          <input type="checkbox" className="w-5 h-5 bg-white border-blue-900 border-2 appearance-none rounded-full focus:bg-orange-500 focus:border-orange-500" />
        </div>
        <div className="flex flex-col text-end gap-y-2 mt-2">
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex text-blue-700 flex-col">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <FaDollarSign />
            <span>Financiero</span>
          </div>
          <input type="checkbox" className="w-5 h-5 bg-white border-blue-900 border-2 appearance-none rounded-full focus:bg-orange-500 focus:border-orange-500" />
        </div>
        <div className="flex flex-col text-end gap-y-2 mt-2">
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
          <div className="flex gap-x-2 justify-end">
            <span>Nombre de tarea</span>
            <input type="checkbox" className="w-5 h-5 appearance-none border-blue-900 border-2 focus:border-orange-500 focus:bg-orange-500 focus:rounded-md" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
