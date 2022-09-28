import styles from '../styles/Home.module.css'
import {MatajiSection} from '../components/section/section-export'
import { FeesSection } from '../components/section/section-export'
import {MahaGuru} from '../components/section/section-export'
import {KundaliniAndChakraSection} from '../components/section/section-export'
import {SahajBenifit} from '../components/section/section-export'
import { NavBar } from '../components/atoms'
export default function Home() {
  return (
    <div className={styles.container}>
     <NavBar/>
     <MatajiSection/>
     <FeesSection/>
     <MahaGuru/>
     <KundaliniAndChakraSection/>
     <SahajBenifit/>
    </div>
  )
}
