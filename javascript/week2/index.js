fetch("https://official-joke-api.appspot.com/random_joke")
.then(response => response.json()

)
.then(data=>{
    console.log(data);
    console.log(data.setup);
})

.catch(error=>{
    console.log(error);
})