import type { Config } from 'prettier'

const config: Config = {
	semi: false,
	trailingComma: 'none',
	singleQuote: true,
	bracketSameLine: true,
	bracketSpacing: true,
	singleAttributePerLine: true,
	printWidth: 80,
	useTabs: true,
	arrowParens: 'always',
	endOfLine: 'lf'
}

export default config
