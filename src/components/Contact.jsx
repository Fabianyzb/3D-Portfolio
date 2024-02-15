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
  return (
    <div>Contact</div>
  )
}

export default Contact