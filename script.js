function show() {
  const hello = "Hello world";

  console.log(`First function ${hello}`)
}
show();

function hide() {
  setTimeout(() => {
    console.log("Hiding things")
  }, 3000);
}
hide();

const logoVersion = 2;
if(logoVersion===2){
  console.log(`Branch logo-version2`)
}