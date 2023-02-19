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
        "Projeto de conclusão da cadeira de Lógica da Programação. O jogo passa pela jornada do estudante até chegar ao campus IFPE e tem inspirações em Pokémon e Final Fantasy",
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
        "Projeto de finalização da cadeira de Programação Orientada a Objetos. O objeto é ter um CRUD funcional usando JFRAME e conexão ao banco de dados MySQL.",
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
        "Projeto em parceria com o curso de Logistica do IFPE onde o objetivo é ter um jogo que seja educativo e divertido para pessoas recem chegadas em um ambiente fabril. O jogo perpaça o primeiro dia do Dustry em uma industria.",
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
        "Projeto de conclusão da cadeira de Desenvolvimento Web 1 no Curso Informática para Internet no IFPE. O objetivo é criar um CRUD ultilizando SVELTE, PHP e MySQL.",
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
        "Projeto de criação de um portifolio. O objetivo é criar uma págna dinamica ultilizando ReactJs (Pela primeira vez) para que sempre que tiver um novo projeto o eu possa adcionalo e toda a págna se reajuste ultilizando Orientação a Objetos.",
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



