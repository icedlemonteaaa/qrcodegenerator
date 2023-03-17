function onSubmit(e) {
    e.preventDefault();
    clear()
    const userinput = document.getElementById('input').value
    generateQRCode(userinput)
}

function generateQRCode(userinput) {
    const qrcode = new QRCode('qrcode', {
        text: userinput
    })
}

function clear() {
    qrcode.innerHTML = ''
}
 
form.addEventListener('submit', onSubmit)