import React, { createContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export const userContext = createContext();

const AppProvider = ({children}) => {
    const localStorageData = JSON.parse(localStorage.getItem('userInfo'))



    const [user, setuser] = useState(localStorageData)

    // const [check, setcheck] = useState(false)

    // if(check){
    //     <Navigate to={"/login"} />
    // }
    

    return (



    <userContext.Provider value={{user,setuser}} >
        {children} 
    </userContext.Provider>
  )
}

export default AppProvider