function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora <12) {
        img.src = 'Manha.jpg'
        document.body.style.background = '#F9F182'
    } else if (hora >=12 && hora <= 18) {
        // boa tarde!
        img.src = 'Tarde.jpg'
        document.body.style.background = '#F9D582'
    } else {
        // boa noite!
        img.src = 'Noite.jpg'
        document.body.style.background = '#766F9E'
    }
}