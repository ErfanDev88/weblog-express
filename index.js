import e from 'express'
import config from 'config'
import ConnectToDB from './src/start/db.js'
import router from './src/router/index.js'
import configurationMiddleware from './src/start/config.js'

const port = config.get('port')
const app = e()


configurationMiddleware(app);
ConnectToDB()

app.use('/api', router)

app.listen(port, () => console.log(`app is running on port ${port}`))