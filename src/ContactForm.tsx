import React, { useState, FormEvent } from 'react'
import firebase from "firebase/app"
import 'firebase/database'
import './ContactForm.css'
import './Button.css'
import CSS from 'csstype'

export interface FirebaseConfig {
  apiKey: string,
  authDomain: string,
  databaseURL: string,
  projectId: string,
  storageBucket: string,
  messagingSenderId: string,
  appId: string,
  measurementId: string
}

export interface Props {
  config: FirebaseConfig
}

const ContactForm = (props: Props) => {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('')
  const h1Styles: CSS.Properties = {
    backgroundColor: "red"
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    // Init firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(props.config)
    }

    // GenerateUserId(TODO: fix)
    const id = firebase.database().ref('contacts').push().key

    firebase.database().ref('contacts/' + id).set({
      name: name,
      companyName: companyName,
      email: email,
      content: content
    },
      (error: Error | null) => {
        if (error) {
          console.log(error)
        } else {
          console.log("success")
        }
      }
    );
  }

  return (
    <div className="fireformContactContainer">
      <form className="fireformContact" onSubmit={handleSubmit}>
        <input style={h1Styles} className="ContactForm" type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <input className="companyName" type="text" value={companyName} onChange={(event) => setCompanyName(event.target.value)} />
        <input className="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <input className="content" type="text" value={content} onChange={(event) => setContent(event.target.value)} />
        <input type="submit" value="Submit" />
        <div className="Button" />
      </form>
    </div>
  )
}

export default ContactForm