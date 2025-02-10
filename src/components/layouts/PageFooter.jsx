import dayjs from 'dayjs'
import React from 'react'

const PageFooter = () => {
    return (
        <div className="p-3 pb-4 bg-lime-950 text-white">
            <div className="flex justify-between items-center lg:max-w-6xl mx-auto text-sm">
                <span className="opacity-75 font-extralight">Copyright &copy; {dayjs().format("YYYY")} | Angga NIX</span>
                <span className="opacity-75 font-extralight">Made with 💡 by Me</span>
            </div>
        </div>
    )
}

export default PageFooter