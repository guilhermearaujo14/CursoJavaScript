
function calcular()
{
    
    var inicio = document.getElementById('txtinicio');
    var final = document.getElementById('txtfim');
    var passo = document.querySelector('input#passo');
    var msg = document.querySelector('div#msg');

    if(inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0)
    {
        msg.innerHTML = `Impossível contar!`
    }else{
        msg.innerHTML = `Contando: <br />`;
        var i = Number(inicio.value)
        var f = Number(final.value)
        var p = Number(passo.value)

        if(p <= 0)
        {
            alert(`Passo inválido considerando PASSO 1`)
            p = 1;
        }

        if(i < f)
        {
            for(var x = i; x <= f; x += p)
            {
                msg.innerHTML += ` ${x} `;
            }
        }else
        {
            for(var x = i; x >= f; x -= p)
            {
                msg.innerHTML += ` ${x} `
            }
        }
    }


   
    
}



