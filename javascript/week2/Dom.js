// const head=document.getElementById("heading");
// console.log(head.innerHTML);

// const favCity= document.getElementsByClassName("favcity");
// console.log(favCity.length)
// console.log(favCity)

// for(let city of favCity){
//   console.log(city.innerHTML)
//   city.style.color="red"
// }

// const cityarr=document.querySelector(".favcity")
// console.log(cityarr.innerHTML)

// const Allcity=document.querySelectorAll(".favcity")

// Allcity.forEach(key=>{
//     console.log(key.innerHTML)
// })
// const Container=document.querySelector(".container");

// const button=document.getElementById("btn");
// const para1=document.createElement("p")
// Container.appendChild(para1)
// const para2=document.createElement('p');
// Container.appendChild(para2)
// button.addEventListener("click",function(){
// fetch("https://official-joke-api.appspot.com/random_joke")
// .then(response => response.json()
// )
// .then((data)=>{
//     console.log(data);
//     para1.innerText=data.setup;
   
//     // console.log(para);
// setTimeout(()=>{
//     para2.innerText=data.punchline;
// },5000)
// })

// .catch((error)=>{
//     console.log(error);
// })


// })



const input=document.querySelector('input');
const button=document.querySelector('button');
button.addEventListener("click",function(){
    let text=input.value;
    fetch("http://universities.hipolabs.com/search?country=United+States")
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        // console.log(data)
        data.filter((country)=>{
           
        })
    })
    
})