import Link from "next/link";
// import "../app/globals.css";
import { IoPersonAddSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setLoading } from "../Reducers/todoSlice";
;

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <>
      <nav className="flex justify-between bg-slate-800 items-center px-8 py-3">
        <div>
        <Link href={"/"} className="text-white font-bold">
        
          CRUD Operation
        </Link>
        </div>
       <div className="flex items-start">
       <Link href={"/add"} >
       <button  className="text-white flex" onClick={()=>dispatch(setLoading(true))}>
          Add Todo
        <span className="text-white p-1"><IoPersonAddSharp /></span>
        </button>
       </Link>
       </div>
      </nav>
    </>
  );
}
