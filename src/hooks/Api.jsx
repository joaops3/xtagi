import axios from "axios"

export const api = axios.create({baseURL: "https://reqres.in/api/",})



export const setUserLocalStore = (user) => {
    localStorage.setItem("u", JSON.stringify(user))

}

export const getUserLocalStore = () => {
    const json = localStorage.getItem("u")

    if(!json){
        return null
    }

    const user = JSON.parse(json)

    return user ?? null

}

export const  loginRequest = async (email, password) =>{
    try{ 
    const request = api.post("login", {email , password})
    return request
    }
    catch(e){
        return null
    }


}