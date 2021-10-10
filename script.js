var container = document.querySelector(".container")
var card = document.querySelector(".card")
var heading = document.querySelector(".heading")
 
container.addEventListener("mousemove", (e)=>{
    var Xpoint = e.pageX/20
    var Ypoint = e.pageY/20
    card.style.transform = `rotateX(${Xpoint}deg) rotateY(${Ypoint}deg)`
})

container.addEventListener("mouseenter", (e)=>{
  heading.style.transform = "translateZ(300px)"
})
container.addEventListener("mouseleave", (e)=>{
    card.style.transform = 'rotateY(0deg)'
    heading.style.transform = "translateZ(300px)"
})
 