const config = {
  dsbdApiPort: 3000,
  dsbdApiHost: 'localhost',
}

if (!Window.config) {
  Window.config = {}
}

if (!Window.config.inteli) {
  Window.config = {}
}

for (const [key, value] of Object.entries(config)) {
  Window.config[key] = value
}