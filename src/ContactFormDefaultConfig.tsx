import { ContactFormSetting } from './ContactForm'

const defaultConfig: ContactFormSetting = {
  containerStyle: {
    padding: "24px",
    backgroundColor: "#F8F8F8"
  },
  formStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  textStyle: {
    height: "40px",
    marginTop: "20px",
    width: "100%",
    border: "none",
    borderRadius: "6px",
    padding: "7px 12px"
  },
  textAreaStyle: {
    marginTop: "20px",
    width: "100%",
    height: "200px",
    border: "none",
    borderRadius: "6px",
    padding: "7px 12px",
    verticalAlign: "top"
  },
  buttonStyle: {
    background: "rgb(81 204 245)",
    borderRadius: "6px",
    width: "260px",
    height: "40px",
    border: "none",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  },
  indicatorStyle: {
    position: "absolute",
    left: "0",
    right: "0",
    marginLeft: "auto",
    marginRight: "auto",
    top: "15%",
    height: "40px",
    width: "30px"
  },
  namePlaceHolder: "Name",
  companyNamePlaceHolder: "Company Name",
  emailPlaceHolder: "Email",
  contentPlaceHolder: "Inquiry Detail",
  submitButtonLabel: "Submit"
}
export default defaultConfig
