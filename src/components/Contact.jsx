
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
      {/* llamamos a la propiedad variants(motion.div usualmente la debe tener) como una funcion slideIn desde el lado izquierdo */}
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl' /* flex-[0.75] es 3/4 de la pantalla */
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your name
            </span>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder='Whats your name?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Email
            </span>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder='Whats your email?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Message
            </span>

            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold
            shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>

        </form>
      </motion.div>

      {/* Modelo 3D de la tierra */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

    </div >
  )
}

export default SectionWrapper(Contact, "contact");