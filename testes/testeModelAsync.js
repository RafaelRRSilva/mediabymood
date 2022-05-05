const e = require("express");
const { Filme, Humor, sequelize } = require("../models");

let busca = async () => {

  let promise = await Humor.findAll();
  let arrayHumores = [];

  promise.forEach(e => {
    arrayHumores.push(e.toJSON());
  });

  console.log(arrayHumores);

  sequelize.close()
}

busca()






/*
let id_humor = 3

let busca = async () => {
  let promise = await Humor.findAll({
    include: ["filme", "nivel"],
    where: {
      id: id_humor
    }
  });

  console.log(promise[0].toJSON())
  sequelize.close()
};

busca();
*/