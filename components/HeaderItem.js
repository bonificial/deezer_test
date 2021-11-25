import React from 'react'

function HeaderItem({Icon, title}) {
    return (
        <div className="flex flex-col group items-center cursor-pointer  w-12 sm:w-20 hover:text-white">
            <Icon className="h-8 group-hover:animate-bounce"/>
        </div>
    )
}

export default HeaderItem
