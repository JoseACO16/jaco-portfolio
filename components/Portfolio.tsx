"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Github, Linkedin, Mail, Download, User, Code, Briefcase, Phone, Instagram,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    switch (section) {
      case "home": homeRef.current?.scrollIntoView({ behavior: "smooth" }); break;
      case "about": aboutRef.current?.scrollIntoView({ behavior: "smooth" }); break;
      case "projects": projectsRef.current?.scrollIntoView({ behavior: "smooth" }); break;
      case "contact": contactRef.current?.scrollIntoView({ behavior: "smooth" }); break;
    }
  };

  const skills = [
    { name: "JavaScript", icon: <Code className="w-6 h-6" /> },
    { name: "Java", icon: <Code className="w-6 h-6" /> },
    { name: "PHP", icon: <Code className="w-6 h-6" /> },
    { name: "SQL", icon: <Code className="w-6 h-6" /> },
    { name: "MySQL", icon: <Code className="w-6 h-6" /> },
    { name: "Oracle", icon: <Code className="w-6 h-6" /> },
    { name: "HTML", icon: <Code className="w-6 h-6" /> },
    { name: "CSS", icon: <Code className="w-6 h-6" /> },
    { name: "React", icon: <Code className="w-6 h-6" /> },
    { name: "TypeScript", icon: <Code className="w-6 h-6" /> },
    { name: "Node.js", icon: <Code className="w-6 h-6" /> },
    { name: "Figma", icon: <User className="w-6 h-6" /> },
    { name: "Bootstrap", icon: <User className="w-6 h-6" /> },
    { name: "Tailwind CSS", icon: <User className="w-6 h-6" /> },
    { name: "QA Testing", icon: <User className="w-6 h-6" /> },
    { name: "Git & GitHub", icon: <User className="w-6 h-6" /> },
    { name: "Scrum", icon: <User className="w-6 h-6" /> },
    { name: "Agile", icon: <User className="w-6 h-6" /> },
    { name: "UI/UX Design", icon: <User className="w-6 h-6" /> },
    { name: "Responsive Design", icon: <User className="w-6 h-6" /> },
    { name: "Problem Solving", icon: <User className="w-6 h-6" /> },
  ];

  const projects = [
    {
      title: "Academia Monká",
      subtitle: "Institutional Website",
      description:
        "Complete web application for a soccer academy in Costa Rica. Allows management of the academy, players, statistics, and categories.",
      image: "/Monka.PNG",
      github: "#",
      demo: "https://monka-academia-61f7da87281a.herokuapp.com/login.html",
      technologies: "Tecnologías: PHP, HTML, CSS, JS",
    }/*,
    {
      title: "E-commerce Platform",
      description: "Full-featured online shopping experience con integración de pagos",
      image: "/placeholder.svg",
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description: "Aplicación de productividad con colaboración en tiempo real",
      image: "/placeholder.svg",
      github: "#",
      demo: "#",
    },*/
  ];

  const [toast, setToast] = useState<{ show: boolean; type: "loading" | "success" | "error"; text: string }>({
    show: false, type: "loading", text: ""
  });


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-gray-100">
      {/* Navigation */}
      <motion.nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div className="text-xl font-bold" whileHover={{ scale: 1.05 }}>JACO</motion.div>

          <div className="hidden md:flex space-x-8">
            {["home", "about", "projects", "contact"].map(item => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize ${activeSection === item ? "text-blue-400" : "text-gray-300 hover:text-white"}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <Button
            variant="outline"
            className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
            onClick={() => window.open("CV-JoseCastillo.pdf", "_blank")}
          >
            <Download className="mr-2 h-4 w-4" /> CV
          </Button>
        </div>
      </motion.nav>

      {/* Home */}
      <section ref={homeRef} className="min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">José Andrés Castillo Orozco</h1>
            <h2 className="text-2xl md:text-3xl text-blue-400 mb-6">Ingeniería de Sistemas</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Desarrollador Full Stack apasionado por crear experiencias digitales intuitivas y eficientes.
              Especializado en tecnologías modernas como React, Node.js y TypeScript.
            </p>
            <div className="flex space-x-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => scrollToSection("projects")}>
                Ver Proyectos
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                onClick={() => scrollToSection("contact")}
              >
                Contactar
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500">
                <img
                  src="/perfil.jpeg"
                  alt="Foto de José Andrés Castillo Orozco"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 rounded-full px-4 py-2 flex items-center justify-center">
                <span className="text-white font-bold text-sm tracking-wider">
                  {"<JACO>"}
                </span>

              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section ref={aboutRef} className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mí</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Aquí quitamos el cuadro blanco, ahora solo texto */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:w-full"
            >
              <h3 className="text-2xl font-bold mb-4">Mi Trayectoria</h3>
              <p className="text-gray-300 mb-6">
                Soy un ingeniero de sistemas con un año de experiencia en el desarrollo de aplicaciones web y móviles.
                Mi enfoque se centra en crear soluciones tecnológicas eficientes y escalables que resuelvan problemas reales.
              </p>
              <p className="text-gray-300 mb-8">
                Me especializo en tecnologías modernas como React, Node.js, TypeScript y bases de datos.
                Tengo interés en arquitectura de software y en interfaces de usuario intuitivas y atractivas.
              </p>

              <h4 className="text-xl font-bold mb-4">Habilidades</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center space-x-2 bg-gray-800 p-3 rounded-lg"
                    whileHover={{ y: -5, backgroundColor: "rgba(59,130,246,0.2)" }}
                  >
                    <div className="text-blue-400">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Projects */}
      <section ref={projectsRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Imagen del proyecto */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  {/* Tecnologías (opcional) */}
                  {"technologies" in project && project.technologies && (
                    <p className="text-sm text-gray-400 mb-4">{project.technologies}</p>
                  )}

                  <div className="flex space-x-4">
                    {/* Botón GitHub solo si hay URL válida */}
                    {project.github && project.github !== "#" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="mr-2 h-4 w-4" /> Código
                      </Button>
                    )}

                    {/* Botón Demo si hay URL */}
                    {project.demo && project.demo !== "#" && (
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <Briefcase className="mr-2 h-4 w-4" /> Demo
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      {toast.show && (
        <div className={`fixed bottom-6 right-6 z-[60] px-4 py-3 rounded-lg shadow-lg
    ${toast.type === "success" ? "bg-green-600" : toast.type === "error" ? "bg-red-600" : "bg-gray-700"}
    text-white`}>
          {toast.text}
        </div>
      )}

      <section ref={contactRef} className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2"
            >
              <h3 className="text-2xl font-bold mb-6">¡Hablemos!</h3>
              <p className="text-gray-300 mb-8">
                ¿Tienes un proyecto en mente? ¿Quieres colaborar o simplemente saludar?
                Estoy disponible para nuevas oportunidades y conexiones profesionales.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-900/30 p-3 rounded-full mr-4">
                    <Mail className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-gray-300">josecastillocr12@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-900/30 p-3 rounded-full mr-4">
                    <Phone className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold">Teléfono</h4>
                    <p className="text-gray-300">+506 8447 8960</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <a
                  href="https://github.com/JoseACO16"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Button variant="outline" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/josé-andrés-castillo-orozco-868a71382/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href="https://www.instagram.com/jaco.1695/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2"
            >
              <form
                noValidate
                onSubmit={async (e) => {
                  e.preventDefault();

                  const form = e.currentTarget as HTMLFormElement;
                  const formData = new FormData(form);

                  try {
                    // Muestra “enviando…”
                    setToast({ show: true, type: "loading", text: "Enviando mensaje..." });

                    const resp = await fetch("https://formspree.io/f/mrbaonlw", {
                      method: "POST",
                      body: formData,
                      headers: { Accept: "application/json" },
                    });

                    if (resp.ok) {
                      setToast({ show: true, type: "success", text: "¡Mensaje enviado con éxito!" });
                      form.reset();
                    } else {
                      setToast({ show: true, type: "error", text: "Hubo un problema. Intenta otra vez." });
                    }
                  } catch {
                    setToast({ show: true, type: "error", text: "No se pudo enviar. Revisa tu conexión." });
                  } finally {
                    // Oculta el toast a los 3s
                    setTimeout(() => setToast(s => ({ ...s, show: false })), 3000);
                  }
                }}
                className="space-y-6"
              >
                <div>
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" type="text" name="name" required className="bg-gray-800 border-gray-700 mt-2" />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" name="email" required className="bg-gray-800 border-gray-700 mt-2" />
                </div>

                <div>
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" name="message" rows={5} required className="bg-gray-800 border-gray-700 mt-2" />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Enviar Mensaje
                </Button>
              </form>

            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} José Andrés Castillo Orozco. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
