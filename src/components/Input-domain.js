import React from 'react'

const InputDomain = ({ value, updateInputValue, errorMessage, validateUrl }) => {

  const renderErrorMessage = () => {
    if (errorMessage)
      return <div className='alert alert-danger' role='alert'>{errorMessage}</div>
  }

  return (
    <div className='form'>
      <div className='input-group'>
        <input 
          type='text' 
          id='domainName' 
          className='form-control'  
          value={value} 
          placeholder='Website Domain'
          onChange={updateInputValue}
        />
        <span className='input-group-btn'>
          <button 
            className='btn btn-primary'
            onClick={validateUrl}>Locate
          </button>
        </span>
      </div>
      {renderErrorMessage()}
    </div>

  )
}

export default InputDomain
