import cipher from './cipher.js';

document.getElementById('button-one').addEventListener('click', encrypt)
document.getElementById('button-two').addEventListener('click', decrypt)

function encrypt() {
    let text = document.getElementById('encrypted-text').value
    text = text.toUpperCase()
    let number = document.getElementById('number-cripto').value
    number = parseInt(number)
    let teste = cipher.encode(number, text)
    document.getElementById('decrypted').innerHTML = teste

}


function decrypt() {
    let text = document.getElementById('encrypted-text').value
    text = text.toUpperCase()
    let number = document.getElementById('number-cripto').value
    number = parseInt(number)
    let teste = cipher.decode(number, text)
    document.getElementById('decrypted').innerHTML = teste
    
}




