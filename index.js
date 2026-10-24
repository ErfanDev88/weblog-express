import e from 'express'
import config from 'config'

const port = config.get('port')
const app = e()

app.listen(port, () => console.log(`app is running on port ${port}`))