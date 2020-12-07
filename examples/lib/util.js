const dotenvAlert = () => {
  const message = 'Run examples from project root or put the .env file in the \'examples\' directory' 
  !process.env.LEDGER_COMPLIANCE_ADDRESS
    && console.error('ERROR: LEDGER_COMPLIANCE_ADDRESS is undefined ' + message)
  !process.env.LEDGER_COMPLIANCE_ADDRESS
    && console.error('ERROR: LEDGER_COMPLIANCE_PORT is undefined ' + message)
  !process.env.LEDGER_COMPLIANCE_ADDRESS
    && console.error('ERROR: LEDGER_COMPLIANCE_API_KEY is undefined ' + message)
  return true
}

module.exports = {
  dotenvAlert
}
  