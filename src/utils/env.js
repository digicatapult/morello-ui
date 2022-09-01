const DSBD_API_HOST =
  process.env.DSBD_API_HOST || Window.config.dsbdApiHost || 'localhost'
const DSBD_API_PORT =
  process.env.DSBD_API_POST || Window.config.dsbdApiPost || 3001
const DSBD_API_URL = `http://${DSBD_API_HOST}:${DSBD_API_PORT}`

export { DSBD_API_HOST, DSBD_API_PORT, DSBD_API_URL }
