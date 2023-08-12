import React, {useState} from 'react'
import { Navigate } from 'react-router-dom'
import { Skeletor } from './Skeletor';

export const Admin = ({isAllowed, redirect}) => {
    const [isLoading, setisLoading] = useState(true)

    setTimeout(() => {
        setisLoading(false)
    }, 300);

    if(!isAllowed) return <Navigate to={redirect}/>

    
  return (
    <>
       { 
        isLoading ? 
            (<Skeletor/>)
            :
            (
                <div className="card my-3">
                    <div className="card-header">
                    Admin
                    </div>
                    <div className="card-body">
                       Hi, Admin
                    </div>
                </div>
            )
       }
    </>
  )
}
