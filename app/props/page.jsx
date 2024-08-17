import React from 'react';
import Link from "next/link";

function PropsPage(props) {
    return (
    <div className='bg-red-200'>        
        <div>
            Props Page
        </div>
        <Link href="/">Back to Home</Link>
    </div>
    );
}

export default PropsPage;