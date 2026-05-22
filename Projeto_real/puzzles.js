function ver_senha() {
    tsenha = document.getElementById('txtsenha')
    senha = String(tsenha.value)
    if (senha == 'arceus') {
        alert('Bem vindo usuário!')
        window.location.href = 'navegador.html'
    } else {
        alert('Senha incorreta, tente novamente')
    }
}
function verificar_1() {
    tsenha = document.getElementById('txtsenha')
    senha = String(tsenha.value)
    if (senha == 'giratina') {
        alert('Senha correta! Entrando no e-mail.')
        window.location.href = '../emails/email1.html'
    } else {
        alert('Senha incorreta, tente novamente')
    }
}
function verificar_2() {
    tsenha = document.getElementById('txtsenha')
    senha = String(tsenha.value)
    if (senha == 'palkia') {
        alert('Senha correta! Entrando no e-mail.')
        window.location.href = '../emails/email2.html'
    } else {
        alert('Senha incorreta, tente novamente')
    }
}
function verificar_3() {
    tsenha = document.getElementById('txtsenha')
    senha = String(tsenha.value)
    if (senha == 'dialga') {
        alert('Senha correta! Entrando no e-mail.')
        window.location.href = '../emails/email3.html'
    } else {
        alert('Senha incorreta, tente novamente')
    }
}