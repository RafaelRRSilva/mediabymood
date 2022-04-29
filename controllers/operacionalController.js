const { Filme } = require('../models');
const {Humor,Filmes_has_Humores} = require('../models');

const Sequelize = require('sequelize');
const Op = Sequelize.Op
const operacionalController = {

    search: async (req, res) => {
        const { key } = req.query;
        const filme = await Filme.findAll({
            where: {
                titulo: {
                    [Op.like]: `%${key}%`
                }
            },
            include:['humor']
        });
        return res.render('lista', { filmesCadastrados: filme })
    },
    edit: async (req, res) => {
        const { id } = req.params;
        const filme = await Filme.findByPk(id,{
            include:['humor']
        });
        const humores= await Humor.findAll();
        return res.render('editar', { filme,humores})
    },
    update: async (req, res) => {
        const { id } = req.params;
        const { filme,Humores,resumo,ano,duracao } = req.body;
        console.log(req.body)
        // const filmesCadastrados = await Filme.update({
        //     titulo:filme

        // },
        // {
        //     where:{
        //         id:id,
        //         // id_humores:id
        //     }


        // })
        const imagem = req.file.filename;
        const meuFilme = await Filme.findOne({
            where: {
                id
            }
        })
     
        meuFilme.titulo = filme
        meuFilme.ano = ano
        meuFilme.resumo= resumo
        meuFilme.duracao= duracao
      meuFilme.imagem = "/img/posters/" + imagem
        await meuFilme.save()

        await Filmes_has_Humores.destroy({
            where:{
                filmes_id:id
            }
        })
        if (Array.isArray(Humores)){
            Humores.forEach(async humor=>{
            await Filmes_has_Humores.create({
            filmes_id:id,
            humores_id:humor,
            nivel:1
            })
            })
        } else {
            await Filmes_has_Humores.create({
                filmes_id:id,
                humores_id:Humores,
                nivel:1
                })
        }
        return res.redirect("/lista")
    },
    delete: async (req, res) => {
        const filmes_id = req.params.id;
        await Filme.destroy({ where: { id:filmes_id } });
        return res.redirect("/lista")
    },


}
module.exports = operacionalController;