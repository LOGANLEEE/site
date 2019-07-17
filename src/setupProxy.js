const proxy = require('http-proxy-middleware');

const ilbe = proxy({
    target: 'https://www.ilbe.com',
    changeOrigin: true,
});

const bullpen = proxy({
    target: 'http://mlbpark.donga.com',
    changeOrigin: true,
});

const clien = proxy({
    target: 'https://www.clien.net',
    changeOrigin: true,
});

module.exports = function(app) {
    app.use('/list/ilbe', ilbe);
    app.use('/mp/b.php', bullpen);
    app.use('/service/board/park', clien);
    // app.use('https://www.ilbe.com/list/ilbe', ilbe);
    // app.use('http://mlbpark.donga.com/mp/b.php', bullpen);
    // app.use('https://www.clien.net/service/board/park', clien);
};
