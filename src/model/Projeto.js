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

const pro1 = new Projeto(
    "RPG",
    "Projeto RPG - Supervisionado pelo professor de Lógica da programação Allan Lima do IFPE Igarassu - Apresentado na Demo Week 2022.1", 
    "./src/images/batalha.png", 
    "https://github.com/pl4cydo/IFPE-projeto-svelte--RPG", 
    0, 
    "15/07/2022"
);
const pro2 = new Projeto(
    "JAVA-CRUD-JFRAME",
    "Projeto RPG - Supervisionado pelo professor de Lógica da programação Allan Lima do IFPE Igarassu - Apresentado na Demo Week 2022.1", 
    "./src/images/java2.png", 
    "https://github.com/pl4cydo/JAVA-CRUD-JFRAME", 
    1, 
    "05/02/2023"
);
const pro3 = new Projeto(
    "Dustry",
    "Projeto interdisciplinar entre o curso de Informática para Internet e Logística do Instituto Federal de Educação, Ciência e Tecnologia de Pernambuco - Campus Igarassu.", 
    "./src/images/dustry.png", 
    "https://github.com/pl4cydo/IFPE-IPI-LOGISTICA", 
    2, 
    "03/09/2022"
);
const pro4 = new Projeto(
    "WEB1-CRUD",
    "Projeto de conclusão da cadeira de Desenvolvimento Web 1 no Curso Informática para Internet no Instituto Federal de Educação, Ciência e Tecnologia de Pernambuco.", 
    "./src/images/web1.png", 
    "https://github.com/pl4cydo/CRUD-SVELTE-PHP-MYSQL", 
    3, 
    "04/02/2023"
);
const pro5 = new Projeto(
    "Portifolio",
    "Projeto de criação de um portifolio dinamico onde objetos que compoem projetos possam ser inseridos e a pagna ser reajusta com a inserção.", 
    "./src/images/web1.png", 
    "https://github.com/pl4cydo/portifolio", 
    4, 
    "14/02/2023"
);


export const arrPro = [pro1, pro2, pro3, pro4, pro5];



