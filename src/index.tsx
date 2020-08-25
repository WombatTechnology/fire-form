import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
export { default as ContactForm, FirebaseConfig } from './ContactForm'
// import ContactForm, { FirebaseConfig } from './ContactForm'
// export const test = () => {
//   const config: FirebaseConfig = {
//     apiKey: "AIzaSyD1DBLBhoaBUntOdlZenhc01_9dnDkAlgY",
//     authDomain: "database-test-e19c7.firebaseapp.com",
//     databaseURL: "https://database-test-e19c7.firebaseio.com",
//     projectId: "database-test-e19c7",
//     storageBucket: "database-test-e19c7.appspot.com",
//     messagingSenderId: "883298497799",
//     appId: "1:883298497799:web:645481b8122aa139b641a2",
//     measurementId: "G-FPRG5N610Z"
//   };
//   return <ContactForm config={config} />
// }