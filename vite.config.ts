import path from 'node:path';
import fg from 'fast-glob';
import VitePluginMergeCss from 'vite-plugin-merge-css';

function getInputEntries(): Record<string, string> {
	const entries: Record<string, string> = {};

	const files = fg.sync('src/page_*/index.ts', {onlyFiles: true});

	for (const file of files) {
		const match = file.match(/src\/(page_[^/]+)\/index\.ts$/);
		if (match) {
			const name = match[1];
			entries[name] = path.resolve(file);
		}
	}

	return entries;
}

export default {
	build: {
		manifest: true,
		rollupOptions: {
			input: {
				page_a: 'src/page_a/index.ts',
				page_b: 'src/page_b/index.ts',
				page_c: 'src/page_c/index.ts',
			},
			output: {
				entryFileNames: '[name].js',
			},
		},
		cssCodeSplit: true,
		chunkSizeWarningLimit: 1024,
		minify: false,
	},
	plugins: [VitePluginMergeCss()],
};
