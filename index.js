// Declare function to check if a string is a valid US phone number
const telephoneCheck = str =>
  // Use Regex and the test method against the str prama and return true or false
  /^(1\s|1|)?((\(\d{3}\))|\d{3})(-|\s)?(\d{3})(-|\s)?(\d{4})$/.test(str)

telephoneCheck('555-555-5555')
