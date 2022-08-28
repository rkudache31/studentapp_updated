import React,{useState,createContext,useEffect} from 'react' 
export const StudentContext=createContext();
export const StudentProvider=(props) =>{
    const [student , setStudent] = useState([]);
        useEffect(()=>{
        });
    
    return (
        <StudentContext.Provider value={[student,setStudent]}>
            { props.children}
        </StudentContext.Provider>
    )
}
