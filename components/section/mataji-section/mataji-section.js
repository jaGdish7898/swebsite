import sectionStyle from './mataji-section.module.css'
import mataji from '../../../public/mataji-images/mataji.png'
import Image from 'next/image'
import shinchan from '../../../public/mataji-images/shinchan.png'
import Player from '../../molecules/react-player/react-player'



export default function MatajiSection ({isShowNavOnly = false}) {



    return(
        <section className={`${sectionStyle.wrapper}`}>
            <div className={`sectionPadding ${sectionStyle.container}`}>
                <div className={sectionStyle.imgWrapper}>
                    <Image src={mataji} alt="mataji" layout='fill' objectFit='fill'/>
                </div>
                <div className={sectionStyle.infoWrapper}>
                सहज योग का अर्थ है सह आपके साथ और ज जन्मा हुआ योग से तात्पर्य मिलन या जुड़ना अत: वह तरीका जिससे मनुष्य का सम्बन्ध (योग) परमात्मा से हो सकता है !
                {/* Nisi minim aliquip elit cillum irure. Laboris laborum pariatur consectetur et sit minim officia anim minim nisi nisi reprehenderit tempor voluptate. Laboris aliqua excepteur excepteur in. Deserunt consectetur dolore deserunt minim qui nisi voluptate dolor incididunt aute dolor officia. Labore cillum aute ex dolore sint laborum est laborum proident eu irure veniam sit. Enim dolore sunt incididunt ad. Deserunt sunt ipsum ullamco est cupidatat officia consectetur consequat enim quis occaecat. */}
                                
                </div>
                
            </div>
            <div className={`sectionPadding ${sectionStyle.infoContainer}`}>
                <div className={sectionStyle.leftInfoSec}>
                    सहज योग ध्यान की एक विधि है जिसके परिणामस्वरूप कुंडलिनी के जागरण के माध्यम से आध्यात्मिक व्यक्तित्व का विकास होता है।
                    कुंडलिनी जागरण की इस प्रक्रिया को आत्म-साक्षात्कार कहा जाता है,
                    जिसे एचएच श्री माताजी निर्मला देवी ने 1970 में खोजा था और तब से यह दुनिया भर में फैल गया है। इस आंतरिक जागरण को कई नामों से पुकारा जाता है: 
                    आत्मबोध, दूसरा जन्म, ... ज्ञानोदय आदि और यह दुनिया के सभी धर्मों और आध्यात्मिक परंपराओं का लक्ष्य है। कुंडलिनी का ज्ञान प्राचीन है, लेकिन लंबे समय तक, 
                    यह केवल कुछ प्रबुद्ध आत्माओं के लिए उपलब्ध था, जिसे गुप्त रखा गया था और गुरु से शिष्य में स्थानांतरित किया गया था, क्योंकि आत्म-साक्षात्कार प्राप्त करना बेहद मुश्किल था। 
                    इन आधुनिक समय में, सहज ("सहज") योग ("स्वयं के साथ मिलन") के माध्यम से, 
                    यह अनुभव मानव आध्यात्मिकता के इतिहास में पहली बार आत्म-साक्षात्कार के माध्यम से सभी के लिए सहज और उपलब्ध हो गया है।
                </div>
                <div className={sectionStyle.rightInfoSec}>
                    सहज योग के अभ्यास के माध्यम से, हमारी जागरूकता एक नया आयाम प्राप्त करती है जहां कंपन के पूर्ण सत्य को हमारे केंद्रीय तंत्रिका तंत्र और हमारी हथेलियों पर महसूस किया जा सकता है। 
                    कुंडलिनी के जागरण के परिणामस्वरूप व्यक्ति की हथेलियों से कंपन उत्पन्न होते हैं। 
                    इस अनुभव के परिणामस्वरूप, हमारी आध्यात्मिक चढ़ाई सहजता से होती है ... और आत्म-साक्षात्कार और सहज योग ध्यान के उपोत्पाद के रूप में शारीरिक, मानसिक और भावनात्मक संतुलन प्राप्त होता है। 
                    तब हमें पता चलता है कि हम यह शरीर, मन, अहंकार, संस्कार, भावना या बुद्धि नहीं हैं, 
                    बल्कि एक शाश्वत प्रकृति की चीज हैं जो हमेशा हमारे हृदय में शुद्ध, अविचलित अवस्था में निवास करती है - आत्मा या आत्मा। आत्मा सच्चे ज्ञान, शांति और आनंद का स्रोत है। 
                    आत्म-साक्षात्कार कुंडलिनी और आत्मा के बीच इस संबंध के अनुभव की प्राप्ति है, जैसा कि श्री माताजी कहते हैं, प्रत्येक मनुष्य का जन्मसिद्ध अधिकार है।
                </div>
            </div>
            {/* <NavBar /> */}
            {/* <SideBar />
            <Login /> */}
            {/* <Player videoUrl='https://youtu.be/g8psACkbIFI'/> */}

            
        </section>
        
    )
}