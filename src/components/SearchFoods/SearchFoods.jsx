"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const SearchFoods = () => {
     const router = useRouter();
     const params = useSearchParams();

     const handleSearchFood = e => {
          e.preventDefault();

          const form = e.target;
          const searchValue = form.searchFoods.value;

          const newParams = new URLSearchParams(params.toString());
          newParams.set('search', searchValue);
          router.push(`?${newParams.toString()}`);
     }

     return (
          <form className='searchFoods flex items-center' onSubmit={handleSearchFood}>
               <input type="search" name="searchFoods" id="searchFoods" className='w-full px-3 py-2 border rounded-s-md border-gray-300 focus:ring-2 focus:ring-gray-200 outine-none focus:outline-none text-slate-700' />
               <button type='submit' className='text-center px-5 py-2 border rounded-e-md border-emerald-300 outline-none active:ring-2 active:ring-emerald-300 bg-emerald-500 hover:bg-emerald-700 active:bg-emerald-500 text-white'>Search</button>
          </form>
     )
}

export default SearchFoods
