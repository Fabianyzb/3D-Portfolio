import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../assets'
import { projects } from '../constants'
import { fadeIn, TextVariant } from '../utils/motion'

/* pasamos los parametros de projects a la constante */
const ProjectCard = ({ index, name, description, tags, image, source_code_Link }) => {
  return (
    <motion.div variants={ }>

    </motion.div>
  )

}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}> {/* Esto hara que las etiquetas p sean animadas */}
        <p className={styles.sectionSubText
        }>My work</p>
        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading=[30px]'
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Ipsam quaerat aut in tempore amet voluptate ipsum maxime.
          (Escribir algo sobre mis projects)
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) =>
          /* hay que loop dentro de los projects */
          <ProjectCard key={`project-${index}`}
            index={index} />
          { ...projects }/* asi se pasan todas las propiedades de todo el proyecto(project) */
        )}

      </div>
    </>
  )
}

export default SectionWrapper(Works, '')