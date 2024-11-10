module.exports = function (api) {
  api.cache(true);
  return {
    asssets: ['./assets/fonts'],
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
  };
};
