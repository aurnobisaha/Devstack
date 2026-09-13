import { Suspense } from 'react'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Cards from './components/cards/cards';
import type { Icards } from './types/cards';
const cardsfetch=async():Promise<Icards[]>=>{
  const res= await fetch("/data.json");
  const data=await res.json();
  return data;
};

function App() {
  

const cardspromise=cardsfetch();
  return (
    <>
   
   <Nav />
   <Banner />
   <Suspense fallback={<h2>Loading.....</h2>}> 
     <Cards cardspromise={cardspromise} />
   </Suspense>
   
   
  

   </>
  )
}

export default App
