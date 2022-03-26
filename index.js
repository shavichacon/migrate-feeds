const migrate = require('./npm-migrate')
 
const moduleName = 'demo_3'
const from = 'https://pkgs.dev.azure.com/shavichacondv/Labs/_packaging/from/npm/registry/'
const to = 'https://pkgs.dev.azure.com/shavichacondv/Labs/_packaging/to3/npm/registry/'
 
// optional
const options = {
    debug: true // default
}
 
migrate(moduleName, from, to, options)
    .then((migrated) => console.log(migrated)) // list of migrated packages
    .catch((err) => console.error(err))
 
 