import React from 'react'
import { Field, reduxForm } from 'redux-form'

const required = value => value ? undefined : <span className="ui red header"> ! Required </span>
const maxLength = max => value =>
  value && value.length > max ?  <span className="ui red header">Must be ${max} characters or less </span> : undefined
const maxLength30 = maxLength(30)
const maxLength200 = maxLength(200)

const number = value => value && isNaN(Number(value)) ?  <span className="ui red header">Must be a number </span> : undefined
const minLength = min => value =>
  value && value.length < min ? <span className="ui red header">Must be at least ${min}</span> : undefined
const minLength2 = minLength(2)
const minLength10 = minLength(10)

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
   <span className="ui red header">Invalid email address</span> : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value) ?
   <span className="ui red header">Really? You still use AOL for your email?</span> : undefined
export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ?  <span className="ui red header">Invalid phone number, must be 10 digits</span>
    : undefined


const renderField = ({ input, label, placeholder,type, meta: { touched, error, warning } }) => (
  
    <div>
      <input {...input} placeholder={placeholder} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
)

const Form = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form className="ui form" onSubmit={handleSubmit}>
         
          <Field 
                   name="name"
                   type="text"
                   placeholder="Nom"
                   component={renderField} 
                   validate={[ required, minLength2, maxLength30 ]}
           />
           <br />
           <Field 
                   name="email"
                   type="email"
                   component={renderField}
                   placeholder="Email"
                   validate={[required, email]}
                   warn={aol}
           />
           <br />

             <Field
                   name="subject"
                   type="text"
                   placeholder="Sujet"
                   component={renderField}
                   validate={[ required, minLength2, maxLength30 ]}
           />
           <br />

           <Field
                    name="phone"
                    type="text"
                    component={renderField}
                    placeholder="Téléphone"
                    validate={[required, number, phoneNumber]}
 
           />
           <br />
           <Field 
                    name="adresse" 
                    type="text"
                    component={renderField} 
                    placeholder="Adresse"
                    validate={[ required, minLength10, maxLength200 ]}

           />
        <br />
      <div>
        <button className="massive ui button" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        <button className="positive massive ui button" type="submit" disabled={submitting}>Send<i className="right arrow icon"></i></button> 
     </div>
    </form>
  )
}

export default reduxForm({
  form: 'Form' // a unique identifier for this form
})(Form)
