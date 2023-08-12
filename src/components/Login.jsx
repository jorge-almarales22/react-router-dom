import React, {useRef} from 'react'
import { Navigate } from 'react-router-dom'

export const Login = ({isAllowed, redirect, handleLogin}) => {

    
    const emailRef = useRef()
    const passwordRef = useRef()
    if(isAllowed) return <Navigate to={redirect}/>
    

  return (
    <>
        <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" ref={emailRef} placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" ref={passwordRef} placeholder="name@example.com"/>

            <button className='btn btn-primary btn-block my-2' onClick={() => handleLogin(emailRef, passwordRef)}>Login</button>
        </div>
    </>
  )
}
