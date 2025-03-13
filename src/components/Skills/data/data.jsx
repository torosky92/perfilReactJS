
import { SiRedis, SiMysql, SiArduino, SiLabview, SiSiemens, SiMitsubishi, SiMongodb, SiLinux, SiDjango, SiFlask, SiQt, SiSelenium, SiPandas, SiNumpy, SiJupyter, SiOpencv, SiScikitlearn, SiSwagger, SiKeras, SiPostgresql, SiOpenai, SiPostman, SiQgis, SiTermius } from "react-icons/si"
import { FaWindows, FaReact, FaCss3, FaHtml5, FaPython, FaJs, FaDocker, FaAws, FaGit, FaGithub, FaGitlab, FaJira} from "react-icons/fa"
import { IoApps } from "react-icons/io5"
import { BsPause } from "react-icons/bs"
import { BiLogoVisualStudio } from "react-icons/bi"

import cura from './img/cura.ico'
import eagle from './img/eagle.ico'
import tia from './img/tia.ico'
import qtdesigner from './img/qtdesigner.png'
import matlab from './img/MATLAB.ico'
import proteus from './img/proteus.png'
import picpick from './img/picpick.png'
import xampp from './img/xampp.png'
import SolidWorks from './img/solidworks.png'
import scneider from './img/scneider.png'
import movavi from './img/movavi.png'
import PSIM from './img/PSIM.png'
import CadeSimu from './img/CadeSimu.png'

export const SOFTWARE = [
    {
        software:'Visual Studio Code',
        icons:<BiLogoVisualStudio className="skill-icon"/>,
        color:'#00A1F1',
        year: 2021,
        month: 7,
        day: 1,
    },
    {
        software:'Postman',
        icons:<SiPostman className="skill-icon"/>,
        color:'#00A1F1',
        year: 2021,
        month: 7,
        day: 1,
    },
    {
        software:'QGIS',
        icons:<SiQgis className="skill-icon"/>,
        color:'#00A1F1',
        year: 2023,
        month: 7,
        day: 1,
    },
    {
        software:'Termius',
        icons:<SiTermius className="skill-icon"/>,
        color:'#00A1F1',
        year: 2023,
        month: 7,
        day: 1,
    },
    {
        software:'QT DESIGNER',
        icons:<img src={qtdesigner} alt="" className="skill-icon"/>,
        color:'#34A853',
        year: 2018,
        month: 3,
        day: 1,
    },
    {
        software:'SOLIDWORKS',
        icons:<img src={SolidWorks} alt="" className="skill-icon"/>,
        color:'black',
        year: 2014,
        month: 4,
        day: 1,
    },
    {
        software:'PICPICK',
        icons:<img src={picpick} alt="" className="skill-icon"/>,
        color:'black',
        year: 2020,
        month: 3,
        day: 1,
    },
    {
        software:'MOVAVI',
        icons:<img src={movavi} alt="" className="skill-icon"/>,
        color:'black',
        year: 2017,
        month: 3,
        day: 1,
    },
    {
        software:'CURA',
        icons:<img src={cura} alt="" className="skill-icon"/>,
        color:'#000080',
        year: 2019,
        month: 3,
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
        software:'EAGLE',
        icons:<img src={eagle} alt="" className="skill-icon"/>,
        color:'#006699',
        year: 2016,
        month: 9,
        day: 1,
    },
    {
        software:'PROTEUS',
        icons:<img src={proteus} alt="" className="skill-icon"/>,
        color:'#000099',
        year: 2015,
        month: 3,
        day: 1,
    },
    {
        software:'CADE_SIMU',
        icons:<img src={CadeSimu} alt="" className="skill-icon"/>,
        color:'red',
        year: 2014,
        month: 8,
        day: 1,
    },
    {
        software:'SoMachineBasic',
        icons:<img src={scneider} alt="" className="skill-icon"/>,
        color:'#34A853',
        year: 2016,
        month: 9,
        day: 1,
    },
    {
        software:'PSIM',
        icons:<img src={PSIM} alt="" className="skill-icon"/>,
        color:'#3B5998',
        year: 2019,
        month: 9,
        day: 1,
    },
    {
        software:'TIA_PORTAL',
        icons:<img src={tia} alt="" className="skill-icon"/>,
        color:'#34A853',
        year: 2017,
        month: 3,
        day: 1,
    },
    {
        software:'GWORKS',
        icons:<SiMitsubishi className="skill-icon"/>,
        color:'red',
        year: 2015,
        month: 8,
        day: 1,
    }
]

