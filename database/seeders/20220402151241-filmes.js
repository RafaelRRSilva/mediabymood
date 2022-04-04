'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      'filmes',
      [
        {
        id: 1,
        titulo: "Le fabuleux destin d'Amélie Poulain",
        ano: 2001,
        duracao: 122,
        resumo: "O filme conta a história de Amélie, uma menina que cresce isolada das outras crianças. Isso acontece porque o seu pai acha que Amélie possuí uma anomalia no coração, já que este bate muito rápido durante os exames mensais que o pai faz na menina. Na verdade, Amélie fica nervosa com este raro contato físico com o pai. Por isso, e somente por isso, o seu coração bate mais rápido que o normal. Seus pais, então, privam Amélie de frequentar escola e ter contato com outras crianças. A sua mãe, que é professora, é quem a alfabetiza até falecer. A sua infância e a morte prematura de sua mãe acabam por influenciar fortemente o desenvolvimento de Amélie e a forma como ela se relaciona com as pessoas e com o mundo depois de adulta.",
        imagem: "img/posters/Amelie.jpg"
      },
      {
        id: 2,
        titulo: "Baby Driver",
        ano: 2017,
        duracao: 113,
        resumo: "O jovem e talentoso motorista Baby (Ansel Elgort) confia na batida pessoal de sua trilha sonora preferida para ser o melhor no mundo do crime. Quando ele conhece a garota de seus sonhos (Lily James), Baby vê uma chance de abandonar sua vida criminosa e fazer uma fuga limpa. Mas depois de ser coagido a trabalhar para um criminoso misterioso (Kevin Spacey), ele deve enfrentar a música quando um assalto mal-intencionado ameaça sua vida, amor e chance de liberdade.",
        imagem: "img/posters/Baby_Driver.jpg"
      },
      {
        id: 3,
        titulo: "Her",
        ano: 2013,
        duracao: 126,
        resumo: "Theodore (Joaquin Phoenix) é um escritor solitário, que acaba de comprar um novo sistema operacional para seu computador. Para a sua surpresa, ele acaba se apaixonando pela voz deste programa informático, dando início a uma relação amorosa entre ambos. Esta história de amor incomum explora a relação entre o homem contemporâneo e a tecnologia.",
        imagem: "img/posters/Her.jpg"
      },
      {
        id: 4,
        titulo: "Hereditary",
        ano: 2008,
        duracao: 127,
        resumo: "Após a morte da reclusa avó, a família Graham começa a desvendar algumas coisas. Mesmo após a partida da matriarca, ela permanece como se fosse um sombra sobre a família, especialmente sobre a solitária neta adolescente, Charlie, por quem ela sempre manteve uma fascinação não usual. Com um crescente terror tomando conta da casa, a família explora lugares mais escuros para escapar do infeliz destino que herdaram.",
        imagem: "img/posters/Hereditary.jpg"
      },
      {
        id: 5,
        titulo: "Soul",
        ano: 2020,
        duracao: 101,
        resumo: "Joe Gardner é um professor de música do ensino médio que sonhava em ser um músico de jazz, e finalmente teve a chance depois de impressionar outros músicos durante um ensaio aberto no Half Note Club. No entanto, um acidente faz com que sua alma seja separada de seu corpo e transportada para o 'Seminário Você', um centro no qual as almas se desenvolvem e ganham paixões antes de serem transportadas para um recém-nascido. Joe deve trabalhar com almas em treinamento, como 22, uma alma com uma visão obscura da vida depois de ficar presa por anos no Seminário Você, a fim de retornar à Terra.",
        imagem: "img/posters/Soul.jpg"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('filmes', null, {});

  }
};
