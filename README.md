![アセット 5](https://user-images.githubusercontent.com/6919381/91386456-fe13a100-e86d-11ea-8e36-4f175555a894.png)

# fire-form
Create simple form in 5 minutes⏱ ([Medium article](https://medium.com/@matsumotokazuya/fire-form-create-contact-form-in-5-minutes-for-free-33af91423e48))

Currently available

* [Contact form](https://wombattechnology.github.io/fire-form/)
* (Up comming) Pre register form
* (Up comming) Feedback form


## Install

```
npm i @kazuwombat/fire-form
```
or
```
yarn add @kazuwombat/fire-form
```

## How to use
### Prerequisites (Setup Firebase Real Time Database)
1. Setup FirebaseProject for Web. Detail [here](https://firebase.google.com/docs/web/setup)
2. When you setup Firebase project, you can get Firebase Config like below. Copy it for when you implement the form.

<img width="579" alt="WombatTechnologyWebSite_-_WombatTechnologyWebSite_-_Firebase_コンソール" src="https://user-images.githubusercontent.com/6919381/91382698-437fa080-e865-11ea-98de-d7e32e39cd73.png">

3. Create Firebase Real Time Database. Detail [here](https://firebase.google.com/docs/database/web/start)
4. Update database rule with below.

```json
{
  "rules": {
    ".read": false,
    ".write": true
  }
}
```

### Use in your project

1. Create firebaseConfig.ts file with config which you copied while Firebase project setup.

```typescript
export default {
  apiKey: "xxxxxxx",
  authDomain:  "xxxxxxx",
  databaseURL:  "xxxxxxx",
  projectId:  "xxxxxxx",
  storageBucket:  "xxxxxxx",
  messagingSenderId:  "xxxxxxx",
  appId:  "xxxxxxx",
  measurementId:  "xxxxxxx"
};
```

2. Then make contact form with the config. You need to handle success(for example show thank you modal) and error callbacks.

```typescript
import React from "react"
import { ContactForm } from '@kazuwombat/fire-form'
import config from '../firebaseConfig'

const ContactPage = () => {
  return (
    <ContactForm
      config={config}
      successCallback={() => { alert("success :)") /* TODO Handle Success */ 
}}
      errorCallback={(error) => {alert(error) /* TODO Handle Error */ 
}}
    />
  )
}
export default ContactPage
```

Yay 🎊 you’ve completed to create contact form :+1:

Let’s test submitting form.

![株式会社ウォンバットテクノロジー_-_株式会社ウォンバットテクノロジー_](https://user-images.githubusercontent.com/6919381/91382724-51cdbc80-e865-11ea-9c68-0ca82fc78e9f.png)

Then check firebase have saved the data successfully.

![WombatTechnologyWebSite_-_Firebase_コンソール](https://user-images.githubusercontent.com/6919381/91382769-67db7d00-e865-11ea-8ac1-f2383c7fe5c9.png)

## Customization
ContactForm accept setting object below.

```typescript
export interface ContactFormSetting {
    containerStyle?: CSS.Properties;
    formStyle?: CSS.Properties;
    textStyle?: CSS.Properties;
    textAreaStyle?: CSS.Properties;
    buttonStyle?: CSS.Properties;
    indicatorStyle?: CSS.Properties;
    namePlaceHolder?: string;
    companyNamePlaceHolder?: string;
    emailPlaceHolder?: string;
    contentPlaceHolder?: string;
    submitButtonLabel?: string;
}
```

You can customize form visual pass config object to Contactform.

```typescript
<ContactForm
  config={config}
  setting={{
    formStyle: {
      backgroundColor: "green"
    }
  }}
  successCallback={() => {
    alert("success :)") /* TODO Handle Success */
  }}
  errorCallback={(error) => {
    alert(error) /* TODO Handle Error */
  }}
/>
```

## Notification
See another repo, [fire-form-functions](https://github.com/WombatTechnology/fire-form-functions)


