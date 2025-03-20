import React, { useRef, useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = (props) => {
    const submenuRef = useRef(null);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("inicio");
    const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú en móviles

    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop - 60,
            behavior: "smooth",
        });
        setMenuOpen(false); // Cerrar menú al hacer clic en una opción
    };

    // 📌 **Detectar la sección activa usando Intersection Observer**
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-50% 0px -50% 0px",
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        Object.values(props.sections).forEach((section) => {
            if (section.current) {
                observer.observe(section.current);
            } else if (typeof section === "object") {
                Object.values(section).forEach((subSection) => {
                    if (subSection.current) observer.observe(subSection.current);
                });
            }
        });

        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 📌 Cerrar submenú al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (submenuRef.current && !submenuRef.current.contains(event.target)) {
                setSubmenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar">
            <button
                onClick={() => scrollToSection(props.sections.inicio)}
                className={`logo ${activeSection === "inicio" ? "active" : ""}`}
            >
                DAVID TORO
            </button>

            {/* Botón de hamburguesa */}
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? "✖" : "☰"}
            </button>

            {/* Menú principal */}
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li>
                    <button
                        onClick={() => scrollToSection(props.sections.proyectos)}
                        className={activeSection === "proyectos" ? "active" : ""}
                    >
                        {props.translations[props.language]["proyectos"]}
                    </button>
                </li>

                {/* 🔹 Submenú "Acerca de mí" */}
                <li className="submenu" ref={submenuRef}>
                    <button
                        onClick={() => setSubmenuOpen(!submenuOpen)}
                        className={["acercaDeMi", "habilidades", "experiencia", "certificados"].includes(activeSection) ? "active" : ""}
                    >
                        {props.translations[props.language]["acerca_de_mi"]}
                    </button>

                    {submenuOpen && (
                        <ul className="submenu-content">
                            <li>
                                <button
                                    onClick={() => scrollToSection(props.sections.acercaDeMi.acercaDeMi)}
                                    className={activeSection === "acercaDeMi" ? "active" : ""}
                                >
                                    {props.translations[props.language]["acerca_de_mi"]}
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection(props.sections.acercaDeMi.experiencia)}
                                    className={activeSection === "experiencia" ? "active" : ""}
                                >
                                    {props.translations[props.language]["experiencia"]}
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection(props.sections.acercaDeMi.habilidades)}
                                    className={activeSection === "habilidades" ? "active" : ""}
                                >
                                    {props.translations[props.language]["habilidades"]}
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection(props.sections.acercaDeMi.certificados)}
                                    className={activeSection === "certificados" ? "active" : ""}
                                >
                                    {props.translations[props.language]["certificados"]}
                                </button>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <button
                        onClick={() => scrollToSection(props.sections.contacto)}
                        className={activeSection === "contacto" ? "active" : ""}
                    >
                        {props.translations[props.language]["contacto"]}
                    </button>
                </li>
                <li>
                    <button onClick={props.toggleLanguage}>
                        {props.language === "es" ? "Idiomas" : "Languages"} - {props.language === "es" ? "EN" : "ES"}
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
