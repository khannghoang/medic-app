import MegaMenu from "../../../components/Frontend/MegaMenu";
import Navbar from "../../../components/Frontend/Navbar";
import React, { ReactNode } from "react"
export default function layout({children} : {children:ReactNode}){
    return(
        <div className="bg-white">
            <Navbar/>
            <div className="bg-white mx-auto py-6 fixed top-20 w-full 
            left-0 z-50 right-0 border-t border-gray-400/30">
                <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <MegaMenu/>
                </div>
            </div>
            {children}
        </div>
    )
}