import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import style from './sidebar.module.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CloseIcon from '@mui/icons-material/Close';
import { useRecoilState } from 'recoil';
import { showSideBarAtom } from '../../../recoil-states/recoil-atoms';


export default function SideBar({}) {

  const [isShowingDrawer ,setIsShowingDrawer]= useRecoilState(showSideBarAtom)

  const getOptions = () => (
    <Box>
      <div className={style.optionListContainer}>
        {['भजन','पुस्तकें','पोम्पलेट्स','upcoming Pooja','centers Nearby']
        .map((option)=>(
          <div className={style.option} key={option}>
            <MusicNoteIcon/>
            {option}
          </div>
        ))}
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer
        // open={isDrawerOpen}
        open={isShowingDrawer}
        // onClose={handleOpenDrawer}
      >
        <div className={style.closeBtn}>
          <CloseIcon 
            color='error' 
            fontSize='small'
            onClick={()=>setIsShowingDrawer(false)}
          />
        </div>
        {getOptions()}
      </Drawer>
    </div>
  );
}
