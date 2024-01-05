// eslint-disable-next-line
import React, { useId } from 'react'
import PropTypes from 'prop-types'
import './InputNumber.css'

const InputNumber = ({
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
    <div className="InputNumber">
      {(label || caption) && (
        <div className="InputNumber__topside">
          {label && (
            <label className="InputNumber__label" htmlFor={id}>
              {label}
            </label>
          )}
          {caption && <span className="InputNumber__caption">{caption}</span>}
        </div>
      )}
      <input
        name={name}
        id={id}
        className="InputNumber__input"
        type="number"
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
      {error && <span className="InputNumber__error">{error}</span>}
    </div>
  )
}

InputNumber.propTypes = {
  label: PropTypes.string,
  caption: PropTypes.string,
  error: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}

export { InputNumber }
