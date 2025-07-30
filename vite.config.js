import path from 'node:path';
import VitePluginMergeCss from 'vite-plugin-merge-css';

export default {
	build: {
		manifest: true,
		rollupOptions: {
			input: {
				page_a: 'src/page_a/index.ts',
				page_b: 'src/page_b/index.ts',
			},
			output: {
				entryFileNames: '[name].js',
			},
		},
		cssCodeSplit: true,
	},
	plugins: [VitePluginMergeCss()],
};
