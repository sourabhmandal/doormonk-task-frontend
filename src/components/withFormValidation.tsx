import React, { useState } from 'react'

const withFormValidation = (WrappedComponent) => {
  const WithFormValidation = (props) => {
    const [errors, setErrors] = useState({})

    const validateForm = (data) => {
      // Validate form data and update errors state
    }

    const handleSubmit = (data) => {
      const validationErrors = validateForm(data)
      if (Object.keys(validationErrors).length === 0) {
        // Handle form submission
      } else {
        setErrors(validationErrors)
      }
    }

    return <WrappedComponent {...props} handleSubmit={handleSubmit} errors={errors} />
  }

  return WithFormValidation
}

export default withFormValidation
