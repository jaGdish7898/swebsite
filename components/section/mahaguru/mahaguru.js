import sectionStyle from './mahaguru.module.css'
import Scroller from '../../molecules/scroller/scroller'
import { GuruCard } from '../../atoms/atom-exports'
import * as guruImages from '../../../public/guru-images/index'



export default function MahaGuru (){

    const mahaGuruInfo = [
        {
            name : ' Raja Janak ',
            image : guruImages.rajaJanak,
            message : 'जब आप दैवीय शक्ति के दायरे में रहते हैं, तो ब्रह्मा स्वयं आपकी देखभाल करते हैं'
        },
        {
            name : 'Abraham',
            image : guruImages.shriAbraham,
            message : 'और जो तुझे आशीर्वाद दें उनको मैं आशीष दूंगा, और जो तुझे शाप दें, उसे मैं शाप दूंगा, और पृय्वी के सब कुल तुझ से आशीष पाएंगे'
        },
        {
            name : 'zarathustra',
            image : guruImages.zarathustra,
            message : ''
        },
        {
            name : 'Shri Moses',
            image : guruImages.moses,
            message : 'आपको अपने भगवान से, अपने पूरे दिल से, अपनी सारी आत्मा और पराक्रम से प्यार करना चाहिए'
        },
        {
            name : 'Shri Lau-Tso',
            image : guruImages.lautso,
            message : 'संपूर्ण ब्रह्मांड उस मन को समर्पण करता है जो स्थिर है'
        },
        {
            name : 'Shri Confucius',
            image : guruImages.confucius,
            message : ' इससे कोई फर्क नहीं पड़ता कि आप कितने धीमे चलते हैं, जब तक आप रुकते नहीं हैं'
        },
        {
            name : 'Shri Socrates',
            image : guruImages.socrates,
            message : 'झूठे शब्द न केवल अपने आप में बुरे हैं, बल्कि वे आत्मा को बुराई से संक्रमित करते हैं'
        },
        {
            name : 'Mohammad Saab',
            image : guruImages.mohammad,
            message : 'दया विश्वास की निशानी है, जिसके पास दया नहीं है, वह विश्वास नहीं करता।'
        },
        {
            name : 'Shri Guru Nank',
            image : guruImages.guruNanak,
            message : 'केवल वही बोलो जिससे आपको सम्मान मिले'
        },
        {
            name : 'Shri Sai Baba',
            image : guruImages.saibaba,
            message : 'ईश्वर का माध्यम हर जगह है और उनकी शक्ति विशाल है, सबका मालिक एक है'
        },
    ]

    return(
        <section className={`sectionPadding ${sectionStyle.wrapper}`}>
            <Scroller 
                areNavArrowsVisible = {true}
            >
            {mahaGuruInfo.map((guruInfo,index)=>
                <GuruCard 
                    key={index}
                    guruInfo = {guruInfo}
                />)}
            </Scroller>
            
        </section>
        
    )
}