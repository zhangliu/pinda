const fs = require('fs')

const modelPath = `${__dirname}/../src/models`

fs.readdirSync(`${__dirname}/../src/models`)
  .forEach(filename => {
    const model = require(`${modelPath}/${filename}`)
    model.sync({ force: true })
  })