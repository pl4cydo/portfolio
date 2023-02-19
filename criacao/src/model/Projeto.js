export let num = 0

class Projeto {

    constructor(ti, te, im, li, tl, da) {
        this.titulo = ti;
        this.texto = te;
        this.imagem = im;
        this.link = li;
        this.timeLine = tl;
        this.date = da;
    }

}

export const arrPro = [
    new Projeto(
        "RPG: Final IFPE",
        "Projeto de conclusão da cadeira de Lógica da Programação ultilizando o framework SVELTE. O jogo passa pela jornada do estudante até chegar ao campus IFPE e tem inspirações em Pokémon e Final Fantasy.",
        [
            "./src/images/batalha1.png",
            "./src/images/batalha2.png",
            "./src/images/batalha3.png"
        ],
        "https://github.com/pl4cydo/IFPE-projeto-svelte--RPG",
        0,
        "15/07/2022"
    ),
    new Projeto(
        "JAVA JFRAME",
        "Projeto de finalização da cadeira de Programação Orientada a Objetos. O objetivo foi ter um CRUD funcional usando JFRAME e conexão ao banco de dados MySQL.",
        [
            "./src/images/Java.png",
            "./src/images/Java2.png",
            "./src/images/Java3.png"
        ],
        "https://github.com/pl4cydo/JAVA-CRUD-JFRAME",
        1,
        "05/02/2023"
    ), 
    new Projeto(
        "Dustry",
        "Projeto onde o objetivo foi criar um jogo educativo e divertido para pessoas recém chegadas em um ambiente fabril. O jogo perpassa o primeiro dia do Dustry em uma indústria. Esse Projeto foi feito com Svelte, API em PHP e um banco MySQL.",
        [
            "./src/images/dustry.png",
            "./src/images/dustry2.png",
            "./src/images/dustry3.png"
        ],
        "https://github.com/pl4cydo/IFPE-IPI-LOGISTICA",
        2,
        "03/09/2022"
    ), 
    new Projeto(
        "Web1-CRUD",
        "Projeto de conclusão da cadeira de Desenvolvimento Web 1 no Curso Informática para Internet no IFPE. O objetivo foi criar um CRUD ultilizando SVELTE, PHP e MySQL.",
        [
            "./src/images/web2.png",
            "./src/images/web1.png",
            "./src/images/web3.png"
        ],
        "https://github.com/pl4cydo/CRUD-SVELTE-PHP-MYSQL",
        3,
        "04/02/2023"
    ), 
    new Projeto(
        "Portfólio",
        "Projeto de criação de um portfólio. O objetivo é criar uma página dinâmica utilizando ReactJs (Pela primeira vez) para sempre que criar um novo projeto, eu possa simplesmente criar um novo objeto e toda a página se reajustar.",
        [
            "./src/images/portfolio1.png",
            "./src/images/portfolio2.png",
            "./src/images/portfolio1.png"        
        ],
        "https://github.com/pl4cydo/portifolio",
        4,
        "14/02/2023"
    )
];



