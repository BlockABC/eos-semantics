const fs = require('fs')

const files = fs.readdirSync('./semantics')

console.log(files)

const semantics = files.reduce((reduced, file) => {
    const contract = file.replace(/.js$/, '')
    const content = require(`./semantics/${file}`)

    reduced[contract] = content
    return reduced
}, {})


fs.existsSync('./dist') || fs.mkdirSync('./dist')
fs.writeFileSync('./dist/index.json', JSON.stringify(semantics, null, 2), 'utf-8')
