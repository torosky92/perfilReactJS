import { SiMysql, SiJavascript, SiFlask, SiArduino, SiDjango, SiPostgresql, SiUbuntu, SiDocker } from "react-icons/si"
import { FaReact, FaPython, FaAws} from "react-icons/fa"

import matlab from '../../Skills/data/img/MATLAB.ico'
import SolidWorks from '../../Skills/data/img/solidworks.png'
import redepesca2019 from './img/redepesca_2019.png'
import mares from './img/mares.png'
import hidroponia from './img/hidroponia.png'
import display from './img/display.png'
import arm from './img/arm.png'
import chocolatera from './img/chocolatera.jpg'
import liz from './img/liz.jpg'
import curso from './img/curso.png'

export const Developments = [
    {
        icons:<>
            <li><SiDocker className="project-icon"/></li>
            <li><SiPostgresql className="project-icon"/></li>
            <li><FaAws className="project-icon"/></li>
            <li><FaPython className="project-icon"/></li>
            <li><SiDjango className="project-icon"/></li>
            <li><SiFlask className="project-icon"/></li>
            <li><SiJavascript className="project-icon"/></li>
            <li><FaReact className="project-icon"/></li>
            <li><h4 className="project-icon mt-3">MQTT</h4></li>
        </>,
        /*link:<div className="video">
            <a href='https://www.youtube.com/embed/VUmZI-VCtkg'  target="_blank" rel="noreferrer"><h3 className="showVideo">Ver Video</h3></a> 
        </div>,*/
        title:{
            Spanish:'Mares Software Software Web APP',
            English:'Mares Software Software Web APP',
        },
        img: <img src={mares} alt="Mares Software" className="project-img-show"/>,
        DateInitial:{
            year: 2024,
            month: 2,
            day: 8,
        },
        DateFinal:{
            year:0,
            month:0,
            day:0
        },
        description:{
            Spanish:'Desarrollo de aplicación para el control de cada proceso de producción con su respectivo área, inventario, materias primas, envio de correo para el seguimiento desde que inicia un proceso, se detiene hasta que finalice. Todo el ambiente se realizo en el servidor de AWS, base de datos Postgres, Desarrollado en Python con el framework Flask (Respetando versión antigua) y Django para Backend, para generar el administrador y en Javascrip con el framework de React js para el Frontend. Conexión entre dispositivos de bascula y servidor, maquinas y servidor, para la obtencion real de tiempo de encendido de maquinas, horas hombre con su respectivo división de turno y hora del día según la normativa Colombiana.. Con su Chat para comunicación entre operarios y mayor control.',
            English:'Application development for the control of each production process with its respective area, inventory, raw materials, and email sending for tracking from the start, stop, and completion of a process. The entire environment was built on an AWS server with a Postgres database. Developed in Python with the Flask framework (maintaining the old version) and Django for the backend to generate the administrator, and in JavaScript with the React js framework for the frontend. Connections between scale devices and the server, as well as machines and servers, were established to obtain actual machine startup times, man-hours, and their respective shift schedules and time of day, in accordance with Colombian regulations. Chat was included for communication between operators and greater control.'
        }
    },
    {
        icons:<>
            <li><SiDocker className="project-icon"/></li>
            <li><SiMysql className="project-icon"/></li>
            <li><FaAws className="project-icon"/></li>
            <li><FaPython className="project-icon"/></li>
            <li><SiDjango className="project-icon"/></li>
        </>,
        link:null,
        title:{
            Spanish:'Cursos online para el area de Salud',
            English:'Online courses for the health area',
        },
        img: <img src={curso} alt="Curso de Salud" className="project-img-show"/>,
        DateInitial:{
            year: 2023,
            month: 2,
            day: 8,
        },
        DateFinal:{
            year:0,
            month:0,
            day:0
        },
        description:{
            Spanish:'Desarrollo de backend por medio del lenguaje Python con el framework de Django para plataforma de cursos de la área de la salud. Conectando a Stripe y pagina de emblemas. Con toda la infraestructura.',
            English:'Backend development using Python with the Django framework for a healthcare course platform. Connected to Stripe and the emblem page. Complete with all the infrastructure.'
        }
    },
    {
        icons:<>
            <li><SiDocker className="project-icon"/></li>
            <li><SiMysql className="project-icon"/></li>
            <li><FaPython className="project-icon"/></li>
            <li><SiFlask className="project-icon"/></li>
            <li><SiJavascript className="project-icon"/></li>
            <li><FaReact className="project-icon"/></li>
            <li><h1 className="project-icon">MQTT</h1></li>
        </>,
        link:<div className="video">
            <a href='https://www.youtube.com/embed/VUmZI-VCtkg'  target="_blank" rel="noreferrer"><h3 className="showVideo">Ver Video 1</h3></a> 
            <a href='https://www.youtube.com/embed/NGXWu840-iQ'  target="_blank" rel="noreferrer"><h3 className="showVideo">Ver Video 2</h3></a>
        </div>,
        title:{
            Spanish:'Redepesca SAS Software Web APP',
            English:'Redepesca SAS Software Web APP',
        },
        img: <img src={redepesca2019} alt="Redepesca 2019" className="project-img-show"/>,
        DateInitial:{
            year: 2019,
            month: 2,
            day: 8,
        },
        DateFinal:{
            year:0,
            month:0,
            day:0
        },
        description:{
            Spanish:'Primera Fase de desarrollo de software para Redepesca, para cada área de producción para obtención de consumo de materia prima, horas hombre y horas maquinas para procesos de retorcido y vaporizado. Con su respectivo servidor local, base de datos MySQL, Desarrollado en Python con el framework Flask para Backend y en Javascrip con el framework de React js para el Frontend.',
            English:'First phase of software development for Redepesca, for each production area to obtain raw material consumption, man-hours, and machine-hours for twisting and steaming processes.'
        }
    },
    {
        icons:<>
            <li><SiDocker className="project-icon"/></li>
            <li><SiMysql className="project-icon"/></li>
            <li><FaPython className="project-icon"/></li>
            <li><SiFlask className="project-icon"/></li>
            <li><FaReact className="project-icon"/></li>
            <li><SiArduino className="project-icon"/></li>
            <li><h4 className="project-icon mt-3">MQTT</h4></li>
            <li><h4 className="project-icon mt-3">CNC</h4></li>
        </>,
        link:<div className="video">
            <a href='https://www.youtube.com/embed/OZy3gHpK6qM'  target="_blank" rel="noreferrer"><h3 className="showVideo">Ver Video</h3></a> 
        </div>,
        title:{
            Spanish:'Control de IoT de Hidroponia',
            English:'Hydroponics IoT Control',
        },
        DateInitial:{
            year: 2018,
            month: 1,
            day: 3,
        },
        DateFinal:{
            year:2019,
            month:5,
            day:18
        },
        img: <img src={hidroponia} alt="Hidroponia" className="project-img-show"/>,
        description:{
            Spanish:'Desarrollo de estructura de Hidroponia con su respectivo circuito electronico, su software para el control de riego, luz y vitaminas. Desarrollado en lenguaje Python para Backend, Arduino para el sistema electronico, comunicación MQTT, desarrollo en Javascript en React Js para el Frontend, base de datos MySQL. Y las tarjetas electroncias se realizaron con CNC Fresadora.',
            English:'Development of a hydroponic structure with its corresponding electronic circuit, software for controlling irrigation, light, and vitamins. Developed in Python for the backend, Arduino for the electronic system, MQTT communication, JavaScript development in React JS for the frontend, and a MySQL database. The electronic boards were made with a CNC milling machine.'
        }
    },
    {
        icons:<>
            <li><SiDocker className="project-icon"/></li>
            <li><SiMysql className="project-icon"/></li>
            <li><FaPython className="project-icon"/></li>
            <li><SiFlask className="project-icon"/></li>
            <li><FaReact className="project-icon"/></li>
            <li><SiArduino className="project-icon"/></li>
            <li><h4 className="project-icon mt-3">MQTT</h4></li>
            <li><h4 className="project-icon mt-3">CNC</h4></li>
        </>,
        img: <img src={display} alt="Display Supermercados" className="project-img-show"/>,
        link:<div className="video">
            <a href='https://www.youtube.com/embed/rEugum5F0Lg'  target="_blank" rel="noreferrer"><h3 className="showVideo">Ver Video 1</h3></a> 
            <a href='https://www.youtube.com/embed/2NszcogG0XE'  target="_blank" rel="noreferrer"><h3 className="showVideo">Ver Video 2</h3></a> 
        </div>,
        title:{
            Spanish:'Control de Display de Productos',
            English:'Product Display Control',
        },
        DateInitial:{
            year: 2019,
            month: 7,
            day: 15,
        },
        DateFinal:{
            year:2019,
            month:11,
            day:20
        },
        description:{
            Spanish: 'Diseño y elaboración de dispositivo electronico con su respectivo software con el lenguaje python con el framework flask para el backend, arduino para el circuito electronico, Javascript con framework React Js para el Frontend. Con el fin de controlar el display para cambiar nombre y precio del producto.',
            English:'Design and development of an electronic device with its respective software using Python with the Flask framework for the backend, Arduino for the electronic circuit, and JavaScript with the React JS framework for the frontend. The purpose was to control the display to change the product name and price.'
        }
    },
    {
        icons:<>
            <li><h4 className="project-icon mt-3">ROS</h4></li>
            <li><FaPython className="project-icon"/></li>
            <li><SiUbuntu className="project-icon"/></li>
            <li><SiArduino className="project-icon"/></li>
            <li><img src={SolidWorks} alt="" className="project-icon"/></li>
        </>,
        img: <img src={arm} alt="Brazo Robotico" className="project-img-show"/>,
        link:<div className="video">
            <a href='https://www.youtube.com/embed/Vn6OjI31pWA'  target="_blank" rel="noreferrer"><h3 className="showVideo">Ver Video 1</h3></a> 
            <a href='https://www.youtube.com/embed/g1mWn_negIg'  target="_blank" rel="noreferrer"><h3 className="showVideo">Ver Video 2</h3></a> 
        </div>,
        title:{
            Spanish:'Control de brazo robotico Chris V2',
            English:'Chris V2 robotic arm control',
        },
        DateInitial:{
            year: 2019,
            month: 9,
            day: 20,
        },
        DateFinal:{
            year:2019,
            month:10,
            day:5
        },
        description:{
            Spanish: 'Desarrollo de brazo robotico por medio de impresión 3D desarrollado en SolidWorks tanto los planos como el modelo 3D, para ingresar el modelo al ambiente de ROS y programarlo por medio de Python y arduino para su manipulación. En ambiente de Ubuntu.',
            English:'Development of a robotic arm using 3D printing. Both the plans and the 3D model were developed in SolidWorks. The model was then entered into the ROS environment and programmed using Python and Arduino for manipulation. The model was used in an Ubuntu environment.'
        }
    },
    {
        icons:<>
            <li><SiMysql className="project-icon"/></li>
            <li><FaPython className="project-icon"/></li>
            <li><SiFlask className="project-icon"/></li>
            <li><FaReact className="project-icon"/></li>
            <li><SiArduino className="project-icon"/></li>
            <li><img src={SolidWorks} alt="" className="project-icon"/></li>
        </>,
        img: <img src={chocolatera} alt="Juguera" className="project-img-show"/>,
        link:<div className="video">
            <a href='https://www.youtube.com/embed/MYitolmzSiw'  target="_blank" rel="noreferrer"><h3 className="showVideo">Ver Video</h3></a> 
        </div>,
        title:{
            Spanish:'Juguera Automatica',
            English:'Automatic Juicer',
        },
        DateInitial:{
            year: 2018,
            month: 2,
            day: 20,
        },
        DateFinal:{
            year: 2018,
            month: 7,
            day: 28,
        },
        description:{
            Spanish: 'Desarrollo estructural, electrico y programación. Por medio de diseño y planos mecanicos en SolidWorks se realizo todo el modelado para el funcionamiento de un dispositivo para servir jugos a empleados de empresa cada día tenga un jugo gratis y luego cada vez que se servia se le cobraba a final de mes, el circuito es controlado con arduino y con lectura de tarjetas RFID. El sistema en la parte de backend es en python con framework en Flask, el frontend es en Javascript con framework React js. La base de datos que se utilizo fue MySQL.',
            English:'Structural, electrical, and programming development. Using SolidWorks design and mechanical drawings, all the modeling was done for the operation of a device to serve juice to company employees. Each day, they receive a free juice, and each time they are served, they are charged at the end of the month. The circuit is controlled with Arduino and RFID card reader. The backend system is in Python with a Flask framework, and the frontend is in Javascript with a React js framework. The database used was MySQL.'
        }
    },
    {
        icons:<>
            <li><SiArduino className="project-icon"/></li>
            <li><img src={SolidWorks} alt="" className="project-icon"/></li>
            <li><img src={matlab} alt="" className="project-icon"/></li>
        </>,
        img: <img src={liz} alt="Lagarto Liz" className="project-img-show"/>,
        link:<div className="video">
            <a href='https://www.youtube.com/embed/fm2y-mXF3ok'  target="_blank" rel="noreferrer"><h3 className="showVideo">Ver Video 1</h3></a> 
            <a href='https://www.youtube.com/embed/JHyr7tfS3c4'  target="_blank" rel="noreferrer"><h3 className="showVideo">Ver Video 2</h3></a> 
        </div>,
        title:{
            Spanish:'Robot LIZ',
            English:'Robot LIZ',
        },
        DateInitial:{
            year: 2015,
            month: 1,
            day: 15,
        },
        DateFinal:{
            year: 2015,
            month: 5,
            day: 20,
        },
        description:{
            Spanish: 'Desarrollo de robot lagarto para imitar movimiento, por medio de programación en Arduino para el circuito electronico y para la lógica con matlab.',
            English:'Development of a lizard robot to imitate movement, using Arduino programming for the electronic circuit and Matlab for logic.'
        }
    },
]