import Link from 'next/link'
import React from 'react'

const BreadCrumb = ({ activeText = "Home" }) => {
    return (
        <ul className="flex items-center gap-x-2 text-lime-700">
            <li>
                <Link href="/" className="text-lime-700">
                    Home
                </Link>
            </li>
            <li>/</li>
            <li className="text-gray-800">{activeText}</li>
        </ul>
    )
}

export default BreadCrumb