let btnCheck = document.querySelector("button")
let input = document.querySelector("input")
let result = document.querySelector("h1")

let maxLength = 30
let minLength = 10

let lowerMinCount = 3
const LOWER_REGEX = /([a-z])/g

let upperMinCount = 3
const UPPER_REGEX = /([A-Z])/g

let numMinCount = 2
const NUM_REGEX = /([\d])/g

let specialMinCount = 2
const SPECIAL_REGEX = /([$&+,:;=?@#|'<>.^*()%!-])/g

btnCheck.addEventListener("click", () => {
  let password = input.value

  if (password.length > maxLength) {
    result.innerText = "Password should be less than 24 characters"
    return
  }

  result.innerText = isStrongPassword(password) ? "STRONG" : "WEAK"
})

function isStrongPassword(password) {
  let upperMatch = password.match(UPPER_REGEX) ?? []
  let lowerMatch = password.match(LOWER_REGEX) ?? []
  let numMatch = password.match(NUM_REGEX) ?? []
  let specialMatch = password.match(SPECIAL_REGEX) ?? []

  return (
    password.length >= minLength &&
    upperMatch.length >= upperMinCount &&
    lowerMatch.length >= lowerMinCount &&
    numMatch.length >= numMinCount &&
    specialMatch.length >= specialMinCount
  )
}
