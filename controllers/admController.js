const { Filme} = require('../models');
const {Humor,Filmes_has_Humores} = require('../models');
 const {validationResult} = require('express-validator');
const admController = {
    
    form: async (req, res) => {
        let humores = await Humor.findAll()
        console.log(req.session.usuario.eh_admin)
        res.render('formulario',{humores});
    },
   

    postForm: async (req, res) => {
        try {
           let erros = validationResult (req)
           console.log(erros.isEmpty())
       
           if (erros.isEmpty()){

          
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
        }else{
            req.app.locals.errors=erros.mapped();
            return res.redirect('/formulario')
            res.render("formulario", { errors: erros.mapped(), old: req.body });
        }

        } catch (error) {
            console.trace(error);
        }

    },
    


}
module.exports = admController;