import React from 'react';
import loadingIcon from '../assets/deezer.png';
import Image from "next/image";

function LoadingComponent({text}) {
    return (
        <div className={'loadingContainer'}>
            <div className={'flex flex-col justify-center items-center'}>
                <Image className={'loadingImage'} loading={'eager'} src={loadingIcon} width={80} height={80}/>
                <span>{text || "Loading"}</span>
            </div>
        </div>
    );
}

export default LoadingComponent;