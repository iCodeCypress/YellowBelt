const objImage = document.querySelector(".char")


const speed = 20


window.addEventListener('load', ()=>{
    objImage.style.position = 'absolute'
    objImage.style.left = 0
    objImage.style.top = 0
})


window.addEventListener('keydown', (e)=>{
    switch(e.key){
        case 'ArrowLeft':
            objImage.style.left = parseInt(objImage.style.left) - speed + "px"
            break
        case 'ArrowRight':
            objImage.style.left = parseInt(objImage.style.left) + speed + "px"
            break
        case 'ArrowUp':
            objImage.style.height = '150px'
            objImage.style.width = '150px'
            break
        case 'ArrowDown':
            objImage.style.top = parseInt(objImage.style.top) + speed + "px"
            break
    }
})

