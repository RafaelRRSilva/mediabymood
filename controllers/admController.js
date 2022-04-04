const {filme} = require('../models');
const admController = {
    form: (req, res) => {
        res.render('formulario');
    },

    postForm: async (req, res) => {
        try {
            const { nome, Plataforma, humores } = req.body;

            const imagem = req.file.filename;
            console.log(req.body, req.file);
            //process.exit();
            // const novo = await Filme.create({
            //     titulo: nome,
            //     ano:2020, 
            //     resumo: "lalala",
            //     duracao:90,
            //     imagem:"/img/"+imagem
            // })
            const novoFilme = new Filme();
            novoFilme.titulo = "filmes"

            novofilme.ano = 2020
            novofilme.resumo = "lalala"
            novofilme.duracao = 90
            novofilme.imagem = "/img/" + imagem
            await novofilme.save()
            return res.redirect('/formulario');

        } catch (error) {
console.trace(error);
        }

    }
}
module.exports= admController;