
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './compo/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadcoffees = useLoaderData();

  const [coffees,setcoffees]=useState(loadcoffees)


  return (
    <div>
      <div className='m-24'>
        <h1 className='text-center text-6xl text-stone-500 mb-10 font-bold'>Hot Hot coffee</h1>
        <Link to={"/Addcoffee"}> <button className='btn'>add coffee</button></Link>
       

        <div className='grid md:grid-cols-2 gap-4'>
          {
            coffees.map(coffee => <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setcoffees={setcoffees}

            />)
          }
        </div>
      </div>

    </div>

  )
}

export default App
