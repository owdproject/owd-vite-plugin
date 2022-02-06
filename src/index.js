import getConfig from './get-config'

export default function (clientConfig) {
  return {
    name: 'vite:owd',

    config(cfg) {
      const vueCfg = cfg.plugins.find(entry => entry.name === 'vite:vue')

      if (vueCfg === void 0) {
        console.warn('In your Vite config file, please add the OWD plugin after the Vue one')
        process.exit(1)
      }

      return getConfig(clientConfig)
    }
  }
}
