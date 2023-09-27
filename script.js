function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERROR] Verifique os dados e tente novamente!');
    }
    else{
        var fsex = document.getElementsByName('radsex');
        var fcor = document.getElementsByName('radcor');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        img.style.width = '55%'
        if(fsex[0].checked){
            genero = 'um Homem';
            if(fcor[0].checked){
                if(idade >= 0 && idade <= 2){
                    //bebe
                    img.setAttribute('src', 'bebe.png');
                    genero = 'um Bebê';
                }
                else if(idade > 2 && idade < 14){
                    //criança
                    img.setAttribute('src', 'menino.png');
                    genero = 'um Menino';
                }
                else if(idade >= 14 && idade <= 21){
                    //jovem
                    img.setAttribute('src', 'jovem homem.png');
                    genero = 'um Jovem';
                }
                else if(idade >= 21 && idade <= 50){
                    //adulto
                    img.setAttribute('src', 'homem.png');
                    genero = 'um Homem';
                }
                else if(idade >= 50 && idade <= 120){
                    //idoso
                    img.setAttribute('src', 'idoso.png');
                    genero = 'um Senhor';
                }
                else{
                    img.setAttribute('src', 'rip.png');
                    genero = 'um Idoso';

                }
            }
            else if(fcor[1].checked){
                if(idade >= 0 && idade <= 2){
                    //bebe
                    img.setAttribute('src', 'bebe negro.png');
                    genero = 'um Bebê';
                }
                else if(idade > 2 && idade < 14){
                    //criança
                    img.setAttribute('src', 'menino negro.png');
                    genero = 'um Menino';
                }
                else if(idade >= 14 && idade <= 21){
                    //jovem
                    img.setAttribute('src', 'jovem negro.png');
                    genero = 'um Jovem';
                }
                else if(idade >= 21 && idade <= 50){
                    //adulto
                    img.setAttribute('src', 'homem negro.png');
                    genero = 'um Homem';
                }
                else if(idade >= 50 && idade <= 120){
                    //idoso
                    img.setAttribute('src', 'idoso negro.png');
                    genero = 'um Senhor';
                }
                else{
                    img.setAttribute('src', 'rip.png');
                    genero = 'um Idoso';
                }
            }
        }
        else if(fsex[1].checked){
            genero = 'uma Mulher';
            
            if(fcor[0].checked){
                if(idade >= 0 && idade <= 2){
                    //bebe
                    img.setAttribute('src', 'bebe.png');
                    genero = 'um Bebê';
                }
                else if(idade > 2 && idade < 14){
                    //criança
                    img.setAttribute('src', 'menina.png');
                    genero = 'uma Menina';
                }
                else if(idade >= 14 && idade <= 21){
                    //jovem
                    img.setAttribute('src', 'jovem mulher.png');
                    genero = 'uma Jovem';
                }
                else if(idade >= 21 && idade <= 50){
                    //adulto
                    img.setAttribute('src', 'mulher.png');
                    genero = 'uma Mulher';
                }
                else if(idade >= 50 && idade <= 120){
                    //idoso
                    img.setAttribute('src', 'idosa.png');
                    genero = 'uma Senhora';
                }
                else{
                    img.setAttribute('src', 'rip.png');
                    genero = 'uma Idosa';
                }
            }
            else if(fcor[1].checked){
                if(idade >= 0 && idade <= 2){
                    //bebe
                    img.setAttribute('src', 'bebe negro.png');
                    genero = 'um Bebê';
                }
                else if(idade > 2 && idade < 14){
                    //criança
                    img.setAttribute('src', 'menina negra.png');
                    genero = 'uma Menina';
                }
                else if(idade >= 14 && idade <= 21){
                    //jovem
                    img.setAttribute('src', 'jovem negra.png');
                    genero = 'uma Jovem';
                }
                else if(idade >= 21 && idade <= 50){
                    //adulto
                    img.setAttribute('src', 'mulher negra.png');
                    genero = 'uma Mulher';
                }
                else if(idade >= 50 && idade <= 120){
                    //idoso
                    img.setAttribute('src', 'idosa negra.png');
                    genero = 'uma Senhora';
                }
                else{
                    img.setAttribute('src', 'rip.png');
                    genero = 'uma Idosa';
                }
            }
        }
        res.style.textAling ='center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img);
    }
}