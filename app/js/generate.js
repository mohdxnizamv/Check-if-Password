function generatePassword() {
  var passwordLength = document.getElementById("passwordLength").value
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-*@+-*@"
  var password = ""

  for (var i = 0; i < passwordLength; i++) {
    password += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  document.getElementById("passwordOutput").innerHTML = password
}
