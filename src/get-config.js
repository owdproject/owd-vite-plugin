import {version} from "@owd-client/core/package.json";

export default (clientConfig) => {
  return {
    define: {
      __OWD_VERSION__: `'${ version }'`,
      debug: clientConfig.dev
    },

    optimizeDeps: {
      exclude: [ '@owd-client/core' ]
    }
  }
}