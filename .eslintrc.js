module.exports = {
  plugins: ['import', 'react', '@typescript-eslint', 'react-hooks'],
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors.
    'plugin:react/recommended',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    // this setting is required if you want to use rules which require type information
    // project: ['./tsconfig.json'],
  },
  root: true,
  env: {
    commonjs: true,
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  settings: {
    react: {
      version: '16', // 'detect' -> automatically picks the version you have installed
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'eqeqeq': ['error', 'always', { null: 'ignore' }],
    'spaced-comment': ['warn', 'always'],
    'lines-between-class-members': ['error', 'always'],
    'import/newline-after-import': ['warn', { count: 1 }],
    // 'import/no-unresolved': [2, { ignore: ['aw-tools', 'proxy-storage'] }],
    'import/order': [
      'warn',
      {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'alphabetize': { order: 'asc' },
        'newlines-between': 'ignore',
      },
    ],
    'react/prop-types': 0,
    '@typescript-eslint/no-unused-vars': [1, { args: 'none' }],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: true }],
    // '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true, fixToUnknown: true }],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/type-annotation-spacing': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
