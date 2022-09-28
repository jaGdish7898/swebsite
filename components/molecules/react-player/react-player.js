import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import style from './react-player.module.css'

export default function Player ({videoUrl ,customStyle}) {

    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
        setHasWindow(true);
    }
    }, []);

    return(
        <div className={`${customStyle}`}>
           {hasWindow && <ReactPlayer url={videoUrl} controls height='auto' />}
        </div>
      
    )
}