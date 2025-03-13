import { SiRedis, SiMysql, SiArduino, SiMongodb, SiLinux, SiDjango, SiFlask, SiOpencv, SiScikitlearn, SiSwagger, SiKeras, SiPostgresql, SiOpenai, SiPostman, SiQgis, SiTermius } from "react-icons/si"
import { FaReact, FaCss3, FaHtml5, FaPython, FaJs, FaDocker, FaAws, FaGithub, FaGitlab} from "react-icons/fa"

import eagle from '../../Skills/data/img/eagle.ico'
import proteus from '../../Skills/data/img/proteus.png'
import SolidWorks from '../../Skills/data/img/solidworks.png'
import perfil from './img/perfil.png'

export const AboutMe = {
    Date:{
        year:1992,
        month:1,
        day:30
    },
    Photo:<img src={perfil} alt=""/>,
    interest:{
        Spanish:'Lo referente a tecnología, electrónica y eléctrica, diseño, edición de videos, video juegos, escuchar música e historias, crearme retos de desarrollo, entre otras actividades',
        English:'Regarding technology, electronics and electricity, design, video editing, video games, listening to music and stories, creating development challenges, among other activities',
    },
    worksArea:[
        {
            Spanish:'Desarrollador Backend',
            English:'Backend Developer'
        },
        {
            Spanish:'DevOps',
            English:'DevOps'
        },
        {
            Spanish:'Automatización en IoT',
            English:'Automation in IoT'
        },
        {
            Spanish:'Innovación e Investigación',
            English:'Innovation and Research'
        },
        {
            Spanish:'Electronica y Electrica con las normativas RETIE',
            English:'Electronics and Electricity with RETIE regulations'
        },
        {
            Spanish:'Capacitación y Dosencia',
            English:'Training and Dossence'
        },
        {
            Spanish:'Manejo de impresoras 3D, Fresadora y Gravador laser CNC',
            English:'Handling of 3D printers, CNC milling machine and laser engraver'
        },
    ]
}

