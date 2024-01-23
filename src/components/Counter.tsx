"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, addVal, decVal, addAsync } from "@/redux/counter/counterSlice";
import { AppDispatch, RootState } from "@/redux/store";

export default function Counter() {
  //useSelector() - for state value
  const {value, status} = useSelector((state:RootState)=>state.counter)
  
  //useDispatch() - to dispatch action
  const dispatch = useDispatch<AppDispatch>();
  const [input, setInput] = useState(0);

  const handlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(Number(e.target.value));
  };
  return (
    <main className={`w-screen h-screen ${status==='pending'?'bg-blend-overlay, opacity-50' : 'opacity-100'}`}>
      <div className="flex flex-col gap-y-4">
        <h1 className="text-2xl font-bold uppercase text-center">Counter</h1>
        <div className="flex items-end justify-center gap-x-4">
          <button onClick={()=>{dispatch(decrement())}} disabled={status==='pending'} className="bg-teal-500 text-sm tex-slate-100 font-bold px-2 rounded ">
            -
          </button>

          <span className="block text-5xl font-bold">{value}</span>
          <button onClick={()=>{dispatch(increment())}} disabled={status==='pending'} className="bg-teal-500 text-sm tex-slate-100 font-bold px-2 rounded ">
            +
          </button>
        </div>

        {/* other operations */}
        <div className="flex justify-center items-center gap-x-2">
          <button onClick={()=>{dispatch(addVal(input))}} disabled={status==='pending'} className="bg-blue-700 text-sm rounded px-3 py-1 text-slate-100">
            Inc. Value
          </button>
          <input
            onChange={handlChange}
            type="text"
            value= {input}
            disabled={status==='pending'}
            className="block w-10 text-center px-2 border-2 rounded-md font-bold focus:border-teal-500  "
          />
          <button onClick={()=>{dispatch(decVal(input))}} disabled={status==='pending'} className="bg-red-700 text-sm rounded px-3 py-1 text-slate-100">
            Dec. Value
          </button>
          <button onClick={()=>{dispatch(addAsync(input))}} disabled={status==='pending'} className="bg-green-700 text-sm rounded px-3 py-1 text-slate-100">
            Add Async
          </button>
          <button onClick={()=>{dispatch(reset())}} disabled={status==='pending'} className="bg-yellow-700 text-sm rounded px-3 py-1 text-slate-100">
            Reset
          </button>
        </div>
      </div>
    </main>
  );
}
