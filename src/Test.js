// import React,{useState} from 'react'
// import Child from "./Child";


// export const UserContext = React.createContext();

// const Test = () => {
//     const [data, setData]=useState({
//         name: "Denish",
//         surname:"Suhagiya"
//     })
    


//     // const fun = () =>{
//     //     console.log("Fun function called from Child component");
//     // }


//     return (
//         <div>
//             <UserContext.Provider value={{data, setData}}> 
//             <Child/>
//             </UserContext.Provider>
//         </div>
//     )
// }

// export default Test;




import React,{useState} from 'react'
import Child from "./Child";


export const UserContext = React.createContext();

const Test = () => {
    const [data, setData]=useState({
        name: "Denish",
        surname:"Suhagiya"
    })
    


    const fun = () =>{
        // setData({name: "Hartik", surname: "Malhotra"})
        console.log("Fun function called from Child component");
    }


    return (
        <div>
            <Child funct={fun}/>
        </div>
    )
}

export default Test;
