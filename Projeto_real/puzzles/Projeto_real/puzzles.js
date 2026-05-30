function ver_senha() {                                      // ele verifica se a senha digitada é a correta.
    tsenha = document.getElementById('txtsenha')            // pega o txt da senha e transforma em uma variavel
    senha = String(tsenha.value)                            // coloca uma variavel para absoorver o valor de string da senha
    if (senha == 'arceus') {                                // verifica se é a senha correta
        alert('Bem vindo usuário!')                         // se for a senha correta, emite o alerta dizendo que a senha está correta
        window.location.href = 'navegador.html'             // se for a senha correta, manda o usuário para a página navegador.html
    } else {                                                // se nao for a senha correta
        alert('Senha incorreta, tente novamente')           // se não for a senha correta, emite um alerta dizendo que a senha está incorreta
    }
    tsenha.value = ''                                       // coloca a variavel que absorveu a senha digitada em branco
    tsenha.focus()                                          // coloca o foco no botão da senha
}       
function verificar_1() {                                    
    tsenha = document.getElementById('txtsenha')
    senha = String(tsenha.value)
    if (senha == 'giratina') {
        alert('Senha correta! Entrando no e-mail.')
        window.location.href = '../emails/email3.html'
    } else {
        alert('Senha incorreta, tente novamente')
    }
}
function verificar_2() {
    tsenha = document.getElementById('txtsenha')
    senha = String(tsenha.value)
    if (senha == 'palkia') {
        alert('Senha correta! Entrando no e-mail.')
        window.location.href = '../emails/email6.html'
    } else {
        alert('Senha incorreta, tente novamente')
    }
    tsenha.value = ''
    tsenha.focus()
}
function verificar_3() {
    tsenha = document.getElementById('txtsenha')
    senha = String(tsenha.value)
    if (senha == 'dialga') {
        alert('Senha correta! Entrando no e-mail.')
        window.location.href = '../emails/email7.html'
    } else {
        alert('Senha incorreta, tente novamente')
    }
    tsenha.value = ''
    tsenha.focus()
}
function verificar_4() {
    tsenha = document.getElementById('txtsenha')
    senha = String(tsenha.value)
    if (senha == 'gipadi') {
        alert('Senha correta! Entrando no e-mail.')
        window.location.href = 'senha_final.html'
    } else {
        alert('Senha incorreta, tente novamente')
    }
    tsenha.value = ''
    tsenha.focus()
}
function verificar_5() {
    tsenha = document.getElementById('txtsenha')
    senha = String(tsenha.value)
    if (senha == 'necrozma') {
        alert('Senha correta! Entrando no e-mail.')
        window.location.href = '../flicks/flick01.html'
    } else {
        alert('Senha incorreta, tente novamente')
    }
    tsenha.value = ''
    tsenha.focus()
}
function emerald() {                        // quando essa função é chamada, ela emite um alerta
    alert('NÃO FAÇA ISSO... SAIA DISSO')
}
function scratch() {
    alert('naaaaah, pra que né')
}
function negada() {
    alert('Negado.')
}