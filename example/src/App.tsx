import React from 'react'
import 'fire-form'
import { ContactForm } from 'fire-form'
import 'fire-form/dist/index.css'
import config from './firebaseConfig'

const App = () => {
  return <ContactForm config={config} />
}
export default App
