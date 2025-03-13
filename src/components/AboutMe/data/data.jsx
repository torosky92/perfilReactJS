import perfil from './img/perfil.png'

export const AboutMee = {
    Date:{
        year:1992,
        month:1,
        day:30
    },
    Photo:<img src={perfil} alt="perfil" className='photo_perfil'/>,
    interest:{
        Spanish:'Lo referente a tecnología, electrónica y eléctrica, diseño, edición de videos, video juegos, escuchar música e historias, crearme retos de desarrollo, entre otras actividades',
        English:'Regarding technology, electronics and electricity, design, video editing, video games, listening to music and stories, creating development challenges, among other activities',
    },
    Languages:[
        {
            language:{
                Spanish:'Español',
                English:'Spanish'
            },
            level:{ 
                Spanish:'Nativo',
                English:'Native'
            }
        },
        {
            language:{
                Spanish:'Ingles',
                English:'English'
            },
            level:{ 
                Spanish:'B1',
                English:'B1'
            },
        },
    ],
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
    ],
    Description:{
        Spanish:<div class="profile-container"> 
            <p>
                Soy <strong>Ingeniero Mecánico</strong> con especialización en <strong>sistemas técnicos industriales</strong> y una sólida trayectoria de 
                <strong>7 años en desarrollo Backend</strong> con <strong>Python</strong>. Experto en <strong>bases de datos relacionales y no relacionales (SQL y NoSQL)</strong>, 
                con dominio de frameworks como <strong>Flask y Django</strong>.
            </p>

            <hr/>

            <h3>💡 DevOps & Cloud:</h3>
            <ul>
                <li>Experiencia en <strong>Docker</strong> y contenedores.</li>
                <li>Implementación y despliegue en <strong>AWS</strong>.</li>
            </ul>

            <h3>💡 Habilidades Técnicas:</h3>
            <ul>
                <li><strong>IoT, Machine Learning y Deep Learning.</strong></li>
                <li><strong>Electrónica y Automatización Industrial.</strong></li>
                <li><strong>Diseño 3D con SolidWorks e Impresión 3D.</strong></li>
                <li><strong>Fabricación de PCB con fresadora y Grabado CNC.</strong></li>
            </ul>

            <h3>🔹 Soft Skills:</h3>
            <ul>
                <li>✅ Trabajo en equipo y liderazgo.</li>
                <li>✅ Proactividad, innovación y aprendizaje continuo.</li>
                <li>✅ Alta capacidad de adaptación y resolución de problemas.</li>
            </ul>

            <p><strong>📍 Ubicación:</strong> Envigado, Antioquia - Colombia.</p>
            <p><strong>💼 Disponible para:</strong> oportunidades en empresas o proyectos <strong>freelance</strong> a nivel nacional e internacional.</p>

            <h3>🚀 ¡Listo para aportar soluciones innovadoras y eficientes a tu equipo o proyecto!</h3>
        </div>,
        English:<div class="profile-container">
        <p>
            I am a <strong>Mechanical Engineer</strong> specializing in <strong>industrial technical systems</strong> with a solid background of 
            <strong>7 years in Backend Development</strong> using <strong>Python</strong>. Expert in <strong>relational and non-relational databases (SQL & NoSQL)</strong>, 
            with strong command of frameworks like <strong>Flask and Django</strong>.
        </p>
    
        <hr/>
    
        <h3>💡 DevOps & Cloud:</h3>
        <ul>
            <li>Experience with <strong>Docker</strong> and containerization.</li>
            <li>Deployment and implementation on <strong>AWS</strong>.</li>
        </ul>
    
        <h3>💡 Technical Skills:</h3>
        <ul>
            <li><strong>IoT, Machine Learning, and Deep Learning.</strong></li>
            <li><strong>Electronics and Industrial Automation.</strong></li>
            <li><strong>3D Design with SolidWorks & 3D Printing.</strong></li>
            <li><strong>PCB Manufacturing with Milling Machine & CNC Engraving.</strong></li>
        </ul>
    
        <h3>🔹 Soft Skills:</h3>
        <ul>
            <li>✅ Teamwork and leadership.</li>
            <li>✅ Proactivity, innovation, and continuous learning.</li>
            <li>✅ Strong adaptability and problem-solving skills.</li>
        </ul>
    
        <p><strong>📍 Location:</strong> Envigado, Antioquia - Colombia.</p>
        <p><strong>💼 Available for:</strong> opportunities in companies or <strong>freelance</strong> projects at a national and international level.</p>
    
        <h3>🚀 Ready to provide innovative and efficient solutions for your team or project!</h3>
    </div>
    }
}
