import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// import uni from '@dcloudio/vite-plugin-uni';

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			// vue: resolve(__dirname, 'node_modules/@dcloudio/uni-app/dist/vue.esm.js'),
			// 'vuex': 'node_modules/@dcloudio/vuex', // 指向uni-app内置路径
			'@': resolve(__dirname, '/'),
		},
		extensions: ['.js', '.vue', '.json', '.ts', '.jsx', '.tsx'], // 自动匹配的文件后缀
	},
	build: {
		rollupOptions: {
		  external: ['vue', 'vuex'], //设置为外部依赖
		},
	},
});