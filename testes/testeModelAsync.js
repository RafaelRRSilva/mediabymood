const e = require("express");
const { Filme, Humor } = require("../models");

let id_humor = 3

let busca = async () => {
  let promise = await Humor.findAll({
    include: ["filme", "nivel"],
    where: {
      id: id_humor
    }
  });

  console.log(promise[0].toJSON())
};

busca();