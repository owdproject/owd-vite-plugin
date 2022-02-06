'use strict';

var package_json = require('@owd-client/core/package.json');

var getConfig = (clientConfig) => {
  return {
    define: {
      __OWD_VERSION__: `'${ package_json.version }'`,
      debug: clientConfig.dev
    },

    optimizeDeps: {
      exclude: [ '@owd-client/core' ]
    }
  }
};

function index (clientConfig) {
  return {
    name: 'vite:owd',

    config(cfg) {
      const vueCfg = cfg.plugins.find(entry => entry.name === 'vite:vue');

      if (vueCfg === void 0) {
        console.warn('In your Vite config file, please add the OWD plugin after the Vue one');
        process.exit(1);
      }

      return getConfig(clientConfig)
    }
  }
}

module.exports = index;
