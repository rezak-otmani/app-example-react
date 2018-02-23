import React from 'react'
import { Field, reduxForm } from 'redux-form'

const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const Form = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form class="ui form" onSubmit={handleSubmit}>
         <div> 
          <Field 
                   name="name"
                   type="text"
                   placeholder="Nom"
                   label="Nom"
                   component={renderField} 
                   validate={[ required, maxLength15 ]}
           />
        
           <Field
                   name="email" type="email"
                   component={renderField}
                   label="Email"
                   validate={email}
                   warn={aol}
           />

           <Field
                    name="telephone"
                    type="text"
                    component={renderField}
                    label="Téléphone"
                    validate={[ required, maxLength15 ]}
 
           />
                       <Field 
                    name="adresse" 
                    type="text"
                    component={renderField} 
                    label="Adresse"
                    validate={[ required, maxLength15 ]}

           />


      </div>
        <br />
      <div>
        <button class="positive negative massive ui button" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        <button class="positive massive ui button" type="submit" disabled={submitting}>Send<i class="right arrow icon"></i></button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'Form' // a unique identifier for this form
})(Form)
