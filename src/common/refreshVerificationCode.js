import httpConfig from '../httpConfig.js'

// console.log(http)
export default {
  refreshVerificationCode () {
    var random = httpConfig.accountSecurityVerify + '?a=' + Math.random()
    return random
  }
}
