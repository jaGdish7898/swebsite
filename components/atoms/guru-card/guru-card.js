import cardStyle from './guru-card.module.css'
import Image from 'next/image'
import shinchan from '../../../public/mataji-images/shinchan.png'
export default function GuruCard ({guruInfo}) {
   
    const {
        name,
        image,
        message
    } = guruInfo

    return(
        <div className={cardStyle.cardWrapper}>
            <div className={cardStyle.imageWrapper}>
                <Image 
                    src={image}
                    layout='fill'
                    objectFit='fill'
                    className={cardStyle.image}
                    alt = 'guru'
                />
                
            </div>
            <div className={cardStyle.infoContainer}>
                <h5 className={cardStyle.name}>{name}</h5>
                {message}
            </div>
            

        </div>
    )
}