import astro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
    {
        ignores: ['dist/**', 'node_modules/**', '.astro/**'],
    },
    ...astro.configs['flat/jsx-a11y-recommended'],
    {
        files: ['**/*.{js,mjs,cjs,astro}'],
        plugins: {
            prettier: eslintPluginPrettier,
        },
        rules: {
            'prettier/prettier': [
                'error',
                {
                    singleQuote: true,
                    tabWidth: 4,
                    useTabs: false,
                },
            ],
        },
    },
    eslintConfigPrettier,
];
