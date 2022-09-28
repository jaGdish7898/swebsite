import style from './kundalini-chakra.module.css'
import Image from 'next/image'
import sushmaChart from '../../../public/images/sushmachart.png'
import Player from '../../molecules/react-player/react-player'
import { Fragment } from 'react'
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';


export default function KundaliniChakras () {

    return(
        <div className={`sectionPadding ${style.mainWrapper}`}>
            <div className={style.primaryWrapper}>
                <div className={style.imageWrapper}>
                    <Image
                        src={sushmaChart}
                        // layout='fill' 
                        // objectFit='fill'
                        alt='sushmaChart'
                    />
                </div>
                <div className={style.message}>
                    <p>  
                        "मैं आपको दिव्य आनंद के इस पर्व में आमंत्रित करती  हूं,
                         जो आपके चारों ओर बरस रहा है, यहां तक ​​​​कि इस कलियुग में भी, 
                         मुझे आशा है कि आप आकर अनंत जीवन के आध्यात्मिक अनुभव का आनंद लेंगे।"
                    </p>
                    <p className={style.speaker}> -- परम पूज्य श्री माताजी निर्मला देवी - उनकी अमेरिका यात्रा के दौरान 1972 में लिखे गए पत्र का अंश</p>

                </div>
            </div>
            <div className={style.kindaliniInfo}>
                <p className={style.questionText}>कुंडलिनी क्या है ? </p>
                <p className={style.ans}> कुंडलिनी भगवान की इच्छा है। तो उसकी इच्छा से ही उसे जगाया जा सकता है।
                    यह आपके भीतर स्थित है और निष्क्रिय है। तो जब वह उगता है, तो उसकी इच्छा पूरी होती है।
                    और इस तरह आपको अपनी पूर्ति मिलती है। जब तक आप ईश्वर नहीं हैं, तब तक आप ईश्वर की इच्छा को आज्ञा नहीं दे सकते।
                    लेकिन आत्मसाक्षात्कार के बाद वह , अपनी शक्ति प्रदान करता है कि आप उसकी इच्छा को नियंत्रित कर सकते हैं। 
                    आप लोगों में कुंडलिनी बढ़ा सकते हैं जो भगवान की इच्छा है। और आप उसकी इच्छा कर सकते हैं। वही सबसे बड़ी उपलब्धि है।
                </p>
                <div className={style.videoAndRedirectLinkWrapper}>
            
                    <Button 
                        variant="contained" 
                        endIcon={<SendIcon />} 
                        color = 'success'
                    >  
                        Redirect 
                    </Button>
                    <Player 
                        videoUrl = {'https://youtu.be/e-cofPb7G_Y'}
                        customStyle = {style.videoWrapper}
                    />
                </div>
                    
            </div>
        </div>
    )
}