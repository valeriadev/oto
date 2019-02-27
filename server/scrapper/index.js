const baseUrl = "http://www.carlist.com/newcars/newcars.php";
const request = require("request-promise-native");
const cheerio = require("cheerio");
const db = require("../db");

async function run(req, res) {
  try {
    const mainHtml = await request(baseUrl);

    const allMakes = extractMake(mainHtml);

    for (let i = 0; i < allMakes.length; i++) {
      allMakes[i].models = await extractModels(allMakes[i].url);
    }

    const agg = {};

    for (let i = 0; i < allMakes.length; i++) {
      for (let j = 0; j < allMakes[i].models.length; j++) {
        const modelNameSplitted = allMakes[i].models[j].split(' ');
          for (let o = 0; o < modelNameSplitted.length; o++) {
            
            if(agg[allMakes[i].name+modelNameSplitted[o]] ||  modelNameSplitted[o] == " " || modelNameSplitted[o] == ' ' || !modelNameSplitted[o]){
                continue;
            }
            
            agg[allMakes[i].name+modelNameSplitted[o]] = true;

            new db.Car({
                make: allMakes[i].name,
                model: modelNameSplitted[o]
              }).save();         
          }
     
      }
    }

    res.json(allMakes);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

function extractMake(html) {
  const $ = cheerio.load(html);
  const allMakes = $("a.filter");

  const makes = [];

  for (let i = 0; i < allMakes.length; i++) {
    const makeName = allMakes[i].attribs.href.split("=")[1];

    makes.push({
      name: makeName,
      url: `${baseUrl}${allMakes[i].attribs.href}`,
      models: []
    });
  }

  return makes;
}

async function extractModels(url) {
  const makeHtml = await request(url);
  const $ = cheerio.load(makeHtml);
  const allModels = $("h2 a");

  const models = [];

  for (let i = 0; i < allModels.length; i++) {
    models.push(allModels[i].children[0].data);
  }

  return models;
}

module.exports = {
  run
};
