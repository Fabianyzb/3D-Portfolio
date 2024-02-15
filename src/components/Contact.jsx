import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  /* especificar un campo vacio useRef */
  const formRef = useRef();
  /* especificar el campo useState */
  const [form, setform] = useState({
    name: '',
    email: '',
    message: '',
  })
  /* loading para cuando se este generando la forma */
  const [loading, setloading] = useState(false)

  /* funcionalidad */
  const handleChange = (e) => { }

  const handleSubmit = (e) => { }


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      {/* motion.div para animar las etiquetas p y h3 con un slideIn de izquierda a derecha*/}
      <motion.div
        {/* llamamos a la propiedad variants(motion.div usualmente la debe tener) como una funcion slideIn desde el lado izquierdo */}
        variants={slideIn('left', 'tween', 0.2, 1)}

        className='flex-[0.75] bg-black-100 p-8 rounded-2xl' /* flex-[0.75] es 3/4 de la pantalla */
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'>

        </form>


      </motion.div>

    </div >
  )
}

export default Contact