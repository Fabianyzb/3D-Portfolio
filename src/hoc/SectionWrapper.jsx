import { motion } from 'framer-motion'

import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

/* Una funcion retornando otra funcion */
const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section>
                <Component />
            </motion.section>
        )
    }

export default SectionWrapper