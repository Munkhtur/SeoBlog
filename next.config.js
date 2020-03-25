const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    publicRuntimeConfig: {
        APP_NAME: 'SEABLOG',
        API_DEVELOPMENT: 'http://localhost:8000/api',
        API_PRODUCTION: 'https://seoblog.com/api',
        PRODUCTION: false,
        DOMAIN_DEVELOPMENT:'http://localhost:3000',
        DOMAIN_PRODUCTION: 'https://seoblog.com',
        DISQUS_SHORTNAME: 'seoblog-zkzgr88yk2'
    }
});