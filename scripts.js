
function somar() {

    const n1 = window.document.getElementById('input1');

    const n2 = window.document.getElementById('input2');

    const res = window.document.getElementById('res');


    const number1Input = Number(n1.value); //variavel conversor **
    const number2Input = Number(n2.value);//variavel conversor **

    const soma = number1Input + number2Input


    res.innerHTML = ` A Soma entre ${number1Input} e ${number2Input} é : <strong>${soma}</strong>`
}
