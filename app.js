const body = document.body
const navToggle = document.querySelector('.nav-toggle')
const navItems = document.querySelector('.nav-items')
const btnColor = document.querySelector('.btn-color')
const btnDay = document.querySelector('.btn-day')
const btnDark = document.querySelector('.btn-dark')
const up = document.querySelector('.up')
const down = document.querySelector('.down')

// navbar toggle
navToggle.addEventListener('click', ()=>{
    if(navItems.style.display === 'none'){
        navItems.style.display = 'flex'
    }else{
        navItems.style.display = 'none'
    }
})
// day/night toggle
btnColor.addEventListener("click", ()=>{
    btnDay.classList.toggle("block")
    btnDark.classList.toggle("block")

    // change body color according to toggle
    if(btnDay.classList.contains('block')){
        body.classList.add("dark-theme")
        body.style.color = "white"
    }
    else{
        body.classList.remove("dark-theme")
        body.style.color = "black"
    }
})

// scroll up/down

up.addEventListener('click', ()=>{
    scrollTo({top:0, behavior: 'smooth'})
})
down.addEventListener('click', ()=>{
    scrollTo({top: document.body.scrollHeight, behavior: 'smooth' })
})



