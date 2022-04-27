const { Filme } = require('../models');

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
            }
        });
        return res.render('lista', { filmesCadastrados: filme })
    },
    edit: async (req, res) => {
        const { id } = req.params;
        const filme = await Filme.findByPk(id);
        return res.render('editar', { filme })
    },
    update: async (req, res) => {
        const { id } = req.params;
        const { filme } = req.body;
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
        const meuFilme = await Filme.findOne({
            where: {
                id
            }
        })
        meuFilme.titulo = filme
        meuFilme.ano = ano
        meuFilme.Plataforma = Plataforma
        meuFilme.humores = humores
        await meuFilme.save()
        return res.redirect("/lista")
    },
    delete: async (req, res) => {
        const filmes_id = req.params.id;
        await Filme.destroy({ where: { id: `${filmes_id}` } });
        return res.redirect("/lista")
    }

}
module.exports = operacionalController;