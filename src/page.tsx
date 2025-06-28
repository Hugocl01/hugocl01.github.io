import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, ArrowUpRight, Menu, X } from "lucide-react"
import Hugo from "./assets/Hugo.png"
import Foko from "./assets/Foko.png"
import ProyectoPokemon from "./assets/Proyecto-Pokemon.png"

const sections = [
    { id: "home", label: "01", title: "Inicio" },
    { id: "about", label: "02", title: "Acerca" },
    { id: "experience", label: "03", title: "Experiencia" },
    { id: "projects", label: "04", title: "Proyectos" },
    { id: "skills", label: "05", title: "Skills" },
    { id: "contact", label: "06", title: "Contacto" },
]

const links = [
    {
        id: "github",
        url: "https://github.com/Hugocl01",
        icon: <Github className="w-5 h-5" />,
    },
    {
        id: "linkedin",
        url: "https://www.linkedin.com/in/hugo-cay%C3%B3n-laso-1a8248273/",
        icon: <Linkedin className="w-5 h-5" />,
    },
]

const projects = [
    {
        title: "Foko",
        category: "Full Stack Development",
        description: "Aplicación web diseñada para fotógrafos y entusiastas de la fotografía.",
        image: Foko,
        tech: ["React", "TypeScript", "JavaScript", "Inertia.js", "Laravel", "PHP", "MySQL", "Tailwind"],
        year: "2025",
        codeUrl: "https://github.com/Hugocl01/Foko",
    },
    {
        title: "Proyecto Pokémon",
        category: "Frontend Development",
        description: "Sitio web para agencia creativa con animaciones avanzadas y experiencia de usuario inmersiva.",
        image: ProyectoPokemon,
        tech: ["React", "JavaScript", "CSS"],
        year: "2025",
        demoUrl: "https://dwec-pokemon.netlify.app/",
        codeUrl: "https://github.com/Hugocl01/Proyecto-Pokemon",
    },
]

const skills = [
    { name: "React", level: 80 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 75 },
    { name: "Laravel", level: 80 },
    { name: "PHP", level: 90 },
    { name: "MySQL", level: 80 },
    { name: "Tailwind CSS", level: 75 },
    { name: "BootStrap", level: 75 },
]

const jobs = [
    {
        company: "Netkia",
        position: "Desarrollador Web Full Stack",
        period: "2025 - Presente",
        website: "https://netkia.es",
        description: "Desarrollo de sitios web y aplicaciones personalizadas para diversos clientes.",
        achievements: [
            "Participación en el desarrollo de más de 4 proyectos web exitosos",
            "Implementación de gestión de usuario en aplicación encargada de administrar el acceso a través de IPs",
        ],
        technologies: ["CakePHP", "PHP", "MySQL", "React", "TypeScript", "JavaScript", "Tailwind CSS", "CSS", "Git"],
    },
    {
        company: "IES Miguel Herrero",
        position: "Estudiante de Desarrollo Web",
        period: "2021 - 2025",
        website: "https://www.educantabria.es/web/ies-miguel-herrero-pereda",
        description:
            "Formación intensiva en desarrollo web full stack, completando múltiples proyectos prácticos y colaborativos.",
        achievements: [
            "Desarrollo de aplicaciones con frameworks y librerias",
            "Creación de API REST con autenticación",
            "Implementación de bases de datos relacionales",
            "Trabajo en equipo usando metodologías ágiles",
        ],
        technologies: ["React", "JavaScript", "Laravel", "PHP", "HTML", "CSS", "Bootstrap", "Java", "Git"],
    },
]

