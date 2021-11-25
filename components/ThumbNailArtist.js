import React from 'react'
import Image from 'next/image'

import {useRouter} from "next/dist/client/router";

export default function ThumbNailArtist({result}) {

    const BASE_URL = '';
    const router = useRouter();
    return (
        <div
            className="p-2 group  transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 min-w-full sm:min-w-max lg:flex-shrink-0">
            <div className='p-2'>
                <p className="truncate max-w-md">{result.title}</p>
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                    {result.name} | {result.nb_album} Albums
                </h2>
                <p className="flex items-center opacity-60 group-hover:opacity-100">
                    Fans: {result.nb_fan}
                </p>

            </div>

            <Image alt=""
                   src={`${BASE_URL}${result.picture_big ||
                   result.picture_medium}`} layout="intrinsic" objectFit={'fill'} height={400} width={400}/>

        </div>
    )
};

 