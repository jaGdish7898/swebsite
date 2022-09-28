import style from './sahaj-benifit.module.css'
import { BenifitCard } from '../../atoms/atom-exports'
import ScrollableListWrapper from '../../molecules/scroller/scroller'
import { sahajBenifits } from '../../../util/constant'

export default function BenifitsOfSahajYoga () {


    return(
        <div className={`sectionPadding ${style.wrapper}`}>
            <h4 className={style.PrimaryHeading}>सहजयोग के लाभ</h4>
            <p></p>
            <div className={style.gridBox}>
                {sahajBenifits.map((cardDetail,index)=>(
                      <BenifitCard 
                        cardDetail = {cardDetail}
                        key = {index}
                      />
                ))}
            </div>
            <div className={style.gridBoxMobile}>

                <ScrollableListWrapper>
                {sahajBenifits.map((cardDetail,index)=>(
                        <BenifitCard
                          cardDetail = {cardDetail}
                          key = {index}
                        />
                    ))}
                </ScrollableListWrapper>

            </div>
            
        </div>
    )
}