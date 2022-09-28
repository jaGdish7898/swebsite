import style from './chakra.module.css'
import { Button } from '@mui/material'
import {Fragment, useEffect, useState} from 'react'
import { DotList } from '../../atoms'
import Player from '../../molecules/react-player/react-player'
import { MuiButton } from '../../atoms/atom-exports'
import { CHAKRA_INFO } from '../../../util/constant'
import Image from 'next/image'



export default function Chakra () {
    const [chakraToShow , setChakraToShow] = useState('Muladhaar')
    const [chakraData , setChakraData] = useState({...CHAKRA_INFO[chakraToShow]})
    const [isShowingButtonStyle , setIsShowingButtonStyle] = useState(false)

    const onClickChakraText = (chakraName)=>{
        setChakraToShow(chakraName)
        setIsShowingButtonStyle(true)
        setChakraData(CHAKRA_INFO[chakraToShow])
    }
    useEffect(()=>{
        alert(3)
    },[])

    function headingAndExplanation (heading,explanation) {
        return (
            <div className={style.container}>
                <p className={style.containerHeading}>{heading}</p>
                {explanation.map(point => (
                    <p className={style.containerExplanation}>{point}</p>
                ))}
                
            </div>
        )
    }

    return(
        <div className={`sectionPadding ${style.wrapper}`}>
            <div className={style.chakraList}>
               { ['Muladhaar','Swadishthan','Nabhi','Heart','Vishuddhi','Agnya','Sahastrar',].map((chakraName,index)=>(
                   
                    <MuiButton
                        key = {index}
                        onClickFunction = {()=>onClickChakraText(chakraName)}
                        buttonText  = {chakraName}
                        isShowingButtonStyle = {isShowingButtonStyle}
                    />
               ))}
            </div>
            <Fragment>
                
            </Fragment>
            <div className={style.flexBox}>
                <div className={style.chakraInfo}>
                    <h5 className={style.chakraName}> {chakraData.chakraName || 'मूलाधार'} </h5>
                    <p className={style.chakraQualities}>{chakraData.qualities}</p>
                    {headingAndExplanation(
                        'स्थान',
                       [chakraData.positionExplanation]
                    )}
                    {
                        headingAndExplanation(
                            'गुण',
                            [chakraData.qualityExplanation]                        
                    )}

                </div>
                <div className={style.imageWrapper}>
                    <Image
                        src={chakraData.image}
                        alt = 'muladhar'
                    />
                        
                </div>
            </div>
            <div className={style.listHolder}>
                    <DotList 
                        headingText={`${chakraData.chakraName || 'मूलाधार' } चक्र गुण`}
                        containtList={chakraData.qualityList}
                    />
                </div>
                <p className={style.paraOne}>{chakraData.paraOne}</p>
                <p className={style.paraTwo}>{chakraData.paraTwo}</p>

                <div className={style.briefExplanationSections}>
                    <div className={style.briefSecLeft}>
                        <Player
                            videoUrl = {chakraData.videoLink}
                            customStyle = {style.videoWrapper} 
                        />

                    </div>
                    <div className={style.briefSecRight}>
                       
                    {[...chakraData.briefExplanation].map(point => (
                        <p className={style.containerExplanation}>{point}</p>
                    ))}
                    </div>
                </div>
                {[...chakraData.paras].map(point => (
                        <p className={style.paras}>{point}</p>
                ))}
              
                {headingAndExplanation(
                    'आत्म मूल्यांकन',
                    [chakraData.atmaMulyankan]
                    )}
                {headingAndExplanation(
                    'संतुलन कैसे करें ?',
                    [chakraData.howToBalance]
                )}
        </div>
    )
}