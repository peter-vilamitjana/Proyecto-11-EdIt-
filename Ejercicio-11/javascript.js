// const estiloEstandar = document.querySelector('#estandar')
// const estiloRetro = document.querySelector('#retro')
// const estiloFuturo= document.querySelector('#futuro')


// estiloEstandar.addEventListener('clic', ()=>{
//     href.innerHTML = 'css/estilos.css'
//     // document.documentElement.style.setProperty
// })

// estiloRetro.addEventListener('clic', ()=>{
//     href.innerHTML = 'css/estilos-retro.css'
//     // document.documentElement.style.setProperty
// })

// estiloFuturo.addEventListener('clic', ()=>{
//     href.innerHTML = 'css/estilos-futuro.css'
//     // document.documentElement.style.setProperty
// })

function cambiarEstilo(hojaDeEstilo){
    document.getElementById('paginaDeEstilo').setAttribute('href', hojaDeEstilo);
}