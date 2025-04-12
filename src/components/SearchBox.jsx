"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = React.useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`/search/${search.trim()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-4 bg-white dark:bg-gray-800 shadow-md rounded-full px-6 py-3 max-w-3xl mx-auto mt-8"
    >
      <input
        type="text"
        placeholder="Search movies..."
        className="flex-1 bg-transparent outline-none text-gray-800 dark:text-white placeholder-gray-400 text-sm md:text-base"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        disabled={!search.trim()}
        className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Search
      </button>
    </form>
  );
}
