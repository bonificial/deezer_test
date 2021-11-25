import React from 'react'

import {useRouter} from "next/dist/client/router";

export default function ArtistAlbums({result}) {
    console.log(result)
    const BASE_URL = '';
    const router = useRouter();
    return (
        <div className="p-2 group  transition duration-200 flex-1 ease-in  min-w-full sm:min-w-max lg:flex-shrink-0">
            <ul className="divide-y-2 divide-gray-100 min-w-max">
                {
                    result && result.map((album, key) => {
                        return (<li className="p-3 flex justify-between w-100 transform sm:hover:scale-105 hover:z-50">
                            <span>{album.title}</span>
                        </li>)
                    })
                }


            </ul>
        </div>
    )
};

 