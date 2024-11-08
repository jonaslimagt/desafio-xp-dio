/*
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

class Heroi {
    nome;
    xp;
    nivel;

    constructor(nome, xp) {
        this.nome = nome;
        this.xp = xp;

        switch (true) {
            case this.xp  <= 1000:
                this.nivel = "Ferro";
                break;
            case this.xp <= 2000:
                this.nivel = "Bronze";
                break;
            case this.xp <= 5000:
                this.nivel = "Prata";
                break;
            case this.xp <= 7000:
                this.nivel = "Ouro";
                break;
            case this.xp <= 8000:
                this.nivel = "Platina";
                break;
            case this.xp <= 9000:
                this.nivel = "Ascendente";
                break;
            case this.xp <= 10000:
                this.nivel = "Imortal";
                break;
            default:
                this.nivel = "Radiante";
                break;
        }
    }
}

function main() {
    /*let nome = prompt("Qual o nome do herói?");
    let xp = parseInt(prompt("Qual o XP do herói?"))*/

    const nome = process.argv[2];
    const xp = process.argv[3];
    
    let heroi = new Heroi(nome, xp);
    console.log(`O Herói de nome ${heroi.nome} está no nível de ${heroi.nivel}`);
}

main();