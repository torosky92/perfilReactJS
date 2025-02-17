
import { SiRedis, SiMysql, SiArduino, SiAngular, SiTypescript, SiLabview, SiSiemens, SiMitsubishi, SiMongodb, SiLinux, SiWindows, SiMicrosoftexcel, SiMicrosoftpowerpoint, SiMicrosoftword, SiMicrosoftvisio, SiVisualstudiocode } from "react-icons/si"
import { FaHome, FaChartBar, FaChartPie, FaUserAlt, FaReact, FaCss3, FaHtml5, FaPython, FaGithubSquare, FaJs} from "react-icons/fa"
import cura from '../img/cura.ico'
import eagle from '../img/eagle.ico'
import tia from '../img/tia.ico'
import qtdesigner from '../img/qtdesigner.png'
import matlab from '../img/MATLAB.ico'
import proteus from '../img/proteus.png'
import picpick from '../img/picpick.png'
import vba from '../img/vba.png'
import xampp from '../img/xampp.png'
import SolidWorks from '../img/solidworks.png'
import scneider from '../img/scneider.png'
import movavi from '../img/movavi.png'
import PSIM from '../img/PSIM.png'
import CadeSimu from '../img/CadeSimu.png'
import { IoApps } from "react-icons/io5"
export const languagesWhatsapp = {
    Spanish:{
        company:'HABLAR CON DAVID',
        send:'Enviar',
        text:'¿En que te puedo ayudar?',
    },
    English:{
        company:'CONTACT WITH DAVID',
        send:'SEND',
        text:'How I can help you?',
    }
}
export const languagesFooter = {
    Spanish:<>Pagina Creado Por <span>David A. Toro M.</span></>,
    English:<>Page Created by <span>David A. Toro M.</span></>,
}
export const languagesMain = [
    {
        titles:{
            Spanish:'INICIO',
            English:'HOME',
        },
        icon:<FaHome/>,
        link:'/perfilReactJS'
    },
    {
        titles:{
            Spanish:'ACERCA DE MI',
            English:'ABOUT ME',
        },
        icon:<FaUserAlt/>,
        link:'/perfilReactJS/AboutMe'
    },
    {
        titles:{
            Spanish:'PROYECTOS Y DESARROLLOS',
            English:'PROJECTS AND DEVELOPMENTS',
        },
        icon:<FaChartBar/>,
        link:'/perfilReactJS/ProjectsAndDevelopments'
    },
    {
        titles:{
            Spanish:'EXPERIENCIA',
            English:'EXPERIENCE',
        },
        icon:<FaChartBar/>,
        link:'/perfilReactJS/Experience'
    },
    {
        titles:{
            Spanish:'HABILIDADES',
            English:'SKILLS',
        },
        icon:<FaChartPie/>,
        link:'/perfilReactJS/Skill'
    },
]
export const SOFTWARE = [
    {
        software:'VSC',
        icons:<SiVisualstudiocode/>,
        color:'#00A1F1',
        year: 2019,
        month: 7,
        day: 1,
    },
    {
        software:'SOLIDWORKS',
        icons:<img src={SolidWorks} alt=""/>,
        color:'black',
        year: 2014,
        month: 4,
        day: 1,
    },
    {
        software:'EAGLE',
        icons:<img src={eagle} alt=""/>,
        color:'#006699',
        year: 2016,
        month: 9,
        day: 1,
    },
    {
        software:'PROTEUS',
        icons:<img src={proteus} alt=""/>,
        color:'#000099',
        year: 2015,
        month: 3,
        day: 1,
    },
    {
        software:'ARDUINO',
        icons:<SiArduino/>,
        color:'#009973',
        year: 2014,
        month: 7,
        day: 1,
    },
    {
        software:'PICPICK',
        icons:<img src={picpick} alt=""/>,
        color:'black',
        year: 2020,
        month: 3,
        day: 1,
    },
    {
        software:'CURA',
        icons:<img src={cura} alt=""/>,
        color:'#000080',
        year: 2019,
        month: 3,
        day: 1,
    },
    {
        software:'EXCEL',
        icons:<SiMicrosoftexcel/>,
        color:'green',
        year: 2005,
        month: 3,
        day: 1,
    },
    {
        software:'VBA',
        icons:<img src={vba} alt=""/>,
        color:'#34A853',
        year: 2013,
        month: 3,
        day: 1,
    },
    {
        software:'VISIO',
        icons:<SiMicrosoftvisio/>,
        color:'#000080',
        year: 2015,
        month: 3,
        day: 1,
    },
    {
        software:'POWERPOINT',
        icons:<SiMicrosoftpowerpoint/>,
        color:'#F65314',
        year: 2005,
        month: 3,
        day: 1,
    },
    {
        software:'WORD',
        icons:<SiMicrosoftword/>,
        color:'#146EB4',
        year: 2005,
        month: 3,
        day: 1,
    },
    {
        software:'XAMPP',
        icons:<img src={xampp} alt=""/>,
        color:'orange',
        year: 2018,
        month: 3,
        day: 1,
    },
    {
        software:'LABVIEW',
        icons:<SiLabview/>,
        color:'Orange',
        year: 2015,
        month: 3,
        day: 1,
    },
    {
        software:'DESIGNER',
        icons:<img src={qtdesigner} alt=""/>,
        color:'#34A853',
        year: 2018,
        month: 3,
        day: 1,
    },
    {
        software:'MATLAB',
        icons:<img src={matlab} alt=""/>,
        color:'#F9D341',
        year: 2015,
        month: 7,
        day: 1,
    },
    {
        software:'CANDLE',
        icons:'CNC',
        color:'#3B5998',
        year: 2020,
        month: 3,
        day: 1,
    },
    {
        software:'SoMachineBasic',
        icons:<img src={scneider} alt=""/>,
        color:'#34A853',
        year: 2016,
        month: 9,
        day: 1,
    },
    {
        software:'CADE_SIMU',
        icons:<img src={CadeSimu} alt=""/>,
        color:'red',
        year: 2014,
        month: 8,
        day: 1,
    },
    {
        software:'PSIM',
        icons:<img src={PSIM} alt=""/>,
        color:'#3B5998',
        year: 2019,
        month: 9,
        day: 1,
    },
    {
        software:'GWORKS',
        icons:<SiMitsubishi/>,
        color:'red',
        year: 2015,
        month: 8,
        day: 1,
    },
    {
        software:'MOVAVI',
        icons:<img src={movavi} alt=""/>,
        color:'black',
        year: 2017,
        month: 3,
        day: 1,
    },
    {
        software:'TIA_PORTAL',
        icons:<img src={tia} alt=""/>,
        color:'#34A853',
        year: 2017,
        month: 3,
        day: 1,
    }
]

