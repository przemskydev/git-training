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