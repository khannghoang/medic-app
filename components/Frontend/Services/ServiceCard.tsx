import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ServiceProps } from "../../../types/types";
export default function ServiceCard({services}:{services:ServiceProps}) {
  return (
    <Link href={`/services/${services.slug}`} className="rounded-md bg-slate-400 hover:bg-slate-200 

    duration-300 flex gap-4 overflow-hidden">

      <Image src={services.image} alt={services.title} width={1170} height={848} className="w-1/3 
      object-cover aspect-video" />
      <div className="flex flex-col w-2/3 py-4">
        <h2 className="">{services.title}</h2>
        <p className="text-[0.6rem]">936 available</p>
      </div>

    </Link>

  );
}
