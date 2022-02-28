import { useNavigate } from "react-router-dom"

const Auth =(auth)=>{
    const navigate=useNavigate();
    if(!auth){
        navigate("login")
    }
}