import React from 'react';
import Link from 'next/link';
// Dynamic views via propses
function Infobox({
  heading,
  backgroundColor = "bg-gray-100",
  textColor = "text-zinc-700",
  buttonInfo,
  children,
}) {
    return (
        <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
          <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
          <p className={`${textColor} mt-2 mb-4`}>{children}</p>
          <Link
            href={buttonInfo.link}
            className={`inline-block ${buttonInfo.backgroundColor} text-zinc-700 rounded-lg px-4 py-2 hover:opacity-80`}
          >
            {buttonInfo.text}
          </Link>
        </div>
      );
}

export default Infobox;