import type {Icards} from '../../types/cards.ts';
interface StackProps{
   stack:Icards[]
}

const stack = ({stack}:StackProps) => {
    return (
        <div className="card bg-base-100 shadow-sm self-start mt-8">
  <div className="card-body">
    <h2 className="font-bold text-lg">Your Stack</h2>
    <p className="text-sm text-[#94A3B8]">{stack.length} technologies selected yet.</p>
 {stack.length===0?(
 <div className="border border-dashed border-gray-300 rounded-xl h-14 flex items-center justify-center mt-2">
    <p className="text-sm  text-[#94A3B8] text-center">Your stack is empty. </p>
 </div>):(
   <div>{stack.map((item)=>(
      <p key={item.name}>{item.name}</p>
   ))}
   </div>
 )}

    </div>
  </div>

    );
};

export default stack;