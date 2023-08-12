import { useState } from "react"

export const useLoginLogic = () => {

    const strg = JSON.parse(localStorage.getItem("user"))
    const [user, setUser] = useState(strg === false || strg === null ? false : strg)

    const logout = () => {
        setUser(false)
        localStorage.setItem("user", false)
    }

    function handleLogin(emailRef, passwordRef)
    {
        
        if(emailRef.current.value == "jorgealmarales22@gmail.com" && passwordRef.current.value == "viernes13"){

            const objUser = {
                id: 1,
                name: "Jorge",
                email: "jorgealmarales22@gmail.com",
                password: "viernes13",
                permissions: ["admin"]
            }
            setUser(objUser)
            localStorage.setItem("user",  JSON.stringify(objUser))
        }
    }


  return {
    user,
    setUser,
    logout,
    handleLogin
  }
}
