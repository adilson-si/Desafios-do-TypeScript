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

enum TipoTrabalho {
    Desenvolvedor,
    Engenheiro,
    Presidente
}

type CaractPessoal = {
    nome: string,
    idade: number,
    profissao: TipoTrabalho
}

let pessoaUm: CaractPessoal = {
    nome: 'Adilson',
    idade: 50,
    profissao: TipoTrabalho.Desenvolvedor
};

let pessoaDois: CaractPessoal = {
    nome: 'Michelen',
    idade: 40,
    profissao: TipoTrabalho.Engenheiro
};

console.log("Log desafio 2 TypeScript")