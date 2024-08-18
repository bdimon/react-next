// import React from 'react';
import propses from "@/propses.json";
import Propscard from "@/components/Propscard";
import Link from "next/link";

function Homeproperties() {
    const recentPropses = propses
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);
    return (
        <>
        <section className="px-4 py-6">
            <div className="container-xl lg:container m-auto">
                <h3 className="text-3xl font-bold text-zinc-700 mb-6 text-center">
                    Maybe Is Yours...
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  { recentPropses === 0 ? (<p>Not Found</p>) 
                  : (recentPropses
                    .map((property) => (<Propscard key={property._id} property={property} />))
                    )
                  }
                </div>
            </div>
        </section>
        <section className='m-auto max-w-lg my-10 px-6'>
        <Link
          href="/props"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          See All
        </Link>
      </section>
        </>
    );
}

export default Homeproperties;