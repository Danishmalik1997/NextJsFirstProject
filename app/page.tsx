"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-4 shadow-md bg-white rounded-md">
        <h1 className="text-2xl font-semibold mb-4 text-black">Enter your Name</h1>
        <form
        className="space-y-3"
        onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full p-2 border-gray-300 rounded text-black"
            placeholder="type your name...."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button 
          className="bg-black text-white p-2 rounded-lg"
          type="submit"> Predict Data </button>
        </form>
      </div>
    </div>
  );
}
