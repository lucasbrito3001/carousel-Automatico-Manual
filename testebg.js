var cont = 1
function carregar(){
    var img = document.createElement('img')
    var timeImg = document.querySelector('#timeImg')
    img.setAttribute('id', 'image')

    img.setAttribute('src', 'dia.jpg')

    setInterval(function(){
        switch(cont){
            case 0:
                img.setAttribute('src', 'dia.jpg')
                cont ++
                break
            case 1:
                img.setAttribute('src', 'tarde.jpg')
                cont ++
                break
            
            case 2:
                img.setAttribute('src', 'noite.jpg')
                cont = 0
                break
        }
    }, 4000)
    timeImg.appendChild(img)
}