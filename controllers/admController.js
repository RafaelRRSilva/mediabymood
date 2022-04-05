const {Filme} = require('../models');
const admController = {
   form: (req, res) => {
         res.render('formulario');
    },

    postForm: async (req, res) => {
        try {
            const { nome, Plataforma,duracao, humores,ano,resumo } = req.body;

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
            const novofilme = new Filme();
            novofilme.titulo = nome
            novofilme.humores = humores
            novofilme.Plataforma = Plataforma
            novofilme.ano = ano
            novofilme.resumo = resumo
            novofilme.duracao = duracao
            novofilme.imagem = "/img/cadastro" + imagem
            await novofilme.save()
            return res.redirect('/formulario');

        } catch (error) {
console.trace(error);
        }

    }
}
module.exports= admController;