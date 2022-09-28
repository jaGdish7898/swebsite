import { Fragment } from 'react'
import style from './dot-list.module.css'

export default function DotList({headingText,containtList = []}){

    return(
        <Fragment>
            <h5 className={style.head}>{headingText}</h5>
            {containtList.map(point=>(<li key = {point}>{point}</li>))}
        </Fragment>
    )
}