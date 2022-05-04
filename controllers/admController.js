const { Filme} = require('../models');
const {Humor,Filmes_has_Humores} = require('../models');
const admController = {
    
    form: async (req, res) => {
        let humores = await Humor.findAll()
        res.render('formulario',{humores});
    },
   

    postForm: async (req, res) => {
        try {
            const { nome, duracao, Humores, ano, resumo } = req.body;

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
            novofilme.ano = ano
            novofilme.resumo = resumo
            novofilme.duracao = duracao
            novofilme.imagem = "/img/posters/" + imagem
            const filmeId = await novofilme.save()

            if (Array.isArray(Humores)){
                Humores.forEach(async humor=>{
                await Filmes_has_Humores.create({
                filmes_id:filmeId.id,
                humores_id:humor,
                nivel:1
                })
                })
            } else {
                await Filmes_has_Humores.create({
                    filmes_id:filmeId.id,
                    humores_id:Humores,
                    nivel:1
                    })
            }
            req.app.locals.mensagemCadastroFilme= 'filme cadastrado com sucesso'
            return res.redirect('/formulario');

        } catch (error) {
            console.trace(error);
        }

    },
    


}
module.exports = admController;