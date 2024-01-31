
import SeparatorLine from "../SeparatorLine/SeparatorLine";
import Image from "next/image"
import Logo from "../../../public/Logo3.png"
import Linkedin from "../../../public/linkedin_dark.svg"
import Github from "../../../public/Logo_github.png"

import Link from "next/link"
import styles from "./styles.module.css"

function Footer () {
   
    const getYear = () =>{
        let date = new Date();
        return date.getFullYear()
      }


    return (
        
        <section className={styles.foot}> 
            
            <div className={styles.contentWidth}>
                <div className={styles.topfooter}>
                        <div>   
                              <p>
                                <Image src={Logo} width={40} height={50} alt="Logo"/>
                              </p> 
                              <div>
                                <p>Contact me:</p>
                                <p><Link href="mailto:nicolasllorca21@gmail.com">nicolasllorca21@gmail.com</Link></p>
                              </div>
                        </div> 

                        <div className={styles.me}>
                            <p><Image className={styles.meLink} src={Linkedin} width={15} height={15} alt="Linkedin logo"/><Link target="_blank" href='https://www.linkedin.com/in/nicolas-llorca/'>Linkedin</Link></p>
                            <p><Image className={styles.meLink} src={Github} width={25} height={15} alt="GitHub logo"/><Link target="_blank" href='https://www.github.com/nicolasllorca'>Github</Link></p>
                        </div>
                                
                </div>

                

                <div className={styles.centerfoot}>
                <div>&copy; {getYear()} Marca. Nicolás Llorca. All rights reserved.</div>
                </div>
            </div>
        </section>
            )
          }
          
export default Footer

