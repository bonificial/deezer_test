import React, {useState} from "react";
import styles from './style.module.css'
import clsx from "clsx"

export default function AudioSwitchSmall({audioSrc, className}) {
    const [audio, setAudio] = useState(new Audio(audioSrc));
    const [loading, setLoading] = useState(true);
    const [playing, setPlaying] = useState(false);
    var currentPlayingAudio;


    if (audio) {


        /**/
        audio.onplaying = () => {

            setPlaying(true)
        }
        audio.onloadeddata = () => {
            setLoading(false)
        }

        audio.onended = function () {

        }
    }


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
             className={clsx(styles.playIconSmall
             )}> {
            playing ? <span className={'fa fa-pause'}/> : <span className={'fa fa-play'}/>
        }

        </div>

    )
}

