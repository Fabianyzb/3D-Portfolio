import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../assets'
import { projects } from '../constants'
import { fadeIn, TextVariant } from '../utils/motion'

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
        <motion.p>

        </motion.p>
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')