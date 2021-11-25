import React, {useState} from "react";
import LoadingIcon from '../../assets/img/loading.svg'
import PauseIcon from '../../assets/img/pause.svg'
import PlayIcon from '../../assets/img/play.svg'
import styles from './style.module.css'
import clsx from "clsx"
import Image from "next/image";

export default function AudioSwitch({audioSrc, className}) {
    const [audio, setAudio] = useState(typeof Audio !== "undefined" && new Audio(audioSrc));
    const [loading, setLoading] = useState(false);
    const [playing, setPlaying] = useState(false);
    var currentPlayingAudio;


    if (audio) {


        /**/
        audio.onplaying = () => {

        }

        audio.onended = function () {

        }
    }
    let icon;
    if (typeof Audio == "undefined") icon = LoadingIcon
    else icon = playing ? PauseIcon : PlayIcon;

    function togglePlay() {

        if (!playing) {
            var allaudios = document.querySelectorAll("audio");
            allaudios.forEach((audio) => {
                audio.pause();
                audio.currentTime = 0;
            });
            audio.play();
            setPlaying(true)

        } else {
            audio.pause();
            setPlaying(false)

        }

        if (currentPlayingAudio) currentPlayingAudio.pause();
        currentPlayingAudio = audio;
    }


    return (

        <div onClick={togglePlay}
             className={clsx(styles.playIcon, `flex-grow-0 flex-lg-grow-0  ${className}`
             )}>
            <Image src={icon}/>
        </div>

    )
}