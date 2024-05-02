
var btnLight = document.querySelector(".btn-ligth")
var btnDark = document.querySelector(".btn-dark")
var body = document.querySelector("body")
var section = document.querySelectorAll("section")
var navLinks = document.querySelectorAll(".navbar a")
var footer = document.querySelectorAll("footer")

btnDark.addEventListener("click", function(){
    body.style.backgroundColor = "black"
    body.style.color = "white"
    btnDark.style.display = "none"
    btnLight.style.display = "block"

    navLinks.forEach(function(link){
        link.style.setProperty("color", "white", "important")
    })
    
    section.forEach(function(sec){
        sec.style.backgroundColor = "rgb(241, 166, 213, 0,4)"
       
    })


    footer.forEach(function(foot){
        foot.style.backgroundColor = "rgb(241, 166, 213, 0,4)"
     
    })

    });



btnLight.addEventListener("click", function(){
    body.style.backgroundColor = "white"
    body.style.color = "black"
    btnLight.style.display = "none"
    btnDark.style.display = "block"
   

    navLinks.forEach(function(link){
        link.style.setProperty("color", "black", "important")
    })

    section.forEach(function(sec){
        sec.style.backgroundColor = "rgb(15, 35, 77)"
      
    })

    footer.forEach(function(foot){
        foot.style.backgroundColor = "rgb(15, 35, 77)"
    
    })

})