export const SystemOP = [
    {
        system:'Windows',
        icons:<FaWindows className="skill-icon"/>,
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
        icons:<SiLinux className="skill-icon"/>,
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
        icons:<FaPython className="skill-icon"/>,
        color:'#00b33c',
        level:{
            Spanish:'Avanzado',
            English:'Advanced',
        },
        year: 2018,
        month: 2,
        day: 1,
    },
    {
        language:'JAVASCRIPT',
        icons:<FaJs className="skill-icon"/>,
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
        language:'CSS',
        icons:<FaCss3 className="skill-icon"/>,
        color:'#3B5998',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        year: 2018,
        month: 7,
        day: 1,
    },
    {
        language:'HTML',
        icons:<FaHtml5 className="skill-icon"/>,
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
        icons:<><IoApps className="skill-icon"/>ROS</>,
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
        language:'LABVIEW',
        icons:<SiLabview className="skill-icon"/>,
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
        icons:<img src={matlab} alt="" className="skill-icon"/>,
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
        language:'PLC SIEMENS',
        icons:<SiSiemens className="skill-icon"/>,
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
        language:'PLC MITSUBISHI',
        icons:<SiMitsubishi className="skill-icon"/>,
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

export const ProgrammingFrameworks = [
    {
        language:'Django',
        icons:<SiDjango className="skill-icon"/>,
        color:'#00b33c',
        level:{
            Spanish:'Avanzado',
            English:'Advanced',
        },
        year: 2021,
        month: 2,
        day: 1,
    },
    {
        language:'Flask',
        icons:<SiFlask className="skill-icon"/>,
        color:'#00b33c',
        level:{
            Spanish:'Avanzado',
            English:'Advanced',
        },
        year: 2020,
        month: 2,
        day: 1,
    },
    {
        language:'PyQT',
        icons:<SiQt className="skill-icon"/>,
        color:'#00b33c',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        year: 2018,
        month: 2,
        day: 1,
    },
    {
        language:'Selenium',
        icons:<SiSelenium className="skill-icon"/>,
        color:'#00b33c',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        year: 2022,
        month: 2,
        day: 1,
    },
    {
        language:'Pandas',
        icons:<SiPandas className="skill-icon"/>,
        color:'#00b33c',
        level:{
            Spanish:'Avanzado',
            English:'Advanced',
        },
        year: 2021,
        month: 2,
        day: 1,
    },
    {
        language:'Swagger',
        icons:<SiSwagger className="skill-icon"/>,
        color:'#00b33c',
        level:{
            Spanish:'Avanzado',
            English:'Advanced',
        },
        year: 2021,
        month: 2,
        day: 1,
    },
    {
        language:'Numpy',
        icons:<SiNumpy className="skill-icon"/>,
        color:'#00b33c',
        level:{
            Spanish:'Avanzado',
            English:'Advanced',
        },
        year: 2021,
        month: 2,
        day: 1,
    },
    {
        language:'Keras',
        icons:<SiKeras className="skill-icon"/>,
        color:'#00b33c',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        year: 2022,
        month: 2,
        day: 1,
    },
    {
        language:'OpenCV',
        icons:<SiOpencv className="skill-icon"/>,
        color:'#00b33c',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        year: 2022,
        month: 2,
        day: 1,
    },
    {
        language:'Scikit-Learn',
        icons:<SiScikitlearn className="skill-icon"/>,
        color:'#00b33c',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        year: 2022,
        month: 2,
        day: 1,
    },
    {
        language:'JupyterLab',
        icons:<SiJupyter className="skill-icon"/>,
        color:'#00b33c',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        year: 2021,
        month: 2,
        day: 1,
    },
    {
        language:'REACT',
        icons:<FaReact className="skill-icon"/>,
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
        language:'ARDUINO',
        icons:<SiArduino className="skill-icon"/>,
        color:'#009973',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        year: 2014,
        month: 7,
        day: 1,
    }
]

export const DataBases = [
    {
        language:'POSTGRES',
        icons:<SiPostgresql className="skill-icon"/>,
        color:'#3333ff',
        level:{
            Spanish:'Avanzado',
            English:'Advanced',
        },
        year: 2020,
        month: 7,
        day: 1,
    },
    {
        language:'MySQL',
        icons:<SiMysql className="skill-icon"/>,
        color:'#3333ff',
        level:{
            Spanish:'Avanzado',
            English:'Advanced',
        },
        year: 2017,
        month: 7,
        day: 1,
    },
    {
        language:'BigQuery',
        icons:null,
        color:'#3333ff',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        year: 2022,
        month: 1,
        day: 1,
    },
    {
        language:'MONGODB',
        icons:<SiMongodb className="skill-icon"/>,
        color:'green',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[],
        year: 2020,
        month: 7,
        day: 1,
    },
    {
        language:'REDIS',
        icons:<SiRedis className="skill-icon"/>,
        color:'green',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[],
        year: 2022,
        month: 1,
        day: 1,
    }
]

export const DevOpsLanguages = [
    {
        language:'DOCKER',
        icons:<FaDocker className="skill-icon"/>,
        color:'#34A853',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[],
        year: 2021,
        month: 11,
        day: 1,
    },
    {
        language:'AWS',
        icons:<FaAws className="skill-icon"/>,
        color:'#34A853',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        year: 2021,
        month: 11,
        day: 1,
    },
    {
        language:'GIT',
        icons:<FaGit className="skill-icon"/>,
        color:'#34A853',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[],
        year: 2019,
        month: 11,
        day: 1,
    },
    {
        language:'GITHUB',
        icons:<FaGithub className="skill-icon"/>,
        color:'#34A853',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[],
        year: 2020,
        month: 11,
        day: 1,
    },
    {
        language:'GITLAB',
        icons:<FaGitlab className="skill-icon"/>,
        color:'#34A853',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[],
        year: 2021,
        month: 11,
        day: 1,
    },
    {
        language:'JIRA',
        icons:<FaJira className="skill-icon"/>,
        color:'#34A853',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[],
        year: 2022,
        month: 11,
        day: 1,
    },
    {
        language:'XAMPP',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        icons:<img src={xampp} alt="" className="skill-icon"/>,
        color:'orange',
        year: 2018,
        month: 3,
        day: 1,
    }
]

export const IALanguages = [
    {
        language:'OpenAI',
        icons:<SiOpenai className="skill-icon"/>,
        color:'#34A853',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[],
        year: 2024,
        month: 8,
        day: 1,
    },
    {
        language:'Elevenlabs',
        icons:<BsPause className="skill-icon"/>,
        color:'#34A853',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        year: 2024,
        month: 2,
        day: 1,
    },
    {
        language:'Machine Learning',
        icons: null,
        color:'#34A853',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[],
        year: 2022,
        month: 11,
        day: 1,
    },
    {
        language:'Deep Learning',
        icons: null,
        color:'#34A853',
        level:{
            Spanish:'Intermedio',
            English:'Intermediate',
        },
        library:[],
        year: 2022,
        month: 11,
        day: 1,
    }
]
