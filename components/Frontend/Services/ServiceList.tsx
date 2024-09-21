import React from "react";
import ServiceCard from "./ServiceCard";
import { ServiceProps } from "../../../types/types";
export default function ServiceList( {data}: {data:ServiceProps[] }) {
  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
        {
            data.map((services,i)=>{
                return <ServiceCard key={i} services={services} />
            })
        }

    </div>

  );


}
