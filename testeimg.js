var imgAgora = 0
var img = document.createElement('img')
img.setAttribute('id', 'image')

function carregar(){
    var timeImg = document.querySelector('#timeImg')
    img.setAttribute('src', 'dia.jpg')
    timeImg.appendChild(img)
}

function changeImage(lado){

    var timeImg = document.querySelector('#timeImg')
    switch(imgAgora){
        case 0:
            if(lado == 1){
                img.setAttribute('src', 'noite.jpg')
                imgAgora = 2
            }else{
                img.setAttribute('src', 'tarde.jpg')
                imgAgora = 1
            }
            break
        case 1:
            if(lado == 1){
                img.setAttribute('src', 'dia.jpg')
                imgAgora = 0
            } else{
                img.setAttribute('src', 'noite.jpg')
                imgAgora = 2
            }
            break
        case 2:
            if(lado == 1){
                img.setAttribute('src', 'tarde.jpg')
                imgAgora = 1
            } else{
                img.setAttribute('src', 'dia.jpg')
                imgAgora = 0
            }
            break
    }

    timeImg.appendChild(img)

    if(imgAgora == 0){
        document.body.style.background = "rgb(252, 190, 76)"
    } else if(imgAgora == 1){
        document.body.style.background = "rgb(63, 47, 47)"
    } else{
        document.body.style.background = "#606060"
    }

    var incremento = 0
    var decremento = "-30"
    img.style.opacity = incremento

    var fadein = setInterval(function(){
        img.style.opacity = incremento
        img.style.top = `${decremento}px`
        incremento += .05
        decremento -= "-3"

        if(incremento > 1){
            clearInterval(fadein)
        }
    }, 25)
}