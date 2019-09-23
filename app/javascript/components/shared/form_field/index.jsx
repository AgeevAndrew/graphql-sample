import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const FormField = (props) => {
  const { type, label, name, placeholder, hint, value } = props

  const onChange = ({ target: { value } }) => {
    if (props.onChange) props.onChange(value)
  }

  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <input type={type} className="form-control" name={name} placeholder={placeholder} value={value} onChange={onChange}/>
      {hint && <small className="form-text text-muted">{hint}</small>}
    </div>
  )
}

FormField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  hint: PropTypes.string,
  onChange: PropTypes.func,
}

FormField.defaultProps = {
  type: 'text',
  value: ''
}
