import fs from 'fs'

// eslint-disable-next-line import/no-webpack-loader-syntax
import Helvetica from '!!raw-loader!pdfkit/js/data/Helvetica.afm'

function registerBinaryFiles(ctx) {
  ctx.keys().forEach(key => {
    // extracts "./" from beginning of the key
    fs.writeFileSync(key.substring(2), ctx(key))
  });  
}

registerBinaryFiles(require.context('./assets', true))


fs.writeFileSync('data/Helvetica.afm', Helvetica)