let btn = document.querySelector('.actions .btn')
let input = document.querySelector('#input-url')

btn.addEventListener('click', () => {
    input.select()
    navigator.clipboard.writeText(input.value);

    showAlert('Successfully copied.')
})

function showAlert(msg) {
    let old_div = document.querySelector('.alert')
    if(old_div) {
        old_div.parentNode.removeChild(old_div)
    }

    let div = document.createElement('div')
    div.className = 'alert alert-success'
    div.setAttribute('role', 'alert')

    setTimeout(() => div.classList.add('active'), 1)
    setTimeout(() => div.classList.remove('active'), 1200)

    div.innerHTML = msg
    document.body.appendChild(div)

}