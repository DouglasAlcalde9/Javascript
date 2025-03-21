function vereficar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=15 && idade <50){
                img.setAttribute('src' , 'imagens/jovem-H.png')
            }
            else{
                img.setAttribute('src' , 'imagens/velho-H.png')
            }
                
        }
        else if ( fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=15 && idade < 50){
                img.setAttribute('src' , 'imagens/nova-M.png')
            }
            else{
                img.setAttribute('src' , 'imagens/velha-M.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        res.style.textAlign = 'center'
    
    }

}