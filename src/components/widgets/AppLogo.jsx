import Link from 'next/link'
import React from 'react'
import { FcPuzzle } from 'react-icons/fc'

const AppLogo = () => {
    return (
        <Link href="/" className="flex items-center gap-x-px py-2.5">
            <FcPuzzle size={36} />
            <span className="text-2xl font-bold uppercase">{process.env.NEXT_PUBLIC_APP_NAME}</span>
        </Link>
    )
}

export default AppLogo