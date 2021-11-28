import perfil from '../img/perfil.png'
import { SiGmail, SiMaildotru, SiLinkedin, SiInstagram, SiYoutube, SiGithub, SiTelegram } from "react-icons/si"
export const HomeInformation ={
    Title:{
        Spanish:'Soy David Antonio Toro Medina',
        English:"I'm David Antonio Toro Medina",
    },
    Description:{
        Spanish:'Estoy en la ciudad Envigado, Antioquia en Colombia basado en el desarrollo FullStack y en el área de IoT. Con una trayectoria de 3 años de experiencia en React (FrontEnd) y 5 años de experiencia en Python (BackEnd). Con habilidades en el área de automatización IoT, robótica, control, electrónica, diseño de impresiones 3D, PCB con fresadora CNC y grabado en láser. Con capacidad en trabajo en equipo, tolerante, dinámico, proactivo, líder, responsable, innovador, inquieto por el conocimiento y sociable.',
        English:"I live in Envigado, Antioquia from Colombia based on FullStack development and in the area of IoT. With a trajectory of 3 years of experience in React (FrontEnd) and 5 years of Experience in Python (BackEnd). With skills in the area of ​​IoT automation, robotics, control, electronics, 3D print design, PCB with CNC milling and laser engraving. Capable of teamwork, tolerant, dynamic, proactive, leader, responsible, innovative, restless about knowledge and sociable.",
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
            icon:<SiInstagram/>,
            text:'https://www.instagram.com/torosky92/',
        },
    ],
    WT:[
        {
            icon:<SiGmail/>,
            text:'torosky92@gmail.com',
        },
        {
            icon:<SiMaildotru/>,
            text:'david-toro92@hotmail.com',
        },
        {
            icon:<SiTelegram/>,
            text:'+573008850830',
        }
    ],
    Whatsapp:'+573008850830',
}