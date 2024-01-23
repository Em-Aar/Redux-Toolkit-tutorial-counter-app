'use client'
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useSelector } from "react-redux";


export default function Navbar() {

    //useSelector()
    const value = useSelector((state:RootState)=>state.counter.value)

  return (
    <header className="sticky w-full top-0 z-10 flex justify-between items-center  px-10 py-2 bg-gray-900 text-slate-100">
      <nav className="flex gap-x-4">
        <Link className="text-sm bg-gray-700 px-2 py-1 rounded " href={"/"}>Home</Link>
        <Link className="text-sm bg-gray-700 px-2 py-1 rounded " href={"/products"}>Products</Link>
      </nav>
      <div className="flex gap-x-2 items-center">
      <p>Counter Value: </p>
      <span className="block text-2xl font-bold text-green-500">{value}</span>
      </div>
      
    </header>
  );
}
