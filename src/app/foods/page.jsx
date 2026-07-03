import SearchFoods from '@/components/SearchFoods/SearchFoods'
import React from 'react'

const FoodsPage = async() => {
     return (
          <div className='foods w-full px-2 md:px-5 lg:px-8 py-10'>
               <h1 className="text-2xl text-slate-700 text-center font-medium">All Foods</h1>

               <div className='my-10'>
                    <SearchFoods />
               </div>
          </div>
     )
}

export default FoodsPage
