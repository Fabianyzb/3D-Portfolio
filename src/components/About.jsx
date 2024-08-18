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
          min-h-[165px] flex justify-evenly items-center flex-col"> {/* tamano de cartas */}
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
        ¡Hola! Soy un estudiante y desarrollador de software que está aprendiendo constantemente.
        Mis áreas de interés incluyen el diseño y el desarrollo de soluciones innovadoras y efectivas que puedan satisfacer las necesidades de cualquier persona que las utilice.
        Mis conocimientos abarcan el desarrollo de aplicaciones web, aplicaciones móviles y sistemas de gestión de contenido.
        Aprendo rápidamente y disfruto el desafío de encontrar soluciones creativas y eficientes para los problemas técnicos.
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