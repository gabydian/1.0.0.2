let anoAtual =  new Date().getFullYear();
let anoNascimento = 2004;
const idade = anoAtual - anoNascimento;
let nomeUsuario = 'Gab';
let template = null;
if(idade >= 18){
    template =  `Usuário ${nomeUsuario} autorizado para fazer a compra`;
} else {   
    template =  `Usuário ${nomeUsuario} não autorizado para fazer a compra`;

}
console.log(template);