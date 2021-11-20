const calcular = document.getElementById('calcular');

function calculo () {

    const nome = document.getElementById('nome').value;
    const mensais = document.getElementById('mensais').value;
    const juros = document.getElementById('juros').value;
    const numero = document.getElementById('numero').value;

    if (nome !== ''&& mensais !== '' && juros !== ''  && numero !== '') {

            const taxa_real = juros/100;
            const metade = ((((1 + taxa_real )** numero) - 1)/taxa_real) ;
            const total = mensais * metade .toFixed(2);
      
            resultado.textContent = `${nome}, se você aplicar R$ ${mensais}, à taxa de juros de ${juros}% ao mês, durante ${numero} meses, acumulará uma poupança de R$${total}`;

    }
    else {
        resultado.textContent = 'Preencha os campos.';
    }

}
calcular.addEventListener('click', calculo);