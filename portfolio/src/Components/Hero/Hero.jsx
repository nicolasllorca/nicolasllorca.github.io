import styles from "./styles.module.css"


import Image from "next/image";
import FotoMia from "../../../public/Foto_pers.jpg"


function Hero () {

    return (
        
        <div className={styles.herocontainer}>
                <Image className={styles.fotoMia} src={FotoMia} alt="imagen-personal" height={150} width={150} />
        
                <div className={styles.presentation}>
                        <h2>¡Hola! Soy Nicolás Llorca</h2><br></br>
                        <p>
                            Soy un Desarrollador Web de Montevideo, Uruguay.<br></br><br></br>
                            Estudio <b>Ciencias Económicas</b> y <b>Programación</b> ya que creo que podrían combinar muy bien, estando siempre en un constante aprendizaje de nuevos conocimientos y creaciones de distintos proyectos.<br></br>
                            Debajo podrás ir viendo los distintos proyectos que he ido creando, ¡espero que te parezcan interesantes!
                        </p>

                    <div>
                    <ul className={styles.sections}>
                        <li className={styles.sections} id="Conocimientos"> Conocimientos </li>
                        <li className={styles.sections} id="Proyectos"> Proyectos </li>
                        <li className={styles.sections} id="Contacto"> Contáctame </li>
                    </ul> 
                </div>

                </div>
                
                  
        </div>        

    )
}

export default Hero