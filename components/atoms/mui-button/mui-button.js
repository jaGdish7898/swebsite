import style from './mui-button.module.css'
import { Button } from '@mui/material'


export default function MuiButton ({onClickFunction , buttonText , isShowingButtonStyle}) {
console.log({isShowingButtonStyle})

    return(
        <Button 
            onClick = {onClickFunction}
            // sx = {isShowingButtonStyle && {background:'red'}}
        >
        {buttonText}
    </Button>
    )
}