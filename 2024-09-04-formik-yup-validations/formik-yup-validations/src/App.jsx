import { useState } from 'react'
import './App.css'
import PrevButton from './components/PrevButton'
import NextButton from './components/NextButton'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import PersonalData from './pages/PersonalData'
import Activity from './pages/Activity'
import Review from './pages/Review'

const MAX_STEP_NUMBER = 2

function App() {

  const [activeStep, setActiveStep] = useState(0)
  const initialValues = {
    nif: undefined,
    name: undefined,
    surname: undefined,
    horoscope: undefined,
    favorite_pokemon: undefined,
    place: undefined,
    ativity: undefined,
    date: undefined,
    privacy_policy_accepted: false,
  }

  const validationSchemas = []


  const nextStep = () => {
    const next = activeStep + 1
    const last = MAX_STEP_NUMBER
    setActiveStep(Math.min(next, last))
  }

  const prevStep = () => {
    const prev = activeStep - 1
    setActiveStep(Math.max(0, prev))
  }

const getStep = (props) => {
  if(activeStep === 0) {
    return <PersonalData {...props}/>
  }
  else if(activeStep === 1) {
    return <Activity {...props}/>
  }
  else {
    return <Review {...props}/>
  }
}

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchemas[activeStep]}
    >
      {(formikProps) => (
        <>
          {
            getStep(formikProps)
          }
          <div style={{
            marginTop: '2rem',
            marginX: '2rem',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
          <PrevButton
            disabled={activeStep === 0}
            onClick={() => prevStep(formikProps)}
            title={"PREV"}
          />
          <NextButton
            disabled={activeStep === MAX_STEP_NUMBER}
            onClick={() => nextStep(formikProps)}
            title={"NEXT"}
          />
          </div>
        </>
      )}
    </Formik>
  )
}

export default App
