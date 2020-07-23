console.log(true)
console.log(false)


fetch('https://reqres.in/api/users')
  .then(res => res.json())
  .then(json => console.log(json))
