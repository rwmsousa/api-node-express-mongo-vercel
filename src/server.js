const express = require('express');
const bodyParser = require('body-parser'); // import body-parser to parse the body of the request
const { errorHandler } = require('./middlewares'); // import errorHandler - middleware of error
const router = require('../src/routes'); // import router from routes

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('dotenv').config()
// const { Configuration, OpenAIApi } = require("openai");
// const googleTrends = require('google-trends-api');
// const fs = require('fs');
// const path = require('path');


// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });

// route.get('/gen-article', async (req, res) => {

//     try {
//     let article = {};
//     article[ 'trends' ] = result[ 0 ]
//     article[ 'createdAt' ] = new Date().toLocaleDateString('pt-BR')
//     console.log('TRENDS:', article[ 'trends' ].articles)


//     // // KEYWORDS: EXTRAI AS PALAVRAS CHAVE DE UM CONJUNTO DE ARTIGOS DE CADA TEMA COLETADO
//     // console.log('---------- GERANDO PALAVRAS CHAVE ----------')
//     // const genKeywords = await openai.createCompletion({
//     //     model: "text-davinci-003",
//     //     prompt: `Extraia as 10 principais palavras chave dos artigos ${ article[ 'trends' ].articles } e adicione a um array de strings. Sua resposta deve ser apenas o array e não pode haver itens repetidos. Não considere os nomes ${ article[ 'trends' ].articles.map(art => art.source) }.`,
//     //     temperature: 0.9,
//     //     max_tokens: 500,
//     // })
//     // article[ 'keywords' ] = genKeywords.data.choices[ 0 ].text;
//     // console.log('KEYWORDS:', article[ 'keywords' ])


//     // // // CATEGORY: DEFINE A CATEGORIA DO ARTIGO COM BASE NOS ARTIGOS BASE.
//     // console.log('---------- DEFININDO A CATEGORIA ----------')
//     // const verifyCategory = await openai.createCompletion({
//     //     model: "text-davinci-003",
//     //     prompt: `Em qual das categorias abaixo, se enquadram os artigos ${ article[ 'trends' ].articles } : ${ BDcategories }. Sua resposta deve ser apenas um objeto com o formato {"1": "tecnologia"}, sem explicar do que o artigo se trata.`,
//     //     temperature: 0.9,
//     //     max_tokens: 40,
//     // })
//     // article[ 'category' ] = [verifyCategory.data.choices[ 0 ].text];
//     // console.log('CATEGORY:', article[ 'category' ])


//     // // // TITLE: CRIA TÍTULO ORIGINAL COM BASE NO CONJUNTO DE ARTIGOS.
//     // console.log('---------- GERANDO O TÍTULO ----------')
//     // const genTitle = await openai.createCompletion({
//     //     model: "text-davinci-003",
//     //     prompt: `Você é um especialista em SEO e rankeamento de artigos no Google. Crie um título original, para um artigo que terá o conteúdo com o mesmo tema dos artigos ${ article[ 'trends' ].articles }. Sua resposta deve ser apenas uma string com o título sem qualquer tipo de introdução como "Um possível título original para o artigo é:".`,
//     //     temperature: 0.9,
//     //     max_tokens: 500,
//     // })
//     // article[ 'title' ] = [genTitle.data.choices[ 0 ].text]
//     // console.log('TITLE:', article[ 'title' ])


//     // // // CONTENT: CRIA TEXTO DO ARTIGO
//     // console.log('---------- GERANDO CONTEÚDO ----------')
//     // const genContent = await openai.createCompletion({
//     //     model: "text-davinci-003",
//     //     prompt: `Você é um redator jovem, bem humorado, divertido e especialista em ${ article[ 'category' ] }. Crie um texto original para o artigo ${ article[ 'title' ] }, para pessoas que gostam de ${ article[ 'category' ] }, baseando-se nos artigos ${ article[ 'trends' ].articles } sem mencioná-los no texto, que tenha no mínimo 1000 palavras, tenha subtítulos, exemplos, introdução com contexto, desenvolvimento com detalhamento e listas, conclusão com no mínimo 300 palavras, mas não coloque os subtítulos introdução, desenvolvimento e conclusão. Ao final, adicione as tagas html obedecendo as regras de semântica.`,
//     //     temperature: 0.9,
//     //     max_tokens: 2000,
//     // })
//     // article[ 'content' ] = genContent.data.choices[ 0 ].text
//     // console.log(article[ 'content' ])

//     function save(obj, titulo) {
//         let name = `${ titulo || Date.now() }.json`;
//         let dir = path.join(__dirname, `article/${ new Date().toISOString().slice(0, 10) }`);

//         if (!fs.existsSync(dir)) {
//             fs.mkdirSync(dir);
//         }

//         const jsonString = JSON.stringify(obj);
//         fs.writeFile(path.join(dir, name), jsonString, (err) => {
//             if (err) {
//                 console.error(err);
//             } else {
//                 console.log(`Arquivo "${ titulo }" salvo com sucesso!`)
//             }
//         });
//     }
//     save(article, article[ 'title' ]);

//         return res.json({
//             success: true,
//             message: req.body
//         })

//     } catch (error) {
//         console.log('ERRO - ', error.message);
//     }
// })




const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log('Server running in ' + port)
})
// "dev": "nodemon api/index.ts",

app.use(router);
app.use(errorHandler);

module.exports = {app}