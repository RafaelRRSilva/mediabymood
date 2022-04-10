const e = require("express");
const { Filme, Humor } = require("../models");

let id_humor = 3

let busca = async () => {
  let promise = await Humor.findAll({
    include: "filme",
    where: {
      id: id_humor
    }
  });

  console.log(promise[0].toJSON())
};

busca();

// --------------------------------------------------------

// Capturando id da URL
let humor_sel = req.params.id_humor

// Importação de Models
let filmes = await Filme.findAll(
  {
    include: 'humor'
  }
)

let humores = await Humor.findAll(
  {
    /*
    where: {
      id: humor_sel
    },
    */
    include: 'filme'
  }
);

// Selecionando array de humores segundo o req.params
let filmes_do_humor = humores[humor_sel - 1]

console.log(filmes_do_humor)

// Número aleatorio dentro de humor selecionado
let num_alea = Math.floor(Math.random()* filmes_do_humor.filme.length);

// Escolha do filme de forma aleatória
let filme_aleatorio = filmes_do_humor.filme[num_alea].toJSON();

// Envio das informações para a view
res.render("indicacao", {filme_aleatorio});