import { motion } from 'framer-motion'

import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

/* Una funcion retornando otra funcion */
/* El SectionWrapper se aplicara a diferentes secciones para que hagan el 
efecto de "aparecer que se configura en el motion.section"  */
const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}//animara laa seccion
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                {/* se agrega funcionalidad para el scrolldown con un empty space(&nbsp;) */}
                <span className='hash-span' id={idName}>
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        )
    }

export default SectionWrapper