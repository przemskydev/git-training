console.log(true)
console.log(false)

function show() {
  console.log(true)
}

fetch('https://reqres.in/api/users')
  .then(res => res.json())
  .then(json => console.log(json))  