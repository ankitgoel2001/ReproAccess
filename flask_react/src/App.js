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

function DisplayOrgDetails({props}) {
  let orgDisplay = []
  const orgBoxColor = {
    'backgroundColor': props[1]
  }
  console.log(props[1])

  for (let i = 0; i < 5; i++) {
    orgDisplay.push(
      <div className={styles.orgBox} style={orgBoxColor}>
        Organization {i}
      </div>
    )
  }

  return (
    <div className={styles.orgDivider}>
      <h3 className={styles.orgTitle}>
        {props[0]}
      </h3>
      <div className={styles.orgList}>
        {orgDisplay}
      </div>
    </div>
  )
}

function DisplayOrganizations() {
  const orgMap = {
      'title1': ['Sponsoring organizations', 'green'],
      'title2': ['Flight sponsors', 'orange'],
      'title3': ['Meal services', 'blue'],
      'title4': ['Carpooling', 'gray'],
      'title5': ['Healthcare funding', 'red']
    }
  
  let rows = []
  for (const [key, value] of Object.entries(orgMap)) {
      rows.push(<div>
        <DisplayOrgDetails props={value}/>   
      </div>)
  }

  return (
    <div className={styles.orgCollection}>
      {rows}
    </div>
  ) 
}

function FormDetail() {
  const [showOrgList, setShowOrgList] = useState(false)

  const detailHeader = {
    textAlign: "center"
  };

  const formQuestions = ['Name', 'Age', 'Gender', 'State', 'Phone Number', 'Nationality', 'Citizenship Status', 'Reason for Assistance?', 'Annual Income', 'Availability?']
  let questionsList = []

  for (let i = 0; i < formQuestions.length; i++) {
    questionsList.push(<FormQuestions props={formQuestions[i]} />)
  }

  return (
    <div>
      <div id="formFillBox" className={styles.formFill}>
        <h3 style={detailHeader}>Enter details</h3>
        <div className={styles.formFillData}>
          {questionsList}
          <button onClick={() => {setShowOrgList(true)}} id="formSubmitButton" className={styles.formButton}>Submit</button>
        </div>
      </div>

      {showOrgList && <DisplayOrganizations />}
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