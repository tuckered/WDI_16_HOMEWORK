var estimateStrength = function(pwd) {

  var results = {score: 0}

  var hasLowerCase = /[a-z]/g.test(pwd)

  if (hasLowerCase) {
    results["hasLowerCase"] = hasLowerCase
    results["score"] += 1
  }

  var hasUpperCase = /[A-Z]/g.test(pwd)
  if (hasUpperCase) {
    results["hasUpperCase"] = hasUpperCase
    results["score"] += 1
  }

  var hasNumber = /[\d]/g.test(pwd) 
  if (hasNumber) {
    results["hasNumber"] = hasNumber
    results["score"] += 1
  }

  var hasSpecialChar = /[!@#$%]/g.test(pwd) 
  if (hasSpecialChar) {
    results["hasSpecialChar"] = hasSpecialChar
    results["score"] += 1
  }

  var isOver8Char = pwd.length >= 8
  if (isOver8Char) {
    results["isOver8Char"] = isOver8Char
    results["score"] += 1
  }
  console.log(results)
  return results
}
module.exports = estimateStrength