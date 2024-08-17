'use client';
import React from 'react';
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from 'next/navigation';

function DynamicPage() {
    // console.log('Server Side');
    const params = useParams();
    // path=/props/185 => Dynamic Page 185
    const searchParams = useSearchParams();
    const name = searchParams.get("name");
    // path=/props/185?name=react => Dynamic Page 185, react
    const usePath = usePathname()
;    return (
    <div className='bg-red-400'>        
        <div>Dynamic Page {params.id},  {name}, {usePath}</div>
        <br />
        <Link href="/">Back to Home</Link>
        <br />
        <br />
        <Link href="/props">Back to Props</Link>
    </div>
    );
}

export default DynamicPage;