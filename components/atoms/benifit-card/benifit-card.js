import cardStyle from './benifit-card.module.css'


export default function BenifitCard ({cardDetail}) {

    const {
        heading,
        info

    } = cardDetail

    return(
        <div className={cardStyle.cardWrapper}>
            <h5 className={cardStyle.primaryHeading}> {heading} </h5>
            <p className={cardStyle.explanation}>
                {info}
            </p>

        </div>
       
    )
}