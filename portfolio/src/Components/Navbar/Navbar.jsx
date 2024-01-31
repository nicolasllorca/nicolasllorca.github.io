import styles from "./styles.module.css"

import Link from "next/link"

import Image from "next/image"
import Logo from "../../../public/Logo3.png"
import SeparatorLine from "../SeparatorLine/SeparatorLine"


function Navbar () {

    return (
        
        <nav className={styles.navbar}>
            <div className={styles.maxWidth}>
                <div>
                    <Link href="/">
                        <div className={styles.navleft}>
                            <Image src={Logo} width={50} height={60} alt="Logo"/>
                        </div>
                    </Link>
                </div>   
                    <div className={styles.navright}>
                        <div className={styles.boton}>
                            <Link className={styles.Link} href="/">Inicio</Link>  
                        </div>
                    
                        <div className={styles.boton}>
                            <Link className={styles.Link} href="/">Sobre mí</Link>
                        </div>   
                    </div>
                    
            </div>

            <SeparatorLine />
        </nav>

    )
}

export default Navbar