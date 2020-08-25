import React from 'react'
import 'fire-form'
import { ContactForm } from 'fire-form'
import 'fire-form/dist/index.css'
import config from './firebaseConfig'
import { FirebaseConfig } from '../../dist/ContactForm'

const App = () => {
  const hoge: FirebaseConfig = config
  return <ContactForm config={hoge} />
}
export default App
