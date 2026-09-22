import { Suspense,useState } from 'react'

import Nav from './components/Nav'
import Banner from './components/Banner'
import Cards from './components/cards/cards';
import type { Icards } from './types/cards';
import Stack from './components/stack/stack';
const cardsfetch=async():Promise<Icards[]>=>{
  const res= await fetch("/data.json");
  const data=await res.json();
  return data;
};

function App() {
  
  const [stack, setStack] = useState<Icards[]>([]);

const cardspromise=cardsfetch();
  return (
    <>
   
   <Nav />
   <Banner />
   <div className='px-25'>
   <h1 className='text-4xl font-bold text-[#0F172A]'>
    Explore the <span className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Technologies</span>
   </h1>
   <p className='text-[#64748B]'>Pick one technology per category to build your ideal stack.</p>
   </div>
   <Suspense fallback={<h2>Loading.....</h2>}> 
   <div className='grid grid-cols-4 gap-6'>
    
      <Cards
      cardspromise={cardspromise}
     setStack={setStack}
    />

    <Stack stack={stack} />
   </div>
   

   </Suspense>
   
  
  

   </>
  )
}

export default App
