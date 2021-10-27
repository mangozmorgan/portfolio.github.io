document.querySelectorAll('.contactEvent').forEach(element=>{
    element.addEventListener('click',(e)=>{
        document.querySelector('.modalContact').classList.toggle('modalContactOpen')
    })
})
