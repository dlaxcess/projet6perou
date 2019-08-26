var Encore = require('@symfony/webpack-encore');

Encore
// directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. citygma.js)
     * and one CSS file (e.g. citygma.css) if your JavaScript imports CSS.
     */
    .addEntry('citygma', './assets/js/citygma_entry.js')
    .addEntry('login', './assets/js/login.js')
    //.addEntry('page2', './assets/js/page2.js')

    .enableBuildNotifications()

    .autoProvidejQuery()
    .enableSassLoader()

    .copyFiles({
        from: './assets/images',
        to: 'images/[path][name].[hash:8].[ext]'
    })
    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())
    .enableReactPreset()
// uncomment if you use TypeScript
//.enableTypeScriptLoader()

// uncomment if you use Sass/SCSS files
//.enableSassLoader()

// uncomment if you're having problems with a jQuery plugin
//.autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
