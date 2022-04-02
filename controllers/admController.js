const {Filme } = require('../models');
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
            novoFilme.titulo ="filme";

            novoFilme.ano = 2020
            novoFilme.resumo = "lalala"
            novoFilme.duracao = 90
            novoFilme.imagem = "/img/" + imagem
            await novoFilme.save()
            return res.redirect('/formulario');

        } catch (error) {
console.trace(error);
        }

    }
}
module.exports = admController;