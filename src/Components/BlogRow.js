
import { db } from "../Firebase";
import { doc ,collection, deleteDoc } from "firebase/firestore";
export function BlogRow ({Title , Desc , Link , Tags , id})  {
   
    const ref=doc(db,"Blog",id);
    const handleClick =async()=>{
    
    console.log(id)
    await deleteDoc(ref);
    console.log("Doc deleted");

    }

    
    return(
        <>
        <tr>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div class="flex items-center">
        
                <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                        {Title}
                    </p>
                </div>
            </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {Desc}
                </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {Tags.join(" , ")}
                </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                </span>
                <a href={Link} class="relative">
                active
                </a>
                </span>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <button onClick={(e)=>handleClick(e)}> Delete</button>
                </td>
                </tr>
                </>
                )
            };