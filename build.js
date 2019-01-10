const fs = require('fs')

const files = fs.readdirSync('./semantics')

console.log(files)

const semantics = files.reduce((reduced, file) => {
    const contract = file.replace(/.js$/, '')
    const content = require(`./semantics/${file}`)

    reduced[contract] = content
    return reduced
}, {})


fs.mkdirSync('./dist')
fs.writeFileSync('./dist/index.json', JSON.stringify(semantics, null, 2), 'utf-8')
console.log(semantics)