const categories = [
    {
        category: "Frontend",
        skills: ["React", "JavaScript", "TypeScript"],
    },
    {
        category: "Styling",
        skills: ["Tailwind", "Bootstrap", "CSS"],
    },
    {
        category: "Backend",
        skills: ["Laravel", "PHP", "MySQL", "REST APIs"],
    },
    {
        category: "Tools",
        skills: ["Git", "Vite", "VSCode", "Postman"],
    },
]

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState(0)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll()
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2

            sections.forEach((section, index) => {
                const element = document.getElementById(section.id)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(index)
                    }
                }
            })
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setIsMenuOpen(false)
    }

    return (
        <div ref={containerRef} className="bg-white text-black overflow-x-hidden">
            {/* Custom Cursor */}
            <motion.div
                className="fixed w-4 h-4 bg-black rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />

            {/* Header Navigation */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200"
            >
                <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-4 lg:py-6">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <motion.div
                            whileHover={{ y: -2 }}
                            className="text-xl lg:text-2xl font-bold cursor-pointer"
                            onClick={() => scrollToSection("home")}
                        >
                            Hugo
                        </motion.div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-12">
                            {sections.map((section, index) => (
                                <motion.button
                                    key={section.id}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`flex items-center space-x-2 transition-colors group ${activeSection === index ? "text-black" : "text-gray-600 hover:text-black"
                                        }`}
                                >
                                    <span className="text-sm font-mono">{section.label}</span>
                                    <span className="text-sm font-medium">{section.title}</span>
                                    <motion.div
                                        className={`w-2 h-2 rounded-full transition-colors ${activeSection === index ? "bg-black" : "bg-transparent group-hover:bg-gray-400"
                                            }`}
                                    />
                                </motion.button>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </Button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <motion.nav
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden mt-6 pb-6 border-t border-gray-200 pt-6"
                        >
                            <div className="space-y-4">
                                {sections.map((section, index) => (
                                    <motion.button
                                        key={section.id}
                                        whileHover={{ x: 10 }}
                                        onClick={() => scrollToSection(section.id)}
                                        className={`flex items-center space-x-3 w-full text-left transition-colors ${activeSection === index ? "text-black font-semibold" : "text-gray-600 hover:text-black"
                                            }`}
                                    >
                                        <span className="text-sm font-mono">{section.label}</span>
                                        <span className="text-sm">{section.title}</span>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.nav>
                    )}
                </div>
            </motion.header>

            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-50"
                style={{ scaleX: scrollYProgress }}
            />

            {/* Main Content */}
            <div>
                {/* Hero Section - FIXED FOR MOBILE */}
                <section
                    id="home"
                    className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20 pb-8 lg:pt-0 lg:pb-0"
                >
                    <motion.div style={{ y: backgroundY }} className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
                    <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="space-y-6 lg:space-y-8 relative order-2 lg:order-1"
                            >
                                <div className="space-y-3 lg:space-y-4">
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="text-xs sm:text-sm font-mono text-gray-600 tracking-wider uppercase"
                                    >
                                        Desarrollador Web Full Stack
                                    </motion.p>
                                    <motion.h1
                                        style={{ y: textY }}
                                        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-none"
                                    >
                                        CREATIVE
                                        <br />
                                        <span className="text-outline">DEVELOPER</span>
                                    </motion.h1>
                                </div>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="text-base lg:text-lg text-gray-600 max-w-md leading-relaxed"
                                >
                                    Especializado en crear experiencias digitales únicas que combinan diseño innovador con código limpio y
                                    funcional.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.9 }}
                                    className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6"
                                >
                                    <Button
                                        onClick={() => scrollToSection("projects")}
                                        className="bg-black text-white hover:bg-gray-800 px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg group w-full sm:w-auto"
                                    >
                                        Ver Proyectos
                                        <ArrowUpRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </Button>

                                    <div className="flex space-x-4 justify-center sm:justify-start w-full sm:w-auto">
                                        {links.map((link) => (
                                            <motion.a
                                                key={link.id}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="w-10 h-10 lg:w-12 lg:h-12 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                                            >
                                                {link.icon}
                                            </motion.a>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="relative space-y-8 order-1 lg:order-2 mb-8 lg:mb-0"
                            >
                                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                        className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full"
                                    />
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                        className="absolute inset-4 border border-gray-200 rounded-full"
                                    />
                                    <div className="absolute inset-8 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                        <img src={Hugo} alt="Profile" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
                    >
                        <div className="w-px h-12 lg:h-16 bg-black" />
                    </motion.div>
                </section>

                {/* About Section */}
                <section id="about" className="min-h-screen py-16 lg:py-20 bg-black text-white">
                    <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                        >
                            <div className="space-y-6 lg:space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <p className="text-sm font-mono text-gray-400 tracking-wider uppercase mb-4">02 — Acerca de mí</p>
                                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 lg:mb-8">
                                        Pasión por el
                                        <br />
                                        <span className="text-gray-400">Código Limpio</span>
                                    </h2>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="space-y-4 lg:space-y-6 text-base lg:text-lg text-gray-300 leading-relaxed"
                                >
                                    <p>
                                        Recién titulado en desarrollo de aplicaciones web, me especializo en crear sitios y aplicaciones que
                                        combinan funcionalidad y una experiencia visual atractiva.
                                    </p>
                                    <p>
                                        Mi enfoque está en aplicar buenas prácticas desde el inicio de mi carrera, priorizando código
                                        limpio, mantenible y accesible.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    viewport={{ once: true }}
                                    className="grid grid-cols-2 gap-6 lg:gap-8"
                                >
                                    <div>
                                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">5+</h3>
                                        <p className="text-gray-400 text-sm lg:text-base">Proyectos Completados</p>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">3+</h3>
                                        <p className="text-gray-400 text-sm lg:text-base">Meses de Experiencia</p>
                                    </div>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8">
                                    <h3 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6">Tecnologías Principales</h3>
                                    <div className="space-y-3 lg:space-y-4">
                                        {skills.map((skill, index) => (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, x: -50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 * index }}
                                                viewport={{ once: true }}
                                                className="space-y-2"
                                            >
                                                <div className="flex justify-between">
                                                    <span className="text-sm font-medium">{skill.name}</span>
                                                    <span className="text-sm text-gray-400">{skill.level}%</span>
                                                </div>
                                                <div className="w-full bg-white/10 rounded-full h-2">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.level}%` }}
                                                        transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                                                        viewport={{ once: true }}
                                                        className="bg-white h-2 rounded-full"
                                                    />
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-16 lg:py-20 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="mb-12 lg:mb-16"
                        >
                            <p className="text-sm font-mono text-gray-600 tracking-wider uppercase mb-4">
                                03 — Experiencia Profesional
                            </p>
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
                                Trayectoria
                                <br />
                                <span className="text-gray-400">Profesional</span>
                            </h2>
                        </motion.div>

                        <div className="space-y-8 lg:space-y-12">
                            {jobs.map((job, index) => (
                                <motion.div
                                    key={job.company}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                                        <div className="lg:col-span-1">
                                            <div className="space-y-4">
                                                <div>
                                                    <h3 className="text-lg lg:text-xl font-bold text-black">{job.company}</h3>
                                                    <p className="text-base lg:text-lg text-gray-700 font-medium">{job.position}</p>
                                                    <p className="text-sm font-mono text-gray-500 mt-2">{job.period}</p>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {job.technologies.map((tech) => (
                                                        <Badge key={tech} variant="outline" className="border-gray-300 text-gray-700 text-xs">
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                                {job.website && job.website !== "#" && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: index * 0.2 + 0.5 }}
                                                        viewport={{ once: true }}
                                                    >
                                                        <Button
                                                            asChild
                                                            variant="outline"
                                                            size="sm"
                                                            className="border-black text-black hover:bg-black hover:text-white transition-colors bg-transparent"
                                                        >
                                                            <motion.a
                                                                href={job.website}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                whileHover={{ scale: 1.05 }}
                                                                whileTap={{ scale: 0.95 }}
                                                                className="flex items-center space-x-2"
                                                            >
                                                                <ExternalLink className="w-4 h-4" />
                                                                <span>Visitar {job.company}</span>
                                                            </motion.a>
                                                        </Button>
                                                    </motion.div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="lg:col-span-2 space-y-4 lg:space-y-6">
                                            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{job.description}</p>
                                            <div>
                                                <h4 className="font-semibold text-black mb-3">Logros Principales:</h4>
                                                <ul className="space-y-2">
                                                    {job.achievements.map((achievement, achievementIndex) => (
                                                        <motion.li
                                                            key={achievementIndex}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: index * 0.2 + achievementIndex * 0.1 }}
                                                            viewport={{ once: true }}
                                                            className="flex items-start space-x-3"
                                                        >
                                                            <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                                                            <span className="text-gray-700 text-sm lg:text-base">{achievement}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-16 lg:py-20">
                    <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="mb-12 lg:mb-16"
                        >
                            <p className="text-sm font-mono text-gray-600 tracking-wider uppercase mb-4">
                                04 — Proyectos Seleccionados
                            </p>
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
                                Trabajo
                                <br />
                                <span className="text-gray-400">Destacado</span>
                            </h2>
                        </motion.div>

                        <div className="space-y-16 lg:space-y-32">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                                >
                                    <motion.div
                                        className={`space-y-4 lg:space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                                        whileHover={{ x: index % 2 === 1 ? -10 : 10 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="space-y-3 lg:space-y-4">
                                            <div className="flex items-center space-x-4">
                                                <span className="text-sm font-mono text-gray-600">{project.year}</span>
                                                <div className="w-8 h-px bg-gray-300" />
                                                <span className="text-sm text-gray-600">{project.category}</span>
                                            </div>
                                            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold">{project.title}</h3>
                                        </div>

                                        <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-md">{project.description}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech) => (
                                                <Badge key={tech} variant="outline" className="border-black text-black text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                                            {project.demoUrl && (
                                                <Button
                                                    asChild
                                                    variant="outline"
                                                    className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                                                >
                                                    <a
                                                        href={project.demoUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-2"
                                                    >
                                                        <ExternalLink className="w-4 h-4" />
                                                        <span>Ver Proyecto</span>
                                                    </a>
                                                </Button>
                                            )}
                                            {project.codeUrl && (
                                                <Button asChild variant="ghost" className="text-black hover:bg-gray-100">
                                                    <a
                                                        href={project.codeUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-2"
                                                    >
                                                        <Github className="w-4 h-4" />
                                                        <span>Código</span>
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className={`relative group ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                                            <img
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-16 lg:py-20 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="text-center mb-12 lg:mb-16"
                        >
                            <p className="text-sm font-mono text-gray-600 tracking-wider uppercase mb-4">05 — Skills</p>
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold">Habilidades Técnicas</h2>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {categories.map((category, index) => (
                                <motion.div
                                    key={category.category}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
                                >
                                    <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6 text-center">{category.category}</h3>
                                    <div className="space-y-3">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skill}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                                                viewport={{ once: true }}
                                                className="flex items-center space-x-3"
                                            >
                                                <div className="w-2 h-2 bg-black rounded-full" />
                                                <span className="text-gray-700 text-sm lg:text-base">{skill}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-16 lg:py-20 bg-black text-white">
                    <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="text-center mb-12 lg:mb-16"
                        >
                            <p className="text-sm font-mono text-gray-400 tracking-wider uppercase mb-4">06 — Contacto</p>
                            <h2 className="text-3xl lg:text-4xl xl:text-6xl font-bold mb-6 lg:mb-8">
                                ¿Tienes un proyecto
                                <br />
                                <span className="text-gray-400">en mente?</span>
                            </h2>
                            <p className="text-base lg:text-xl text-gray-300 max-w-2xl mx-auto">
                                Estoy siempre interesado en nuevos desafíos y oportunidades donde pueda aportar, aprender y crecer como
                                desarrollador.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row gap-6 lg:gap-8 justify-center items-center"
                        >
                            <motion.a
                                href="mailto:hugocayon@gmail.com"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-black px-8 lg:px-12 py-4 lg:py-6 rounded-full text-base lg:text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-3 w-full sm:w-auto justify-center"
                            >
                                <Mail className="w-5 h-5" />
                                <span>Enviar Email</span>
                            </motion.a>

                            <div className="flex space-x-4 lg:space-x-6">
                                {links.map((link) => (
                                    <motion.a
                                        key={link.id}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-12 h-12 lg:w-16 lg:h-16 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                                    >
                                        {link.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    )
}
