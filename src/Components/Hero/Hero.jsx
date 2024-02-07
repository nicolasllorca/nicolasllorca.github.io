import styles from "./styles.module.css"
import Link from "next/link";

import Image from "next/image";
import FotoMia from "../../../public/Foto_pers.jpg"



function Hero () {

    return (
        
        <div className={styles.herocontainer}>
                <Image className={styles.fotoMia} src={FotoMia} alt="imagen-personal" height={150} width={150} />
        
                <div className={styles.presentation}>
                        <h2 className={styles.h2}>¡Hola! Soy Nicolás Llorca</h2><br></br>
                        <p className={styles.p}>
                            Soy un Desarrollador Web de Montevideo, Uruguay.<br></br><br></br>
                            Estudio <b>Ciencias Económicas</b> y <b>Programación</b> ya que creo que podrían combinar muy bien. <br></br><br></br>
                            Estoy siempre en un constante aprendizaje de nuevos conocimientos y proyectos, y es por eso que debajo podrás encontrar distintos proyectos que he ido creando, ¡espero que te parezcan interesantes!
                        </p>

                    <div>
                    <ul className={styles.sections}>
                        <li>
                            <Link href="#Conocimientos">Conocimientos</Link>
                        </li>
                        <li>
                            <Link href="#Proyectos">Proyectos personales</Link>
                        </li>
                        <li>
                            <Link href="#Contacto">Contáctame</Link>
                        </li>
                    </ul>
                    </div>
                </div>                  
                  
        </div>        

    )
}

export default Hero