import { useEffect, useState } from "react"

const useRevenue =()=>{

     const [revenus,setRevenues] = useState([]);

     useEffect(()=>{

         fetch("revenue.json")
         .then(res=>res.json())
         .then(data=>setRevenues(data))

     },[])

    return  [revenus,setRevenues];

}

export default useRevenue;