const config = {
  verbose: true,
  extensions: ['ts'],
  require: ['esm', 'esbuild-register', './test/helpers/setup-browser-env.js']
};

export default config;
