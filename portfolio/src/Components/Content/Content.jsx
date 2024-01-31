import styles from "./styles.module.css"


import Image from "next/image";

import HTML5 from "../../../public/logo_HTML5.svg"
import CSS from "../../../public/logo_CSS.webp"
import JS from "../../../public/logo_JS.webp"
import NODE from "../../../public/logo_nodejs.webp"
import REACT from "../../../public/logo_react.webp"
import NEXTJS from "../../../public/logo_nextjs.webp"
import SQL from "../../../public/logo_sql.png"

import SeparatorLineContent from "../SeparatorLineContent/SeparatorLineContent";



function Content () {
        return (

                <><><><SeparatorLineContent /><><div className={styles.titulo}>

                <h2>Conocimientos</h2>
            </div>

                <div className={styles.conocimientos}>
                    <div className={styles.gallery}>
                        <h2>Actualmente poseo conocimiento en: </h2>
                        <div className={styles.imageContainer}>
                            <div className={styles.image}>
                                <Image src={HTML5} height={150} width={150} alt="HTML" />
                                <div className={styles.overlay}>
                                    <p>
                                        Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para
                                        estructurar y desplegar una página web y sus contenidos.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.image}>
                                <Image src={CSS} height={150} width={200} alt="CSS" />
                                <div className={styles.overlay}>
                                    <p>
                                        CSS (Cascading Style Sheets) significan «Hojas de estilo en cascada» es usado para aplicar estilos (colores, formas, márgenes, etc...) a uno o varios documentos de forma automática y masiva.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.image}>
                                <Image src={JS} height={150} width={150} alt="JS" />
                                <div className={styles.overlay}>
                                    <p>
                                        JavaScript es un lenguaje de secuencias de comandos que te permite crear contenido de actualización dinámica, controlar multimedia, animar imágenes y más
                                    </p>
                                </div>
                            </div>
                            <div className={styles.image}>
                                <Image src={NODE} height={150} width={150} alt="NODEJS" />
                                <div className={styles.overlay}>
                                    <p>
                                        Node. js es un entorno de ejecución JavaScript de código abierto y
                                        multiplataforma que se utiliza para desarrollar aplicaciones escalables del lado del servidor y de red.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.gallery}>
                        <h2>A su vez, me encuentro aprendiendo y perfeccionando: </h2>
                        <div className={styles.imageContainer}>
                            <div className={styles.image}>
                                <Image src={REACT} height={150} width={150} alt="REACT" />
                                <div className={styles.overlay}>
                                    <p>
                                        React se utiliza generalmente para construir la interfaz de usuario (frontend) de las aplicaciones web.
                                        Ofrece una rápida renderización de las páginas y un mayor rendimiento.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.image}>
                                <Image src={NEXTJS} height={150} width={150} alt="NEXTJS" />
                                <div className={styles.overlay}>
                                    <p>
                                        Creado por Vercel, Next. js es un marco de trabajo que permite a los desarrolladores crear aplicaciones de página
                                        única y aplicaciones web de alto rendimiento a través de la renderización del lado del servidor.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.image}>
                                <Image src={SQL} height={150} width={150} alt="SQL" />
                                <div className={styles.overlay}>
                                    <p>
                                        SQL (Structured Query Language; en español lenguaje de consulta estructurada) es un lenguaje específico de dominio, diseñado para administrar, y recuperar información de sistemas de gestión de bases de datos relacionales.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div></></>
                <SeparatorLineContent /></>
                
                
                <div className={styles.proyectos}>
                    <div className={styles.titulo}>
                        <h2>Proyectos</h2>
                    </div>




                </div></>
                    

                    
)}

    

export default Content