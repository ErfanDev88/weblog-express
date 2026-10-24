import e from 'express'
import config from 'config'
import ConnectToDB from './src/start/db.js'

const port = config.get('port')
const app = e()

ConnectToDB()

app.listen(port, () => console.log(`app is running on port ${port}`))