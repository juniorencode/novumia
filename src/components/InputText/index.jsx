// eslint-disable-next-line
import React, { useId } from 'react'
import PropTypes from 'prop-types'
import './InputText.css'

const InputText = ({
  label,
  caption,
  error,
  name,
  placeholder,
  disabled,
  onChange
}) => {
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
        name={name}
        id={id}
        className="InputText__input"
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
      {error && <span className="InputText__error">{error}</span>}
    </div>
  )
}

InputText.propTypes = {
  label: PropTypes.string,
  caption: PropTypes.string,
  error: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}

export { InputText }
