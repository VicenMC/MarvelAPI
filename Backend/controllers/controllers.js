const { default: axios } = require("axios");
var md5 = require("md5");

require("dotenv").config();

//http://api.countrylayer.com/v2/all?access_key=e92fb250090460d9d89a034718115410

module.exports = {
  askCharacters: () => {
    let obj = axios
      .get(
        `https://gateway.marvel.com/v1/public/characters?offset=0&${process.env.REACT_APP_MARVELURL}`
      )
      .then((resultado) => (resultado = resultado.data))
      .then((resultado) => (resultado = resultado.data))
      .then((resultado) => (resultado = resultado.results))

      .then((resultado) => {
        let objeto = [];
        resultado.map((e) => {
          objeto.push({
            id: e.id,
            name: e.name,
            description: e.description,
            img: e.thumbnail,
            comics: e.comics,
            stories: e.stories,
            events: e.stories,
            series: e.series,
          });
        });
        return objeto;
      });
    return obj;
  },
  askComics: () => {
    let obj = axios
      .get(
        `https://gateway.marvel.com/v1/public/comics?offset=0&${process.env.REACT_APP_MARVELURL}`
      )
      .then((resultado) => (resultado = resultado.data))
      .then((resultado) => (resultado = resultado.data))
      .then((resultado) => (resultado = resultado.results))

      .then((resultado) => {
        let objeto = [];
        resultado.map((e) => {
          objeto.push({
            id: e.id,
            title: e.title,
            issueNumber: e.issueNumber,
            variantDescription: e.variantDescription,
            format: e.format,
            pages: e.pageCount,
            series: e.series,
            variants: e.variants,
            collections: e.collections,
            dates: e.dates,
            prices: e.prices,
            img: e.thumbnail,
            images: e.images,
            creators: e.creators,
            characters: e.characters,
            stories: e.stories,
            events: e.events,
          });
        });
        return objeto;
      });
    return obj;
  },
  askCreators: () => {
    let obj = axios
      .get(
        `https://gateway.marvel.com/v1/public/creators?offset=0&${process.env.REACT_APP_MARVELURL}`
      )
      .then((resultado) => (resultado = resultado.data))
      .then((resultado) => (resultado = resultado.data))
      .then((resultado) => (resultado = resultado.results))

      .then((resultado) => {
        let objeto = [];
        resultado.map((e) => {
          objeto.push({
            id: e.id,
            name: e.fullName,
            img: e.thumbnail,
            series: e.series,
            stories: e.stories,
            comics: e.comics,
            events: e.events,
          });
        });
        return objeto;
      });
    return obj;
  },
  askEvents: () => {
    let obj = axios
      .get(
        `https://gateway.marvel.com/v1/public/events?offset=0&${process.env.REACT_APP_MARVELURL}`
      )
      .then((resultado) => (resultado = resultado.data))
      .then((resultado) => (resultado = resultado.data))
      .then((resultado) => (resultado = resultado.results))

      .then((resultado) => {
        let objeto = [];
        resultado.map((e) => {
          objeto.push({
            id: e.id,
            title: e.title,
            description: e.description,
            start: e.start,
            end: e.end,
            img: e.thumbnail,
            comics: e.comics,
            stories: e.stories,
            series: e.series,
            characters: e.characters,
            creators: e.creators,
            next: e.next,
            previous: e.previous,
          });
        });
        return objeto;
      });
    return obj;
  },
  askSeries: () => {
    let obj = axios
      .get(
        `https://gateway.marvel.com/v1/public/series?offset=0&ts=1&${process.env.REACT_APP_MARVELURL}`
      )
      .then((resultado) => (resultado = resultado.data))
      .then((resultado) => (resultado = resultado.data))
      .then((resultado) => (resultado = resultado.results))

      .then((resultado) => {
        let objeto = [];
        resultado.map((e) => {
          objeto.push({
            id: e.id,
            title: e.title,
            description: e.description,
            start: e.startYear,
            end: e.endYear,
            rating: e.rating,
            img: e.thumbnail,
            comics: e.comics,
            stories: e.stories,
            events: e.events,
            characters: e.characters,
            creators: e.creators,
            next: e.next,
            previous: e.previous,
          });
        });
        return objeto;
      });
    return obj;
  },
  askStories: () => {
    let obj = axios
      .get(
        `https://gateway.marvel.com/v1/public/stories?offset=0&${process.env.REACT_APP_MARVELURL}`
      )
      .then((resultado) => (resultado = resultado.data))
      .then((resultado) => (resultado = resultado.data))
      .then((resultado) => (resultado = resultado.results))

      .then((resultado) => {
        let objeto = [];
        resultado.map((e) => {
          objeto.push({
            id: e.id,
            title: e.title,
            description: e.description,
            type: e.type,
            img: e.thumbnail,
            comics: e.comics,
            series: e.series,
            events: e.events,
            characters: e.characters,
            creators: e.creators,
            originalIssue: e.originalIssue,
          });
        });
        return objeto;
      });
    return obj;
  },
};
