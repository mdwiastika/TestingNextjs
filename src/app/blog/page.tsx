"use client";
import React, { useState } from "react";

export default function Blog() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [hasil, setHasil] = useState(0);
  const hitungAngka = (e: any) => {
    e.preventDefault();
    setHasil(num1 + num2);
  };
  return (
    <div className="container mx-auto">
      <form action="" className="p-3 border border-black inline-block mt-4">
        <input type="number" className="border-2 block mb-2" onKeyUp={(e) => setNum1(parseInt(e.currentTarget.value))} id="num1" placeholder="Angka 1" />
        <input type="number" className="border-2 block" id="num2" onKeyUp={(e) => setNum2(parseInt(e.currentTarget.value))} placeholder="Angka 2" />
        <button className="my-2 px-2 py-1 border bg-orange-500 text-white" onClick={(e) => hitungAngka(e)}>
          Hitung
        </button>
        <p>Hasil: {hasil}</p>
      </form>
    </div>
  );
}
