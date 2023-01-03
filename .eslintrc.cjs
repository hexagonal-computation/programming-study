module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:storybook/recommended',
    'prettier',
  ],
  ignorePatterns: ['/build/', '/scripts/', 'tsconfig.json'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'import', 'no-type-assertion'],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'no-use-before-define': 'off',
    'array-callback-return': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/require-await': 'off',
    'no-type-assertion/no-type-assertion': 'error',
    'import/no-unresolved': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'no-type-assertion/no-type-assertion': 'error',
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          {
            target: './src/domain',
            from: './src/adapter',
          },
          {
            target: './src/domain/entities',
            from: './src/domain/usecases',
          },
          {
            target: './src/adapter/repositories',
            from: './src/adapter/entry-points',
          },
          {
            target: './**/codex-v2/**/*',
            from: './**/{authentication,classlink,clever,clever-roster-sync,codex,maintenance,playerApi}/**/*',
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx', '*.stories.tsx'],
      rules: {
        'no-type-assertion/no-type-assertion': 'off',
      },
    },
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
}
