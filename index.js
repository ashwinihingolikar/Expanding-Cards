const panelSection = document.querySelectorAll('.panel')


//remove class function
function removeClass(){
    panelSection.forEach(panel =>{
        panel.classList.remove('active')
    })
}
//adding eventlistener 
panelSection.forEach( panel =>{
    panel.addEventListener('click', () =>{
        removeClass()
        panel.classList.add('active')
    })
})