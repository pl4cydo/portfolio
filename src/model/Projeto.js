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

export const pro1 = new Projeto("test", "test", "test", "#", "test", "test");
export const pro2 = new Projeto("test2", "test2", "test2", "#", "test2", "test2");

