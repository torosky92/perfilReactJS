import { SiMysql, SiJavascript, SiFlask, SiArduino, SiDjango, SiPostgresql, SiUbuntu, SiDocker, SiPandas, SiSelenium, SiRedis, SiCelery, SiOpencv, SiOpenai, SiElevenlabs, SiTwilio, SiStripe } from "react-icons/si"
import { FaReact, FaPython, FaAws} from "react-icons/fa"

import matlab from '../../Skills/data/img/MATLAB.ico'
import SolidWorks from '../../Skills/data/img/solidworks.png'
import redepesca2019 from './img/redepesca_2019.jpg'
import mares from './img/mares.png'
import hidroponia from './img/hidroponia.png'
import display from './img/display.jpg'
import arm from './img/arm.png'
import chocolatera from './img/chocolatera.jpg'
import liz from './img/liz.jpg'
import curso from './img/curso.jpg'
import vuelos from './img/vuelos.jpg'
import search_product from './img/search_product.jpg'
import shopping_center from './img/shopping_center.jpg'
import news from './img/news.jpg'
import reading_event from './img/reading_event.jpg'
import ID_reading from './img/ID_reading.jpg'
import encrypt_app from './img/encrypt_app.jpg'
import Smart_Prescription from './img/Smart_Prescription.jpg'
import Smart_Chat from './img/Smart_Chat.jpg'
import Marketing_Report from './img/Marketing_Report.jpg'
import ml_predict_validate from './img/ml_predict_validate.jpg'
import Device_scales from './img/Device_scales.jpg'

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
            <li><spam className="project-icon mt-1">MQTT</spam></li>
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
            <li><SiPostgresql className="project-icon"/></li>
            <li><SiDjango className="project-icon"/></li>
            <li><SiPandas className="project-icon"/></li>
            <li><FaPython className="project-icon"/></li>
            <li><SiOpenai className="project-icon"/></li>
            <li><SiTwilio className="project-icon"/></li>
        </>,
        link:null,
        title:{
            Spanish:'App Web Generador de Informes de Marketing',
            English:'Marketing Report Generator Web App',
        },
        img: <img src={Marketing_Report} alt="Marketing Report" className="project-img-show"/>,
        DateInitial:{
            year: 2024,
            month: 12,
            day: 1,
        },
        DateFinal:{
            year:2024,
            month:12,
            day:16
        },
        description:{
            Spanish:'Desarrollo de aplicación para el área de mercadeo la cual por medio de encuestas ya sea por documentos de Excel o videollamadas que son transcritas por medio de la captura del audio y generando una estructura de forma de chat para que sea procesado por OpenAI este genere un reporte de acuerdo con los objetivos y descriptivos solicitados. Todo esta desarrollado en  framework Django de Python con Pandas, base de datos Postgres y conexión a Twilio.',
            English:'Development of an application for the marketing area that uses surveys, either through Excel documents or video calls, which are transcribed by capturing audio and generating a chat structure for processing by OpenAI. This generates a report based on the requested objectives and descriptions. Everything is developed in the Python framework Django with Pandas, a Postgres database, and a connection to Twilio.'
        }
    },
    {
        icons:<>
            <li><SiArduino className="project-icon"/></li>
            <li><FaPython className="project-icon"/></li>
            <li><spam className="project-icon mt-1">MQTT</spam></li>
            <li><spam className="project-icon mt-1">SERIAL</spam></li>
        </>,
        link:null,
        title:{
            Spanish:'Dispositivo y conexión de basculas ha Apps',
            English:'Device and connection of scales to Apps',
        },
        img: <img src={Device_scales} alt="Device scales" className="project-img-show"/>,
        DateInitial:{
            year: 2024,
            month: 11,
            day: 1,
        },
        DateFinal:{
            year:2024,
            month:12,
            day:1
        },
        description:{
            Spanish:'Desarrollo de dispositivo por parte electronica, estructura y programación para conectarse a las basculas que se tiene para conectarse a cualquier aplicación que se requiera.',
            English:'Development of a device with electronic components, structure, and programming to connect to existing scales and connect to any required application.'
        }
    },
    {
        icons:<>
            <li><SiPostgresql className="project-icon"/></li>
            <li><SiPandas className="project-icon"/></li>
            <li><FaPython className="project-icon"/></li>
        </>,
        link:null,
        title:{
            Spanish:'App Predicción de coordenadas geograficas y Validación de la información',
            English:'App for Prediction of Geographic Coordinates and Validation of Information',
        },
        img: <img src={ml_predict_validate} alt="ML Predict And Validate" className="project-img-show"/>,
        DateInitial:{
            year: 2024,
            month: 11,
            day: 1,
        },
        DateFinal:{
            year:2024,
            month:12,
            day:1
        },
        description:{
            Spanish:'Desarrollo de aplicación la cual le es ingresada información la cual es validada por modelos entrenados y adicionalmente ayuda generar posibles coordenadas geograficas de lo que se quiere encontrar. Todo esta desarrollado en lenguaje Python, base de datos Postgres, lectura de documentos Excel, modelos de Machine Learning.',
            English:'Application development in which information is entered, validated by trained models, and also helps generate possible geographic coordinates of the desired object. Everything is developed in Python, with a Postgres database, Excel document reading, and machine learning models.'
        }
    },
    {
        icons:<>
            <li><SiPostgresql className="project-icon"/></li>
            <li><SiDjango className="project-icon"/></li>
            <li><FaAws className="project-icon"/></li>
            <li><FaPython className="project-icon"/></li>
            <li><SiOpenai className="project-icon"/></li>
            <li><SiElevenlabs className="project-icon"/></li>
            <li><SiRedis className="project-icon"/></li>
            <li><SiDocker className="project-icon"/></li>
        </>,
        link:null,
        title:{
            Spanish:'App Web Chat Inteligente',
            English:'Smart Web Chat App',
        },
        img: <img src={Smart_Chat} alt="Smart Web Chat App" className="project-img-show"/>,
        DateInitial:{
            year: 2024,
            month: 1,
            day: 1,
        },
        DateFinal:{
            year:2024,
            month:4,
            day:10
        },
        description:{
            Spanish:'Desarrollo de aplicación para generar un chat inteligente integrado por OpenAI y Elevenlabs para generar texto y audio para entablar conversación con la persona que esta conversando y adquiriendo información importante para reclutar a personas para el area de salud. Todo esto esta desarrollado en framework Django de Python, base de datos Postgres y Redis para tareas en fila. Generando informes semanales para los reclutadores y todo esto en contenedores Docker y en infraestructura AWS.',
            English:'Application development to generate an intelligent chat integrated by OpenAI and Elevenlabs to generate text and audio to engage in conversation with the person speaking and gather important information for recruiting people for the healthcare field. All of this is developed in the Python framework Django, with a Postgres database and Redis for queuing tasks. Weekly reports are generated for recruiters, all in Docker containers and on AWS infrastructure.'
        }
    },
    {
        icons:<>
            <li><SiDocker className="project-icon"/></li>
            <li><SiMysql className="project-icon"/></li>
            <li><FaAws className="project-icon"/></li>
            <li><FaPython className="project-icon"/></li>
            <li><SiDjango className="project-icon"/></li>
            <li><SiStripe className="project-icon"/></li>
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
            <li><SiPostgresql className="project-icon"/></li>
            <li><SiDjango className="project-icon"/></li>
            <li><FaAws className="project-icon"/></li>
            <li><FaPython className="project-icon"/></li>
            <li><SiOpenai className="project-icon"/></li>
            <li><SiDocker className="project-icon"/></li>
        </>,
        link:null,
        title:{
            Spanish:'App Web consulta de recetas inteligentes',
            English:'Smart Prescription Consultation Web App',
        },
        img: <img src={Smart_Prescription} alt="Smart Prescription" className="project-img-show"/>,
        DateInitial:{
            year: 2024,
            month: 1,
            day: 1,
        },
        DateFinal:{
            year:2024,
            month:4,
            day:10
        },
        description:{
            Spanish:'Desarrollo de aplicación para consulta de recetas inteligentes por medio de OpenAI, con framework Django del lenguaje Python, base de datos Postgres y dockerizado. En infraestructura AWS.',
            English:'Development of an application for smart recipe querying using OpenAI, using the Python language Django framework, a Postgres database, and Dockerization. On AWS infrastructure.'
        }
    },
    {
        icons:<>
            <li><SiPostgresql className="project-icon"/></li>
            <li><SiDjango className="project-icon"/></li>
            <li><FaAws className="project-icon"/></li>
            <li><FaPython className="project-icon"/></li>
            <li><SiRedis className="project-icon"/></li>
            <li><SiCelery className="project-icon"/></li>
            <li><SiDocker className="project-icon"/></li>
        </>,
        link:null,
        title:{
            Spanish:'App Web Noticias e Información para las empresas',
            English:'Web App News and Information for Businesses',
        },
        img: <img src={news} alt="Web App News" className="project-img-show"/>,
        DateInitial:{
            year: 2023,
            month: 11,
            day: 8,
        },
        DateFinal:{
            year:2024,
            month:4,
            day:10
        },
        description:{
            Spanish:'Desarrollo de todo el ambiente backend para administrar todo la apps para alimentar aplicación de noticias e información relevante para las empresas, por medio de Django framework de python, base de datos Postgres, envio de data importante por correo, tareas en fila por medio de Celery y Redis. Todo en infraestructura AWS.',
            English:'Development of the entire backend environment to manage all the apps used to feed news and information relevant to businesses, using the Django Python framework, Postgres database, sending important data via email, and queuing tasks using Celery and Redis. All on AWS infrastructure.'
        }
    },
    {
        icons:<>
            <li><SiPostgresql className="project-icon"/></li>
            <li><SiSelenium className="project-icon"/></li>
            <li><SiPandas className="project-icon"/></li>
            <li><SiDjango className="project-icon"/></li>
            <li><FaAws className="project-icon"/></li>
            <li><FaPython className="project-icon"/></li>
            <li><SiRedis className="project-icon"/></li>
            <li><SiCelery className="project-icon"/></li>
            <li><SiDocker className="project-icon"/></li>
        </>,
        link:null,
        title:{
            Spanish:'App Web Scrapping de Busqueda de Productos',
            English:'Product Search Web Scrapping App',
        },
        img: <img src={search_product} alt="Web Scrapping Productos" className="project-img-show"/>,
        DateInitial:{
            year: 2023,
            month: 1,
            day: 8,
        },
        DateFinal:{
            year:2023,
            month:4,
            day:10
        },
        description:{
            Spanish:'Desarrollo de web scrapping por medio de Selenium para la obtencion de ventas de productos de acuerdo a parametros de busqueda creados en el framework de Django del lenguaje Python, todo almacenado en Postgres y las tareas en fila gracias a Celery y Redis. El desarrollo esta con contenedor Docker e infraestructura de AWS. Adicionalmente tiene Modelo de machine learning para detectar posible estafa en productos.',
            English:'Web scraping development using Selenium to obtain product sales based on search parameters created in the Python framework of Django. All data is stored in Postgres, and tasks are queued using Celery and Redis. The development is based on a Docker container and AWS infrastructure. Additionally, it uses a machine learning model to detect potential product fraud.'
        }
    },
    {
        icons:<>
            <li><SiPostgresql className="project-icon"/></li>
            <li><SiDjango className="project-icon"/></li>
            <li><FaAws className="project-icon"/></li>
            <li><FaPython className="project-icon"/></li>
            <li><SiDocker className="project-icon"/></li>
        </>,
        link:null,
        title:{
            Spanish:'App de lectura de entradas a eventos',
            English:'App for reading event tickets',
        },
        img: <img src={reading_event} alt="reading event" className="project-img-show"/>,
        DateInitial:{
            year: 2023,
            month: 12,
            day: 2,
        },
        DateFinal:{
            year:2023,
            month:12,
            day:10
        },
        description:{
            Spanish:'Desarrollo de aplicacion para entrada de eventos generando QR y enviando las invitaciones a correos registrados para la validación de estas. Todo este desarrollo en framework de Django de Python, base de datos Postgres.',
            English:'Development of an event entry application, generating QR codes and sending invitations to registered email addresses for validation. All development was done using the Python Django framework and a Postgres database.'
        }
    },
    {
        icons:<>
            <li><SiSelenium className="project-icon"/></li>
            <li><SiPandas className="project-icon"/></li>
            <li><FaPython className="project-icon"/></li>
        </>,
        link:null,
        title:{
            Spanish:'App Web Scrapping de Vuelos',
            English:'Flight Scrapping Web App',
        },
        img: <img src={vuelos} alt="Web Scrapping de Vuelos" className="project-img-show"/>,
        DateInitial:{
            year: 2023,
            month: 1,
            day: 8,
        },
        DateFinal:{
            year:2023,
            month:4,
            day:10
        },
        description:{
            Spanish:'Desarrollo de aplicación para obtener precios de vuelos de Colombia a Europa en distintas plataformas de aerolineas para obtener en orden la más economica y almacenarlo en un Excel. Todo esto por medio de Selenium y Python.',
            English:'Application development to retrieve flight prices from Colombia to Europe on various airline platforms, sorting the cheapest flight and storing it in Excel. All this using Selenium and Python.'
        }
    },
    {
        icons:<>
            <li><SiPostgresql className="project-icon"/></li>
            <li><SiDjango className="project-icon"/></li>
            <li><FaAws className="project-icon"/></li>
            <li><FaPython className="project-icon"/></li>
            <li><SiDocker className="project-icon"/></li>
        </>,
        link:null,
        title:{
            Spanish:'Administrador de pantallas de centros comerciales',
            English:'Shopping center display manager',
        },
        img: <img src={shopping_center} alt="Shopping center display manager" className="project-img-show"/>,
        DateInitial:{
            year: 2023,
            month: 1,
            day: 8,
        },
        DateFinal:{
            year:2023,
            month:4,
            day:10
        },
        description:{
            Spanish:'Desarrollo de ambiente administrativo para ingresar videos, fotos, mapas y rutas para pantallas de centro comerciales para ayudar a los usuarios llegar a su sitio. Adicionalmente adquirir las consultas y muestra de publicidad en estas. Por medio de framework Django, base de datos Postgres e infraestructura AWS.',
            English:'Development of an administrative environment for uploading videos, photos, maps, and directions to shopping center screens to help users navigate to the site. Additionally, query acquisition and advertising display are performed using the Django framework, Postgres database, and AWS infrastructure.'
        }
    },
    {
        icons:<>
            <li><SiPostgresql className="project-icon"/></li>
            <li><SiDjango className="project-icon"/></li>
            <li><FaAws className="project-icon"/></li>
            <li><FaPython className="project-icon"/></li>
            <li><SiDocker className="project-icon"/></li>
        </>,
        link:null,
        title:{
            Spanish:'App de encriptar información y conexión a terceras apps',
            English:'App to encrypt information and connection to third-party apps',
        },
        img: <img src={encrypt_app} alt="encrypt app" className="project-img-show"/>,
        DateInitial:{
            year: 2022,
            month: 2,
            day: 2,
        },
        DateFinal:{
            year:2022,
            month:3,
            day:10
        },
        description:{
            Spanish:'Aplicación con datos encriptados en RSA para la comunicación de terceras apps de acuerdo con su llave publica, todo el framework desarrollado en Django del lenguaje Python, base de datos Postgres, en contenedores docker y obtención de IP para validar protección de la información de la consulta.',
            English:'Application with RSA-encrypted data for communication with third-party apps based on your public key. The entire framework is developed in Django, Python, and uses a Postgres database in Docker containers. IP address acquisition is used to validate the protection of query information.'
        }
    },
    {
        icons:<>
            <li><SiPostgresql className="project-icon"/></li>
            <li><SiOpencv className="project-icon"/></li>
            <li><FaAws className="project-icon"/></li>
            <li><FaPython className="project-icon"/></li>
            <li><SiDocker className="project-icon"/></li>
        </>,
        link:null,
        title:{
            Spanish:'App de lectura de identificación Colombiana',
            English:'Colombian ID reading app',
        },
        img: <img src={ID_reading} alt="ID reading" className="project-img-show"/>,
        DateInitial:{
            year: 2022,
            month: 2,
            day: 2,
        },
        DateFinal:{
            year:2022,
            month:3,
            day:10
        },
        description:{
            Spanish:'Desarrollo de aplicación para detectar y reconocer codigo de tarjeta de identificación Colombiana por medio de captura de imagen por medio de OpenCV para reconocimiento de imagenes y suministrar la información sin tener que ingresar toda la información a mano. Todo desarrollado con lenguaje Python, base de datos Postgres y contenedores Docker.',
            English:'Application development to detect and recognize Colombian ID card codes by capturing images using OpenCV for image recognition and providing information without having to enter it manually. All developed using Python, a Postgres database, and Docker containers.'
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
            <li><spam className="project-icon">MQTT</spam></li>
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
            <li><spam className="project-icon">MQTT</spam></li>
            <li><spam className="project-icon">CNC</spam></li>
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
            <li><spam className="project-icon">MQTT</spam></li>
            <li><spam className="project-icon">CNC</spam></li>
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
            <li><spam className="project-icon mt-1">ROS</spam></li>
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