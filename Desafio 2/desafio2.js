"use strict";
// Como podemos melhorar o esse código usando TS? 
/*
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/
var TipoTrabalho;
(function (TipoTrabalho) {
    TipoTrabalho[TipoTrabalho["Desenvolvedor"] = 0] = "Desenvolvedor";
    TipoTrabalho[TipoTrabalho["Engenheiro"] = 1] = "Engenheiro";
    TipoTrabalho[TipoTrabalho["Presidente"] = 2] = "Presidente";
})(TipoTrabalho || (TipoTrabalho = {}));
let pessoaUm = {
    nome: 'Adilson',
    idade: 50,
    profissao: TipoTrabalho.Desenvolvedor
};
let pessoaDois = {
    nome: 'Michelen',
    idade: 40,
    profissao: TipoTrabalho.Engenheiro
};
console.log("Log desafio 2 TypeScript");
