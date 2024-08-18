import React from 'react';
// import Link from "next/link";
import propses from "@/propses.json"
import Propscard from "@/components/Propscard"

function PropsPage() {
    return (
        <section className="px-4 py-6">
            <div className="container-xl lg:container m-auto px-4 py-6">
              {propses.length === 0 ? (<p>Nothing found</p>) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {
                  propses.map(
                    (property, index) => (
                    <Propscard key={index} property={property}/>
                  ))
                  }
                </div>
              
              )}
            </div>
        </section>
    
    );
}

export default PropsPage;