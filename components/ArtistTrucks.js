import React from 'react'

import {useRouter} from "next/dist/client/router";
import AudioSwitchSmall from "./AudioPlayer/AudioSwitchSmall";

export default function ArtistTrucks({result}) {
    console.log(result)
    const BASE_URL = '';
    const router = useRouter();
    return (
        <div className="p-2 group  transition duration-200 flex-1  ease-in  min-w-full sm:min-w-max lg:flex-shrink-0">
            <ul className="divide-y-2 divide-gray-100 min-w-max">
                {
                    result && result.map((track, key) => {
                        return (<li className="p-3 flex justify-between w-100 transform sm:hover:scale-105 hover:z-50">
                            <a href={'#'} className={''}>
                                {track.title}
                            </a>
                            <AudioSwitchSmall audioSrc={track.preview}/>
                        </li>)
                    })
                }


            </ul>
        </div>
    )
};

 