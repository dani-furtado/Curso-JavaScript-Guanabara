function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
        gênero = 'um homem'
            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'Criança menino.jpg')
            } else if (idade < 25){
                img.setAttribute('src', 'Homem jovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'Homem adulto.jpg')
            } else {
                img.setAttribute('src', 'Homem idoso.jpg')
            }
       } else if (fsex[1].checked){
        gênero = 'uma mulher'
            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'Criança menina.jpg')
            } else if (idade < 25){
                img.setAttribute('src', 'Mulher jovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'Mulher adulta.jpg')
            } else {
                img.setAttribute('src', 'Mulher idosa.jpg')
            }
       }
       res.innerHTML = `Você é ${gênero} com ${idade} anos.`
       res.style.textAlign = 'center'
       res.appendChild(img)
    }
}
