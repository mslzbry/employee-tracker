const validateString = s => {
  return (
    typeof s === 'string' ||
    s instanceof String ||
    'Please enter a valid response'
  )
}

const validateSalary = n => {
  return validator.isDecimal(num) || 'Please enter a valid salary'
}

module.exports = { validateString, validateSalary }
