const text = document.querySelector(".text")
const random =document.querySelector(".random")
setInterval(function(){
text.innerHTML = Math.ceil(Math.random() * 100000)
text.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16)
}, 50)
setInterval(function(){ 
    random.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16)
    }, 50)