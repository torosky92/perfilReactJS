import perfil from '../img/perfil.png'
import { SiMaildotru, SiLinkedin, SiYoutube, SiGithub } from "react-icons/si"
export const HomeInformation ={
    Title:{
        Spanish:<>Soy <span>David A. Toro M.</span></>,
        English: <>I'm <span>David A. Toro M.</span></>,
    },
    Description:{
        Spanish:<>
            <p>
                Desarrollador Backend con el lenguaje Python durante más de 7 años, con conocimientos en IoT, Machine Learning, DeepLearning, Base de datos relacionados (SQL) y no relacionados (redis).
            </p>
            <p>
                Con conocimientos adicionales en electrónica, diseño 3D con la herramienta SolidWorks, Impresión 3D, Diseños de PCB con fresadora, Grabado CNC y automatización industrial.
            </p>
            <p>
                Con capacidad en trabajo en equipo, tolerante, dinámico, proactivo, líder, responsable, innovador, inquieto por el conocimiento y sociable.
            </p>
            <p>
                Me encuentro ubicado en la ciudad de Envigado, Antioquia en Colombia.
            </p>
        </>,
        English:<>
            <p>
                Backend Developer with Python for more than 7 years, with knowledge in IoT, Machine Learning, DeepLearning, Related Databases (SQL) and Unrelated (NoSQL).
            </p>
            <p>
                With additional knowledge in electronics, 3D design with the SolidWorks tool, 3D printing, PCB designs with a milling machine, CNC engraving and industrial automation.
            </p>
            <p>
                With ability in teamwork, tolerant, dynamic, proactive, leader, responsible, innovative, interested in knowledge and sociable.
            </p>
            <p>
                I'm located in the Envigado city, Antioquia from Colombia.
            </p>
            
        </>
    },
    Photo:<img src={perfil} alt=""/>,
    Contact:[
        {
            icon:<SiLinkedin/>,
            text:'https://www.linkedin.com/in/david-antonio-toro-medina-87695a168/',
        },
        {
            icon:<SiYoutube/>,
            text:'https://www.youtube.com/channel/UC5xMlR8gWTiKshrzSHv0D4w',
        },
        {
            icon:<SiGithub/>,
            text:'https://github.com/torosky92',
        },
        {
            icon:<SiMaildotru/>,
            text:'david-toro92@hotmail.com',
        }
    ],
    Whatsapp:'+573008850830',
}