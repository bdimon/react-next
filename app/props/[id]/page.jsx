import React from 'react';
import Link from "next/link";

function DynamicPage() {
    return (
    <div className='bg-red-400'>        
        <div>Dynamic Page</div>
        <br />
        <Link href="/">Back to Home</Link>
        <br />
        <br />
        <Link href="/props">Back to Props</Link>
    </div>
    );
}

export default DynamicPage;