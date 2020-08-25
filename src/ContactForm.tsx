import React, { useState, FormEvent } from 'react'
import firebase from "firebase/app"
import 'firebase/database'
import './reset.css'
import defaultConfig from './ContactFormDefaultConfig'
import CSS from 'csstype'
import ClipLoader from "react-spinners/ClipLoader";

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

export interface ContactFormSetting {
  containerStyle?: CSS.Properties,
  formStyle?: CSS.Properties,
  textStyle?: CSS.Properties,
  textAreaStyle?: CSS.Properties,
  buttonStyle?: CSS.Properties,
  indicatorStyle?: CSS.Properties,
  namePlaceHolder?: string,
  companyNamePlaceHolder?: string,
  emailPlaceHolder?: string,
  contentPlaceHolder?: string
  submitButtonLabel?: string
}

export interface FireFormSuccessCallback { (): void }
export interface FireFormErrorCallback { (error: Error): void }

export interface Props {
  config: FirebaseConfig,
  setting?: ContactFormSetting,
  successCallback: FireFormSuccessCallback,
  errorCallback: FireFormErrorCallback
}

const ContactForm = ({
  config,
  setting,
  successCallback,
  errorCallback
}: Props) => {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)
    // Init firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }

    const id = firebase.database().ref('contacts').push().key
    firebase.database().ref('contacts/' + id).set({
      name: name,
      companyName: companyName,
      email: email,
      content: content
    },
      (error: Error | null) => {
        setLoading(false)
        if (error) {
          errorCallback(error)
        } else {
          successCallback()
        }
      }
    );
  }

  return (
    <div style={setting?.containerStyle || defaultConfig.containerStyle}>
      <form onSubmit={handleSubmit} style={setting?.formStyle || defaultConfig.formStyle}>
        <input
          required
          style={setting?.textStyle || defaultConfig.textStyle}
          type="text"
          placeholder={setting?.namePlaceHolder || defaultConfig.namePlaceHolder}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          required
          style={setting?.textStyle || defaultConfig.textStyle}
          type="text"
          placeholder={setting?.companyNamePlaceHolder || defaultConfig.companyNamePlaceHolder}
          value={companyName}
          onChange={(event) => setCompanyName(event.target.value)}
        />
        <input
          required
          style={setting?.textStyle || defaultConfig.textStyle}
          type="email"
          placeholder={setting?.emailPlaceHolder || defaultConfig.emailPlaceHolder}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <textarea
          style={setting?.textAreaStyle || defaultConfig.textAreaStyle}
          placeholder={setting?.contentPlaceHolder || defaultConfig.contentPlaceHolder}
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <div style={{ position: "relative", height: "40px", marginTop: "30px" }}>
          <input
            style={setting?.buttonStyle || defaultConfig.buttonStyle}
            type="submit"
            disabled={loading}
            value={loading ? "" : (setting?.submitButtonLabel || defaultConfig.submitButtonLabel)}
          />
          {
            loading &&
            <div style={setting?.indicatorStyle || defaultConfig.indicatorStyle}>
              <ClipLoader
                size={30}
                color={"white"}
                loading={true}
              />
            </div>
          }
        </div>
      </form>
    </div>
  )
}

export default ContactForm