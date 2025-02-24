function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    
    //tambem poderia ser assim:

    //if(html.classList.contains(`light`)){
    //    html.classList.remove(`light`)
    //} else{
    //    html.classList.add(`light`)
    //}


    //para trocar imagem quando estiver no light.
    //pegar a tag img
    //substituir a imagem
    //se tiver light mode, adicionar imagem light
    //se tiver sem light mode, manter a imagem normal
    const img=document.querySelector(`#profile img`)
    if (html.classList.contains(`light`)){
        img.setAttribute(`src`,`./assets/assets/avatar-light.png`)
    } else{
        img.setAttribute(`src`,`./assets/assets/avatar.png`)
    }
}