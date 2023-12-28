import Link from 'next/link'
// import "../app/globals.css";

export default function Navbar2() {
  return (
    <>
   
   <nav className="flex justify-between bg-slate-800 items-center px-8 py-3"   >
        <Link href={"/"} className='text-white font-bold'> CRED Operation </Link>
        {/* <Link href={"add-data"} className='bg-white p-2'>Add-data</Link> */}
    </nav>
   
    </>
  );
}
