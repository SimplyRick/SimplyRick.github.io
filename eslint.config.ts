import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
	js.configs.recommended,
	...vuePlugin.configs['flat/recommended'],
	{
		files: ['**/*.vue'],
		languageOptions: {
			parser: vueParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				parser: typescriptParser
			}
		}
	},
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module'
			}
		},
		plugins: {
			'@typescript-eslint': typescript
		},
		rules: {
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/no-explicit-any': 'warn',
			'no-console': 'warn'
		}
	},
	eslintConfigPrettier,
	{
		ignores: ['node_modules/**', 'dist/**', 'build/**']
	}
]
