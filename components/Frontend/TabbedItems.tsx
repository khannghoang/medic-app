"use client"
import { Tabs } from "flowbite-react";
import ServiceList from "./Services/ServiceList";
import LinkCards from "./Doctors/LinkCards";
import { Stethoscope } from "lucide-react";
import { Microscope } from "lucide-react";
import { Activity } from "lucide-react";
import { Syringe } from "lucide-react";
// import { MdDashboard } from "react-icons/md";




export default function TabbedItems() {
    const services = [{
        title:"Telehealth",
        image:"/doctor.jpg",
        slug:"telehealth",
    },
    {
        title:"Video Description",
        image:"/doctor.jpg",
        slug:"telehealth",
    },
    {
        title:"UTI Consultation",
        image:"/doctor.jpg",
        slug:"telehealth",
    },
    {
        title:"Mental Health",
        image:"/doctor.jpg",
        slug:"telehealth",
    },
    {
        title:"ED Consultation",
        image:"/doctor.jpg",
        slug:"telehealth",
    },
    {
        title:"Urgen Health",
        image:"/doctor.jpg",
        slug:"telehealth",

    },
]
    const tabs = [ { title:"Popular Services", icon:Stethoscope, Component:<ServiceList data={services} />,content:[], },
         { title:"Doctors", icon:Microscope,Component:<LinkCards />, content:[], }, 
         { title:"Specialists", icon:Activity,Component:<LinkCards className="bg-blue-300" />, content:[], }, 
         { title:"Symptoms", icon:Syringe,Component:<LinkCards className="bg-red-900" />, content:[], }, 
    ]; 

 
        


return ( 
        <Tabs aria-label="Tabs with underline" variant="underline"> 
         { tabs.map((tab, i)=>{ return( 
            <Tabs.Item key={i} active title={tab.title} icon={tab.icon}> 
            {tab.Component}
            </Tabs.Item> ) }) }

        </Tabs> );

}
