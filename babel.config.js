module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        safe: false, // true
        allowUndefined: true, // false
        verbose: false,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          // '@/assets': './src/assets',
          // '@/components': './src/components',
          // '@/constants': './src/constants',
          // '@/context': './src/context',
          // '@/data': './src/data',
          // '@/features': './src/features',
          // '@/hooks': './src/hooks',
          // '@/lib': './src/lib',
          // '@/navigation': './src/navigation',
          // '@/screens': './src/screens',
          // '@/store': './src/store',
          // '@/styles': './src/styles',
          // '@/types': './src/types',
          // '@/utils': './src/utils',
        },
      },
    ],
    'react-native-paper/babel',
    'react-native-reanimated/plugin',
  ],
};
