"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Cari() {
  const [inputUsername, setInputUsername] = useState("");
  const router = useRouter();
  const userSearch = (e: any) => {
    e.preventDefault();
    router.push(`/cari/${inputUsername}`);
  };
  return (
    <section className="mt-5 container mx-auto">
      <form action="" onSubmit={(e) => userSearch(e)} className="inline-block p-4 border-2 border-orange-700">
        <h2 className="text-xl text-gray-700">Search User Github</h2>
        <input type="text" onKeyDown={(e) => setInputUsername(e.currentTarget.value)} placeholder="Input Username" className="my-3 mr-3 px-3 py-1 border-2 border-orange-500 focus:border-orange-700 focus:outline-none" />
        <button type="submit" className="px-3 py-1 bg-orange-500 text-white">
          Search
        </button>
      </form>
    </section>
  );
}
