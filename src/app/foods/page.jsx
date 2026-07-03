import SearchFoods from '@/components/SearchFoods/SearchFoods'
import React from 'react'

const getFoods = async(search) => {
     try{
          const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`);
          const data = await res.json();
          return data.foods || [];
     }catch(err) {
          console.error(err);
          return null;
     }
}

const FoodsPage = async({ searchParams }) => {
     const { search = '' } = await searchParams;
     const foods = await getFoods(search);
     console.log(foods)

     return (
          <div className='foods w-full px-2 md:px-5 lg:px-8 py-10'>
               <h1 className="text-2xl text-slate-700 text-center font-medium">All Foods <span className='text-emerald-400'>{foods.length > 0 ? foods.length : 0}</span></h1>

               {/* search foods input field */}
               <div className='py-10'>
                    <SearchFoods />
               </div>

               {/* show all foods as card */}
               <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 mg:grid-cols-4 xl:grid-cols-5'>
                    {
                         foods.map(food => {
                              return (
                                   <h1 className='px-5 py-2 rounded-md border'>{food.title}</h1>
                              )
                         })
                    }
               </div>
          </div>
     )
}

export default FoodsPage
