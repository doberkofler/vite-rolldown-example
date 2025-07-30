import {defineConfig} from 'vitest/config';

export default defineConfig({
	test: {
		exclude: ['**/node_modules/**', '**/dist/**'],
		testTimeout: 20000,
		coverage: {
			provider: 'v8',
			include: ['src/**'],
		},
	},
	esbuild: {
		target: 'node20',
	},
});
