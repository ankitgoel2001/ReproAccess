import React, {useState, useEffect} from "react";
import axios from "axios";
import usa_map from "./images/usa-map.png";
import styles from "./App.module.css";

//this function works with the main heading and start button
function WelcomeButton() {
  return (
    <div className={styles.mainHeader}>
        <h1>Need reproductive care? Find immediate funding now</h1>
        <div className={styles.startNowButton}>
          Get Started
        </div>
    </div>
  )
}

//this function prints the map of USA
function UsaMap() {
  const imageFormat = {
    maxWidth: "100%",
    maxHeight: "100%",
  };

  return (
    <div className={styles.layoutMap}>
      <img style={imageFormat} src = {usa_map} />
    </div>
  )
}

function FormQuestions({props}) {
  const inputFieldFormat = {
    borderRadius: "5px",
    width: "300px"
  }

  return (
      <div className={styles.formQuestions}>
        {props} <br /> <input style={inputFieldFormat}></input> 
      </div>  
  )
}

function FormDetail() {
  const detailHeader = {
    textAlign: "center"
  };

  return (
    <div id="profileForm" className={styles.formFill}>
      <h3 style={detailHeader}>Enter details</h3>
      <div className={styles.formFillData}>
        <FormQuestions props={"Name"}/>
        <FormQuestions props={"Age"}/>
        <FormQuestions props={"Gender"}/>
        <FormQuestions props={"State"}/>
        <FormQuestions props={"Phone Number"}/>
        <FormQuestions props={"Nationality"}/>
        <FormQuestions props={"Citizenship Status"}/>
        <FormQuestions props={"Reason for assistance?"}/>
        <FormQuestions props={"Annual Income"}/>
        <FormQuestions props={"Availability?"}/>
        <button id="formSubmitButton" className={styles.formButton}>Submit</button>
      </div>
    </div>

  )
}

function RenderResource(){ 
  const [resources, setResource] = useState(FormDetail())

  return (
    <div>
      
    </div>
  )
}


//the main function
function App() {
  return (
    <div className="App">
      <WelcomeButton />
      <UsaMap />
      <FormDetail />
    </div>
  )
}

export default App;