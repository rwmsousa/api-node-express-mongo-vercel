const googleTrends = require('google-trends-api');


const getTrendsController = async (req, res, next) => {
  try {
    // REAL TIME TRENDS: PICOS DE ACESSOS EM PÁGINAS ESPECÍFICAS - REAL TIME
    let result = [];
    await googleTrends.realTimeTrends({
      geo: 'BR',
      category: 'b',
    }, function (err, trends) {
      if (err) {
        console.log(err);
      } else {
        console.log(trends);
        // result.push(trends)
        return res.status(200).json(trends)
      }
    });

    // await googleTrends.realTimeTrends({
    //   geo: 'BR',
    //   category: 't',
    // }, function (err, results) {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log(results);
    //     result.push(...JSON.parse(results)[ 'storySummaries' ][ 'trendingStories' ])
    //   }
    // });

    // return res.status(200).json(result)

    // DAILY TRENDS: TRENDING TOP DAS ÚLTIMAS 24 HORAS. PODE RETORNAR 2 OBJETOS NO ARRAY
    // console.log('---------- BUSCANDO TRANDING TOP ----------')
    // let trendsTemp = []
    // await googleTrends.dailyTrends({
    //     trendDate: new Date(new Date().getTime() - 86400000).toLocaleDateString('pt-BR'),
    //     geo: 'BR',
    //     category: 't',
    // }, function (err, results) {
    //     if (err) {
    //         console.log(err.message);
    //     } else {

    //         const parseResult = JSON.parse(results)
    //         parseResult.default.trendingSearchesDays.map(day => day)
    //             .forEach(day => trendsTemp.push(
    //                 ...day.trendingSearches));

    //         trendsTemp.sort((a, b) =>
    //             a.formattedTraffic + b.formattedTraffic)
    //         // .map(theme => theme
    //         // prePrompt.push(
    //         //     {
    //         //         query: theme.title.query,
    //         //         articles: theme.articles
    //         //             .map(article => article.url),
    //         //         exclude: theme.source,
    //         //         trend: new Date(new Date().getTime() - 86400000).toLocaleDateString('pt-BR')
    //         //     })
    //         // )
    //     }
    // });

    // return res.json({ status: 200, trendsTemp })

  } catch (error) {
    console.log('ERRO - ', error.message);
  }
  // try {
  //   const { id: userId } = req.user;
  //   const posts = await postsService.getPostsService(userId);

  //   return res.status(200).json(posts);
  // } catch (err) {
  //   return next(err);
  // }
};


module.exports= { getTrendsController };
