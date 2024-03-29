import { useState, useEffect } from 'react'
import InputConst from './InputConst'
import './input.css'
import PropTypes from 'prop-types'

const TextInput = ({
  className,
  labelClassName,
  isInvalid,
  labelStyle,
  name,
  label,
  id,
  placeholder,
  onChange,
  type,
  value,
  autoFocus,
  required,
  inpuType,
  desableType,
  inputStyle,
}) => {
  const [inputTypeDetails, setInputTypeDetails] = useState({
    id: null,
    name: null,
    type: null,
    label: null,
    placeholder: null,
  })

  useEffect(() => {
    switch (inpuType) {
      case 'email':
        setInputTypeDetails({
          id: 'email',
          name: 'email',
          type: 'email',
          label: 'Email address:',
          placeholder: 'E.g: john@gmail.com',
        })
        break
      case 'password':
        setInputTypeDetails({
          id: 'password',
          name: 'password',
          type: 'password',
          label: 'Password:',
          placeholder: 'E.g: Your password',
        })
        break
      case 'name':
        setInputTypeDetails({
          id: 'name',
          name: 'name',
          type: 'name',
          label: 'Name:',
          placeholder: 'E.g: John Doe',
        })
        break

      default:
      // code
    }
  }, [])
  const borderStyle = isInvalid ? InputConst.border.error : InputConst.border.default
  return (
    <div className='ui-input-container'>
      <label
        className={labelClassName}
        style={{
          color: isInvalid ? 'red' : InputConst.secondary,
          ...labelStyle,
        }}
        htmlFor={name ? name : inputTypeDetails.name}
      >
        {inputTypeDetails.label ? (label ? label : inputTypeDetails.label) : label ? label : ''}
      </label>
      <input
        style={{ ...inputStyle, border: borderStyle }}
        id={inputTypeDetails.id ? (id ? id : inputTypeDetails.id) : id ? id : ''}
        placeholder={
          inputTypeDetails.placeholder
            ? placeholder
              ? placeholder
              : inputTypeDetails.placeholder
            : placeholder
            ? placeholder
            : ''
        }
        name={inputTypeDetails.name ? (name ? name : inputTypeDetails.name) : name ? name : ''}
        className={`${className} ui-input`}
        onChange={onChange}
        type={desableType !== 'yes' && inputTypeDetails.type ? (type ? type : inputTypeDetails.type) : type ? type : ''}
        value={value}
        autoFocus={autoFocus}
        required={required}
      />
    </div>
  )
}

export default TextInput
