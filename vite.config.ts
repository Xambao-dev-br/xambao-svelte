import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { functionsMixins } from 'vite-plugin-functions-mixins';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit(), functionsMixins({ deps: ['m3-svelte'] })],
	resolve: {
		alias: {
			// Cria um atalho limpo para a pasta interna da biblioteca
			$m3: path.resolve('node_modules/m3-svelte/package/'),
			$src: path.resolve('src/'),
		}
	}
});
