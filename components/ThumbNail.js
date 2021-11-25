import React from 'react'
import Image from 'next/image'

import {useRouter} from "next/dist/client/router";
import AudioSwitch from "./AudioPlayer/AudioSwitch";

export default function ThumbNail({result}) {

    const BASE_URL = '';
    const router = useRouter();
    return (
        <div
            className="p-2 group  transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 min-w-full sm:min-w-max lg:flex-shrink-0">
            <AudioSwitch className={'thumbnail-audio-player opacity-0 group-hover:opacity-100 '}
                         audioSrc={result.preview}/>

            <div className={'audio-player-container cursor-pointer'} onClick={() => {
                router.push(`/artist/?id=${result.artist.id}`)
            }}>

                <div className='p-2'>
                    <p className="truncate max-w-md">{result.title}</p>
                    <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                        {result.artist.name}
                    </h2>
                    <p className="flex items-center opacity-25 group-hover:opacity-100">
                        Album: {result.album.title}
                        {/* {result.release_date || result.first_air_date} •{" "}
                    <ThumbUpIcon className="h-5 mx-2" />
                     {result.vote_count}*/}
                    </p>
                </div>
            </div>
            <Image alt=""
                   src={`${BASE_URL}${result.artist.picture_big ||
                   result.artist.picture_medium}` ||
                   `${BASE_URL}${result.album.cover_big}`} layout="responsive" objectFit={'cover'} height={300}
                   width={300}/>
            <div className='p-2'>
                <p className="truncate max-w-md">{result.title}</p>
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                    {result.artist.name}
                </h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    Album: {result.album.title}
                    {/* {result.release_date || result.first_air_date} •{" "}
                    <ThumbUpIcon className="h-5 mx-2" />
                     {result.vote_count}*/}
                </p>
            </div>
        </div>
    )
};

 