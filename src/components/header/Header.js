
import "./Header.css"
import { Link } from "react-router-dom"

export function Header(){

    return(
        <>
        <div className="bg-gray-900 w-full h-16"> 

            <span className="text-gray-200 float-left font-extrabold text-3xl ml-7 sm:ml-12 my-3 text-roboto "> 
            <Link to="/"> PhishBuster </Link> </span>
            
        </div>
        </>
    )

}

