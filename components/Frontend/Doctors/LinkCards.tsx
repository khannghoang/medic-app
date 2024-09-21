import React from "react";
import Link from "next/link";
export default function LinkCards({className}:{className?:string}) {
  return( 
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <Link href="#" className={`flex gap-4 bg-slate-800 text-slate-50 
        rounded-md py-3 px-6 ${className}`}>
            <h2>Anxiety </h2>
            <span aria-hidden="true">&rarr;</span>
        </Link>
        <Link href="#" className={`flex gap-4 bg-slate-800 text-slate-50 
        rounded-md py-3 px-6 ${className}`}>
            <h2>Anxiety </h2>
            <span aria-hidden="true">&rarr;</span>
        </Link>
        <Link href="#" className={`flex gap-4 bg-slate-800 text-slate-50 
        rounded-md py-3 px-6 ${className}`}>
            <h2>Anxiety </h2>
            <span aria-hidden="true">&rarr;</span>
        </Link>
        <Link href="#" className={`flex gap-4 bg-slate-800 text-slate-50 
        rounded-md py-3 px-6 ${className}`}>
            <h2>Anxiety </h2>
            <span aria-hidden="true">&rarr;</span>
        </Link>
        <Link href="#" className={`flex gap-4 bg-slate-800 text-slate-50 
        rounded-md py-3 px-6 ${className}`}>
            <h2>Anxiety </h2>
            <span aria-hidden="true">&rarr;</span>
        </Link>
        <Link href="#" className={`flex gap-4 bg-slate-800 text-slate-50 
        rounded-md py-3 px-6 ${className}`}>
            <h2>Anxiety </h2>
            <span aria-hidden="true">&rarr;</span>
        </Link>
    </div>
    
  );
}