export const SystemOP = [
    {
        system:'Windows',
        icons:<SiWindows/>,
        color:'#00A1F1',
        level:{
            Spanish:'Avanzado',
            English:'Advanced',
        },
        year: 1996,
        month: 7,
        day: 1,
    },
    {
        system:'Ubuntu',
        icons:<SiLinux/>,
        color:'orange',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        year: 2016,
        month: 7,
        day: 1,
    }
]

export const ProgrammingLanguages = [
    {
        language:'PYTHON',
        icons:<FaPython/>,
        color:'#00b33c',
        level:{
            Spanish:'Avanzado',
            English:'Advanced',
        },
        library:[
            {
                library: 'OOP',
                year: 2019,
                month: 7,
                day: 1,
            },
            {
                library: 'REDIS',
                year: 2023,
                month: 1,
                day: 1,
            },
            {
                library: 'FLASK',
                year: 2019,
                month: 10,
                day: 1,
            },
            {
                library: 'DJANGO',
                year: 2020,
                month: 7,
                day: 1,
            },
            {
                library: 'MYSQL - CONECTOR',
                year: 2018,
                month: 5,
                day: 1,
            },
            {
                library: 'SQLALCHEMY',
                year: 2019,
                month: 8,
                day: 1,
            },
            {
                library: 'PANDAS',
                year: 2018,
                month: 5,
                day: 1,
            },
            {
                library: 'PYQT5',
                year: 2018,
                month: 5,
                day: 1,
            },
            {
                library: 'PAHO - MQTT',
                year: 2019,
                month: 7,
                day: 1,
            },
            {
                library: 'SERIAL',
                year: 2019,
                month: 9,
                day: 1,
            },
            {
                library: 'JSON',
                year: 2019,
                month: 7,
                day: 1,
            },
            {
                library: 'NUMPY',
                year: 2018,
                month: 7,
                day: 1,
            },
            {
                library: 'SELENIUM',
                year: 2023,
                month: 3,
                day: 1,
            },
            {
                library: 'CELERY',
                year: 2023,
                month: 7,
                day: 1,
            },
            {
                library: 'BIGQUERY',
                year: 2022,
                month: 1,
                day: 1,
            },
        ],
        year: 2017,
        month: 2,
        day: 1,
    },
    {
        language:'REACT',
        icons:<FaReact/>,
        color:'#00A1F1',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[],
        year: 2018,
        month: 7,
        day: 1,
    },
    {
        language:'ANGULAR',
        icons:<SiAngular/>,
        color:'#ff0000',
        level:{
            Spanish:'Básico',
            English:'Basic',
        },
        library:[],
        year: 2019,
        month: 7,
        day: 1,
    },
    {
        language:'JAVASCRIPT',
        icons:<FaJs/>,
        color:'#ffcc00',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[],
        year: 2018,
        month: 7,
        day: 1,
    },
    {
        language:'TYPESCRIPT',
        icons:<SiTypescript/>,
        color:'#000080',
        level:{
            Spanish:'Básico',
            English:'Basic',
        },
        library:[],
        year: 2018,
        month: 7,
        day: 1,
    },
    {
        language:'CSS',
        icons:<FaCss3/>,
        color:'#3B5998',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[
            {
                library: 'BOOSTRAP',
                year: 2018,
                month: 7,
                day: 1,
            },
            {
                library: 'SASS',
                year: 2018,
                month: 7,
                day: 1,
            },
            {
                library: 'LESS',
                year: 2018,
                month: 7,
                day: 1,
            },
        ],
        year: 2018,
        month: 7,
        day: 1,
    },
    {
        language:'HTML',
        icons:<FaHtml5/>,
        color:'#F65314',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[],
        year: 2018,
        month: 7,
        day: 1,
    },
    {
        language:'SQL',
        icons:<SiMysql/>,
        color:'#3333ff',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[
            {
                library: 'POSTGRES',
                year: 2022,
                month: 7,
                day: 1,
            },
            {
                library: 'MYSQL',
                year: 2017,
                month: 7,
                day: 1,
            },
            {
                library: 'BIGQUERY',
                year: 2022,
                month: 1,
                day: 1,
            },
        ],
        year: 2017,
        month: 7,
        day: 1,
    },
    {
        language:'MONGODB',
        icons:<SiMongodb/>,
        color:'green',
        level:{
            Spanish:'Básico',
            English:'Basic',
        },
        library:[],
        year: 2020,
        month: 7,
        day: 1,
    },
    {
        language:'REDIS',
        icons:<SiRedis/>,
        color:'green',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[],
        year: 2023,
        month: 1,
        day: 1,
    },
    {
        language:'ARDUINO',
        icons:<SiArduino/>,
        color:'#009973',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[
            {
                library: 'MQTT',
                year: 2018,
                month: 3,
                day: 1,
            },
            {
                library: 'I2C',
                year: 2016,
                month: 7,
                day: 1,
            },
            {
                library: 'SERIAL',
                year: 2015,
                month: 3,
                day: 1,
            },
            {
                library: 'GSM',
                year: 2019,
                month: 8,
                day: 1,
            },
            {
                library: 'GPRS',
                year: 2019,
                month: 8,
                day: 1,
            }
        ],
        year: 2014,
        month: 7,
        day: 1,
    },
    {
        language:'C++',
        icons:'C++',
        color:'#000099',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[],
        year: 2019,
        month: 7,
        day: 1,
    },
    {
        language:'ROS',
        icons:<><IoApps/>ROS</>,
        color:'#36486b',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[],
        year: 2019,
        month: 9,
        day: 1,
    },
    {
        language:'GIT',
        icons:<FaGithubSquare/>,
        color:'black',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[
            {
                library: 'GITHUB',
                year: 2019,
                month: 7,
                day: 1,
            },
            {
                library: 'GITLAB',
                year: 2022,
                month: 12,
                day: 20,
            },
        ],
        year: 2019,
        month: 7,
        day: 1,
    },
    {
        language:'SIEMENS',
        icons:<SiSiemens/>,
        color:'#34A853',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[
            {
                library: 'TIA PORTAL',
                year: 2014,
                month: 7,
                day: 1,
            },
            {
                library: 'PC SIMU',
                year: 2021,
                month: 1,
                day: 1,
            },
            {
                library: 'MICROWIN STEPS7',
                year: 2021,
                month: 1,
                day: 1,
            }
        ],
        year: 2016,
        month: 7,
        day: 1,
    },
    {
        language:'LABVIEW',
        icons:<SiLabview/>,
        color:'Orange',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[],
        year: 2015,
        month: 7,
        day: 1,
    },
    {
        language:'MATLAB',
        icons:<img src={matlab} alt=""/>,
        color:'#F9D341',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[],
        year: 2015,
        month: 7,
        day: 1,
    },
    {
        language:'MITSUBISHI',
        icons:<SiMitsubishi/>,
        color:'red',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[
            {
                library: 'GWORKS',
                year: 2015,
                month: 8,
                day: 1,
            }
        ],
        year: 2015,
        month: 8,
        day: 1,
    },
    {
        language:'SCNEIDER',
        icons:<img src={scneider} alt=""/>,
        color:'#34A853',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[
            {
                library: 'SoMachineBasic',
                year: 2014,
                month: 7,
                day: 1,
            }
        ],
        year: 2016,
        month: 7,
        day: 1,
    },
    {
        language:'CNC',
        icons:'CNC',
        color:'#34A853',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[],
        year: 2018,
        month: 11,
        day: 1,
    }
]
