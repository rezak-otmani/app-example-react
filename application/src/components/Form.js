import ReactDOM from 'react-dom'
import React from 'react'
import { Field, reduxForm } from 'redux-form'

const required = value => (value ? undefined : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const maxLength200 = maxLength(200)
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined
export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined


const renderField = ({ input, label, type, meta: { touched, error, warning }}) => (
     <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)


 const Form = props => {
 const { handleSubmit, pristine, reset, submitting } = props
  return (
            <form class="ui form" onSubmit={handleSubmit}>   
              <div className='content'>
 
            <Field
              
                 type='text'
                 placeholder='Nom'
                  component={renderField}
                  validate={[required, maxLength15, minLength2]}
                  warn={alphaNumeric}
              />
            
            <div className='field'>
              <input
                type='text'
                 placeholder='Email'
                 component={renderField}
                 validate={email}
                 warn={aol}
              />
            </div>
            
                 <div className='field'>
              <input
                type='text'
                  placeholder='Sujet'
                  component={renderField}
                  validate={[required, maxLength200, minLength2]}
                  warn={alphaNumeric}
              />
            </div>

              <div className='field'>
              <input
                type='text'
                 placeholder='Téléphone'
                 component={renderField}
                 validate={[required, phoneNumber]}
              />
            </div>

                <div className='field'>
              <input
                type='text'
                 placeholder='Adresse'
                 validate={[required, maxLength200, minLength2]}
              />
            </div>


             <button type="submit" disabled={pristine || submitting}  class="ui positive massive button">SEND
                 <i class="right paper plane icon">
             </i>
              
                
              </button>
           </div>
           </form>
          )
}

export default reduxForm({
  form: 'FormDemo' // a unique identifier for this form
})(Form)

