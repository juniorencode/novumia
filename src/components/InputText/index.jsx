// eslint-disable-next-line
import React, { useId } from 'react'
import PropTypes from 'prop-types'
import './InputText.css'

const InputText = ({ label, caption, error, placeholder, disabled }) => {
  const id = useId()

  return (
    <div className="InputText">
      {(label || caption) && (
        <div className="InputText__topside">
          {label && (
            <label className="InputText__label" htmlFor={id}>
              {label}
            </label>
          )}
          {caption && <span className="InputText__caption">{caption}</span>}
        </div>
      )}
      <input
        id={id}
        className="InputText__input"
        type="text"
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <span className="InputText__error">{error}</span>}
    </div>
  )
}

InputText.propTypes = {
  label: PropTypes.string,
  caption: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
}

export default InputText
