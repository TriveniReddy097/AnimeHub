module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          assets: './src/assets',
          components: './src/components',
          config: './src/config',
          lib: './src/lib',
          screens: './src/screens',
          store: './src/store',
          actions: './src/actions',
          actionTypes: './src/actionTypes',
          reducers: './src/reducers',
          util: './src/util',
        },
      },
    ],
  ],
};
