import {useRouter} from 'next/dist/client/router'
import React, {useEffect, useState} from 'react'
import {chart, fetchGlobalChart} from '../utils/requests'


function Nav() {
    const [pl_items, set_pl_items] = useState(chart);
    useEffect(() => {
        fetchGlobalChart().then(res => {

            set_pl_items(res.data);
        }).catch(error => {
            alert('An error occured. Please try again later!')

        })
    }, [])
    const router = useRouter();
    return (
        <nav className="relative">
            <div title={'Shift + Scroll or Touch + Drag to view more menu Items'}
                 className="flex px-10 sm:px-20 text-md whitespace-nowrap space-x-4 sm:space-x-10 overflow-x-scroll scrollbar-hide">
                {
                    pl_items && pl_items.playlists.data.map(({id, title}) => {
                        return (
                            <span key={id}
                                  onClick={() => router.push(`/?playlist=${id}`)}
                                  className='cursor-pointer last:pr-12 transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 flex-1'>
                            {title}
                        </span>)
                    })
                }
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a]   h-10 w-1/12"/>
        </nav>
    )
}

export default Nav