export const ExperienceAndEducation = {
    Education:[
            {
                Title:{
                    Spanish:'Ingeniero Mecánico',
                    English:'Mechanical Engineer',
                },
                Campus:{
                    Spanish:'Universidad EAFIT',
                    English:'University EAFIT',
                },
                Places: 'Medellín, Antioquia',
                DateInitial:{
                    year:2013,
                    month:1,
                    day:14
                },
                DateFinal:{
                    year:2019,
                    month:6,
                    day:7
                },
            },
            {
                Title:{
                    Spanish:'Especialización en diseño de sistemas tecnicos integrados',
                    English:'Specialization in the design of integrated technical systems'
                },
                Campus:{
                    Spanish:'Universidad EAFIT',
                    English:'University EAFIT',
                },
                Places: 'Medellín, Antioquia',
                DateInitial:{
                    year:2019,
                    month:7,
                    day:9
                },
                DateFinal:{
                    year:2019,
                    month:11,
                    day:19
                },
            }
    ],
    Experience:[
        {
            Role:{
                Spanish:'Desarrollador Python',
                English:'Python Developer',
            },
            Description:{
                Spanish: <>
                    Desarrollador de diferentes aplicaciones y soporte tecnico en el area de Python para diferentes tipos de clientes
                    <ul>
                        <li> Optimizar y mejorar desarrollo de un código de un cliente con el framework Flask, coordinando con el equipo tanto Front, QA y Cliente para encontrar la mejor solución y añadir nuevas herramientas al sistema. (Se usaron protocolos de comunicación JSON, API REST, base de datos Postgres, BigQuery, no relacionales como MongoDB y Redis, se dockerizo y control del versionamiento con gitlab).</li>
                        <li> Desarrollo de apps de tableros de información de centros comerciales con Django (Python), con protocolos de comunicación JSON y API REST. Con base de datos SQL. Montaje del servicio en AWS EC2 con USWGI y NGINX, control de versión con Gitlab y github.</li>
                        <li> Actualizar servicios de Python, ejemplo pasar de Python 3.5 a 3.10 actualizando sus respectivas librerias.</li>
                        <li> Desarrollo de captar por medio de imagenes el código de barras de las cedulas colombianas para leer todos los datos necesarios con Python y OpenCV, con API REST, control de versión con Gitlab y github.</li>
                        <li> Desarrollo de app con Django para cursos online de salud, con celery, base de datos postgres y no relacionados Redis servidor AWS EC2 con USWGI y NGINX, control de versión con Gitlab y github.</li>
                        <li> Desarrollo de app con Django para un banco, con su respectiva encriptación y codificación RSA, base de datos postgres y no relacionados Redis servidor AWS EC2 con USWGI y NGINX, control de versión con Gitlab y github.</li>
                        <li> Desarrollo de web scrapping para la captura de datos relevantes a la necesidad del cliente por medio de Django y Selenium. Además, se ingresó el análisis de datos por medio de machine learning utilizando el concepto de Árbol de decisiones.</li>
                        <li> Desarrollo de app con Django para noticias a empresas, con celery, base de datos postgres y no relacionados Redis servidor AWS EC2 con USWGI y NGINX, control de versión con Gitlab y github.</li>
                        <li> Desarrollo de app con Django para loterias, base de datos postgres y no relacionados Redis servidor AWS EC2 con USWGI y NGINX, control de versión con Gitlab y github.</li>
                        <li> Desarrollo de app con Django para chatbot con audio y texto por medio de OpenAI y Elevenlabs, con su respectiva encriptación y codificación RSA, base de datos postgres y no relacionados Redis servidor AWS EC2 con USWGI y NGINX, control de versión con Gitlab y github.</li>
                        <li> Desarrollo de app con Django para transcribir videollamadas y transformarla en formato chat para ingresar a OpenAI y generar informes de mercadeo, con su respectiva encriptación y codificación RSA, base de datos postgres y no relacionados Redis servidor AWS EC2 con USWGI y NGINX, control de versión con Gitlab y github.</li>
                        <li> Desarrollo de modelo predictivo y validador de la información suministrada para generar posibles coordenadas, base de datos postgres y no relacionados Redis servidor AWS EC2 con USWGI y NGINX, control de versión con Gitlab y github.</li>
                        <li> Desarrollo de nuevo template de la empresa para Django.</li>
                        <li> Comunicaciones entre APIS como Stripe, BC diplomas, APIFY, entre otras.</li>
                    </ul>
                </>,
                English:<>
                    Developer of various applications and technical support in the Python area for different types of clients.
                    <ul>
                        <li>Optimized and improved a client's code using the Flask framework, coordinating with the Frontend, QA, and Client teams to find the best solution and add new tools to the system. (Used JSON communication protocols, REST API, PostgreSQL, BigQuery, non-relational databases like MongoDB and Redis, containerized with Docker, and version control with GitLab).</li> 
                        <li>Developed dashboard applications for shopping centers using Django (Python), with JSON communication protocols and REST API, and SQL databases. Deployed the service on AWS EC2 with uWSGI and NGINX, with version control using GitLab and GitHub.</li>
                        <li>Updated Python services, such as migrating from Python 3.5 to 3.10, along with updating the respective libraries.</li>
                        <li>Developed an image-processing application to extract barcode data from Colombian ID cards, using Python and OpenCV, with a REST API and version control managed through GitLab and GitHub.</li>
                        <li>Developed an online health course application using Django, Celery, PostgreSQL, and Redis. The service was hosted on AWS EC2 with uWSGI and NGINX, with version control using GitLab and GitHub.</li>
                        <li>Developed a banking application using Django, including encryption and RSA encoding, PostgreSQL, and Redis. The service was hosted on AWS EC2 with uWSGI and NGINX, with version control using GitLab and GitHub.</li>
                        <li>Developed a web scraping solution for capturing relevant data based on client needs, using Django and Selenium. Integrated data analysis using machine learning, specifically Decision Tree models.</li>
                        <li>Developed a corporate news application using Django, Celery, PostgreSQL, and Redis. The service was hosted on AWS EC2 with uWSGI and NGINX, with version control using GitLab and GitHub.</li>
                        <li>Developed a lottery application using Django, PostgreSQL, and Redis. The service was hosted on AWS EC2 with uWSGI and NGINX, with version control using GitLab and GitHub.</li>
                        <li>Developed a chatbot application using Django, integrating both audio and text functionalities through OpenAI and ElevenLabs. Implemented encryption and RSA encoding, PostgreSQL, and Redis. The service was hosted on AWS EC2 with uWSGI and NGINX, with version control using GitLab and GitHub.</li>
                        <li>Developed an application using Django to transcribe video calls and convert them into a chat format for OpenAI to generate marketing reports. Included encryption and RSA encoding, PostgreSQL, and Redis. The service was hosted on AWS EC2 with uWSGI and NGINX, with version control using GitLab and GitHub.</li>
                        <li>Developed a predictive model and information validator to generate possible geographic coordinates, using PostgreSQL and Redis. The service was hosted on AWS EC2 with uWSGI and NGINX, with version control using GitLab and GitHub.</li>
                        <li>Developed a new company template for Django.</li>
                        <li>Integrated communication between various APIs such as Stripe, BC Diplomas, APIFY, among others.</li>
                    </ul>
                </>
            },
            Company:'Serempre',
            Places: 'Bogota, Cundinamarca',
            icons:<>
                <li><FaPython/></li>
                <li><SiFlask/></li>
                <li><SiDjango/></li>
                <li><SiPostgresql/></li>
                <li><SiMysql/></li>
                <li><SiMongodb/></li>
                <li><FaAws/></li>
                <li><FaGitlab/></li>
                <li><SiOpencv/></li>
                <li><SiRedis/></li>
                <li><FaDocker/></li>
                <li><SiPostman/></li>
                <li><FaCss3/></li>
                <li><FaHtml5/></li>
                <li><SiScikitlearn/></li>
                <li><SiSwagger/></li>
                <li><SiKeras/></li>
                <li><SiOpenai/></li>
                <li><SiQgis/></li>
                <li><SiTermius/></li>
            </>,
            DateInitial:{
                year:2021,
                month:12,
                day:20
            },
            DateFinal:{
                year:0,
                month:0,
                day:0
            },
        },
        {
            Role:{
                Spanish:'Ingeniero de Sistemas, Diseño e Innovación',
                English:'System Engineer, Design and Innovation',
            },
            Description:{
                Spanish:<>
                    Encargado de mejorar y analizar la producción de la empresa, desarrollando un software para la obtención de las horas hombre por turno y hora del día con su respectivo consumo de maquina y materia prima, en cada una de las areas de la empresa (Creador del Sistema Mares).
                    <ul>
                        <li> Se ejecuto servidores AWS en EC2</li>
                        <li> Se ejecuto base de datos AWS en RDS</li>
                        <li> Se ejecuto seguridad AWS en IAM</li>
                        <li> Se ejecuto envio de correos notificando cada proceso indicando arranques, paros y finalización para mayor control</li>
                        <li> Capacitación de los operarios para el ingreso de la información</li>
                        <li> La primera fase se realizo con Flask para comunicar entre dispositivos y servidor</li>
                        <li> La segunda fase se realizo con Django para el administrador y control de todo el ambiente</li>
                        <li> Se diseño y construyo dispositivo que capta los datos de las basculas</li>
                        <li> Se diseño y genero ideas para la conexión de las maquinas de todas las areas para tener mayor control de datos</li>
                        <li> El desarrollo de frontend con React Js</li>
                        <li> Desarrollo de horario laboral de acuerdo con las normativas de Colombia</li>
                        <li> Lector de tarjetas RFID con el sistema</li>
                    </ul>
                </>,
                English:<>
                    Responsible for improving and analyzing the company's production by developing software to obtain man-hours per shift and hour of the day, along with corresponding machine and raw material consumption, in each area of the company (Creator of the Mares System).
                    <ul>
                        <li>Deployed AWS servers on EC2.</li>
                        <li>Deployed AWS databases on RDS.</li>
                        <li>Implemented AWS security using IAM.</li>
                        <li>Set up email notifications for each process, indicating start, stoppages, and completion for better control.</li>
                        <li>Trained operators on how to enter information into the system.</li>
                        <li>The first phase was developed using Flask to facilitate communication between devices and the server.</li>
                        <li>The second phase was developed using Django for administration and overall system control.</li>
                        <li>Designed and built a device to capture data from industrial scales.</li>
                        <li>Designed and proposed ideas for connecting machines across all areas to improve data control.</li>
                        <li>Developed the frontend using React.js.</li>
                        <li>Implemented a work schedule system in compliance with Colombian labor regulations.</li>
                        <li>Integrated an RFID card reader with the system.</li>
                    </ul>
                </>
            },
            icons:<>
                <li><FaPython/></li>
                <li><SiFlask/></li>
                <li><SiPostgresql/></li>
                <li><SiMysql/></li>
                <li><FaAws/></li>
                <li><FaGithub/></li>
                <li><FaReact/></li>
                <li><FaJs/></li>
                <li><FaDocker/></li>
                <li><SiPostman/></li>
                <li><FaCss3/></li>
                <li><FaHtml5/></li>
                <li><SiArduino/></li>
                <li><SiLinux/></li>
            </>,
            Company:'REDEPESCA SAS',
            Places: 'Medellín, Antioquia',
            DateInitial:{
                year:2020,
                month:10,
                day:16
            },
            DateFinal:{
                year:2021,
                month:12,
                day:19
            },
        },
        {
            Role:{
                Spanish:'Diseño e Innovación Industrial',
                English:'Industrial Design and Innovation',
            },
            Description:{
                Spanish: <>
                    Asesorías y ejecutor de proyectos de automatización en las áreas de eléctrica, electrónica, programación y mecánica. Empresas en las que se han ejecutado proyectos:
                    <ul>
                        <li> Diseño en planos eléctricos, mecánicos y programación para dispensador de chocolate.</li>
                        <li> Planos eléctricos, mecánicos y programación de maquinas dispensador e investigación para su desarrollo.</li>
                        <li> Desarrollo y transmitir conocimiento al equipo de desarrollo de la empreasa para desarrollar un control de un switche automatizado para sus servidores.</li>
                        <li> Desarrollo y transmitir conocimientos al equipo para crear comunicación entre dispositivos a la red de ellos.</li>
                        <li> Automatización de de datos de basculas para adquirir el pesaje de su materia prima al servidor de ellos.</li>
                        <li> Desarrollo de todo el sistema electrico, mecanico y software a hidroponia</li>
                    </ul>
                </>,
                English:<>
                    Consulting and executor of automation projects in the areas of electrical, electronics, programming and mechanics. Companies in which projects have been executed:
                    <ul>
                        <li> Design of electrical, mechanical and programming plans for a chocolate dispenser.</li>
                        <li> Electrical and mechanical plans and programming of dispenser machines and research for their development.</li>
                        <li> Development and transmit knowledge to the company's development team to develop an automated switch control for its servers.</li>
                        <li> Development and transmit knowledge to the team to create communication between devices and their network.</li>
                        <li> Scale data automation to acquire the weighing of your raw material from their server.</li>
                        <li> Development of the entire electrical, mechanical and software system for hydroponics.</li>
                    </ul>
                </>
            },
            Company:'Freelancer',
            Places: 'Medellín, Antioquia',
            icons:<>
                <li><FaPython/></li>
                <li><SiFlask/></li>
                <li>MQTT</li>
                <li><img src={eagle} alt=""/></li>
                <li><SiArduino/></li>
                <li><img src={SolidWorks} alt=""/></li>
            </>,
            DateInitial:{
                year:2013,
                month:1,
                day:10
            },
            DateFinal:{
                year:2020,
                month:10,
                day:16
            },
        },
        {
            Role:{
                Spanish:'Ayudante de semillero de investigación ARES',
                English:'ARES Research Seed Assistant',
            },
            Description:{
                Spanish:'Soporte y apoyo en diseños eléctricos, electrónicos y de programación para el semillero de investigación, dictando cursos básicos de electrónica y programación para mejorar las competencias de los compañeros.',
                English:'Support and support in electrical, electronic and programming designs for the research hotbed, teaching basic electronics and programming courses to improve the skills of colleagues.',
            },
            Company:'EAFIT',
            Places: 'Medellín, Antioquia',
            icons:<>
                <li><FaPython/></li>
                <li><img src={SolidWorks} alt=""/></li>
                <li><img src={proteus} alt=""/></li>
                <li><img src={eagle} alt=""/></li>
                <li><SiArduino/></li>
            </>,
            DateInitial:{
                year:2019,
                month:7,
                day:10
            },
            DateFinal:{
                year:2019,
                month:11,
                day:16
            },
        },
        {
            Role:{
                Spanish:'Ayudante de semillero de investigación SISE',
                English:'SISE Research Seed Assistant',
            },
            Description:{
                Spanish:'Soporte y apoyo en diseños mecánicos y eléctricos en el semillero de investigación, ganador a mejor proyecto de Gemi 2017. Concursante del concurso de robótica internacional RoboRave en el 2017 en Medellín representando a EAFIT y al grupo de investigación.',
                English:'Support and support in mechanical and electrical designs in the research hotbed, winner of the best project of Gemi 2017. Contestant of the international robotics contest RoboRave in 2017 in Medellín representing EAFIT and the research group.',
            },
            Company:'EAFIT',
            Places: 'Medellín, Antioquia',
            icons:<>
            <li><img src={SolidWorks} alt=""/></li>
            <li><img src={proteus} alt=""/></li>
            <li><img src={eagle} alt=""/></li>
            <li><SiArduino/></li>
        </>,
            DateInitial:{
                year:2017,
                month:7,
                day:15
            },
            DateFinal:{
                year:2018,
                month:11,
                day:12
            },
        },
        {
            Role:{
                Spanish:'Practicante de Ingeniería',
                English:'Engineering Intern',
            },
            Description:{
                Spanish:'Practicante de la empresa en la ciudad de Pereira, especializada en tableros eléctricos y automatizaciones, desarrollando por medio de Excel y Visual Basic un software para los cálculos de cableado, amperaje, tubería, bandeja, entre otros, para cumplir con la norma NTC 2050. Implanté la estandarización de la programación en la empresa por medio de la teoría de las máquinas de estado finito (MEF).',
                English:'Intern of the company in the city of Pereira, specialized in electrical panels and automation, developing through Excel and Visual Basic a software for calculating wiring, amperage, pipe, tray, among others, to comply with the NTC 2050 standard. I implemented the standardization of programming in the company through the theory of finite state machines (FEM).',
            },
            Company:'GL INGENIEROS',
            Places: 'Pereira, Antioquia',
            icons:<>
                <li><img src={SolidWorks} alt=""/></li>
                <li><img src={proteus} alt=""/></li>
            </>,
            DateInitial:{
                year:2016,
                month:6,
                day:13
            },
            DateFinal:{
                year:2017,
                month:1,
                day:8
            },
        },
        {
            Role:{
                Spanish:'Ayudante de clase Proyecto 7',
                English:'Class Aide Project 7',
            },
            Description:{
                Spanish:'Soporte y apoyo en la materia Proyecto 7 (Movilidad eléctrica) de la carrera de Ingeniería de diseño de producto en el área de programación y conexión eléctrica.',
                English:'Support and support in the subject Project 7 (Electric mobility) of the Product Design Engineering career in the area of ​​programming and electrical connection.',
            },
            Company:'EAFIT',
            Places: 'Medellín, Antioquia',
            icons:<>
                <li><img src={SolidWorks} alt=""/></li>
                <li><img src={proteus} alt=""/></li>
                <li><img src={eagle} alt=""/></li>
                <li><SiArduino/></li>
            </>,
            DateInitial:{
                year:2016,
                month:1,
                day:13
            },
            DateFinal:{
                year:2016,
                month:5,
                day:16
            },
        },
        {
            Role:{
                Spanish:'Ayudante de clase Electrónica Básica',
                English:'Class Aide Basic Electronic',
            },
            Description:{
                Spanish:'Soporte y apoyo en Electrónica básica a los estudiantes y profesores de esta materia. Desarrollo del libro sobre la programación y conexión de pantalla táctil con arduino.',
                English:'Support and support in basic electronics to students and teachers of this subject. Development of the book on programming and connection of touch screen with arduino.',
            },
            Company:'EAFIT',
            Places: 'Medellín, Antioquia',
            icons:<>
                <li><FaPython/></li>
                <li><img src={SolidWorks} alt=""/></li>
                <li><img src={proteus} alt=""/></li>
                <li><img src={eagle} alt=""/></li>
                <li><SiArduino/></li>
            </>,
            DateInitial:{
                year:2014,
                month:1,
                day:15
            },
            DateFinal:{
                year:2016,
                month:5,
                day:16
            },
        }
    ]
}
