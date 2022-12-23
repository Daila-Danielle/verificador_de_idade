function verificar(){
    var data = new Date() 
    var ano = data.getFullYear()
    var ano_nasc = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (ano_nasc.value.length == 0 || ano_nasc.value> ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        var sexo = window.document.getElementsByName('radtext')
        var idade = ano - Number(ano_nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','img')
        if (sexo[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade<10){
                img.setAttribute('src','img/criancaH.jpg')
                
            }else if(idade>10 && idade<55){
                img.setAttribute('src','img/jovemH.jpg')
            }else{
                img.setAttribute('src','img/idosoH.jpg')
            }

        }else if (sexo[1].checked){
            genero = 'Mulher'
            if(idade>=0 && idade<10){
                img.setAttribute('src','img/criancaM.jpg')
                
            }else if(idade>10 && idade<55){
                img.setAttribute('src','img/jovemM.jpg')
            }else{
                img.setAttribute('src','img/idosoM.jpg')
            }

        }
        function isEqual(value1, value2) {

            return value1, value2
            
            }
        

        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        }
}