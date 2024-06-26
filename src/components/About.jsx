import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from "../hoc"

/* Cartas con Tilt */
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full" gyroscope={true}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{
            max: 90,
            scale: 1,
            speed: 1000
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12
          min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title}
            className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

        </div>

      </motion.div>
    </Tilt >
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText
        }>Introducción</p>
        <h2 className={styles.sectionHeadText}
        >Resumen.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] 
        max-w-3xl leading-[30px]"
      >
        ¡Hola! Soy un desarrollador de software con un enfoque en el diseño y
        desarrollo de soluciones innovadoras y efectivas para satisfacer las necesidades de mis clientes.
        Mi experiencia incluye el desarrollo de aplicaciones web, aplicaciones móviles, y sistemas de gestión de contenido.
        Mi objetivo es proporcionar soluciones tecnológicas de alta calidad que ayuden a las empresas a crecer y prosperar.
        Estoy entusiasmado por tomar nuevos desafíos y contribuir al éxito de proyectos innovadores.
      </motion.p>

      {/* Display cards */}
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {/* Ahora vamos a loppear sobre los services donde mapearemos en cada service y su index */}
        {services.map((service, index) => (
          /* y para cada service se va a renderear un serviceCard con una key */
          <ServiceCard key={service.title} index=
            {index} {...service} />
        ))}
      </div>
    </>
  )
}
/* Envolver los export default con SectionWrapper. (Componente, "id") */
export default SectionWrapper(About, "about")