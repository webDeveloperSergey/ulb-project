import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {
	DefinePlugin,
	HotModuleReplacementPlugin,
	ProgressPlugin,
	WebpackPluginInstance,
} from 'webpack'
import { BuildOptions } from './types/config'

export function buildPlugins({
	paths,
	isDev,
}: BuildOptions): WebpackPluginInstance[] {
	const plugins = [
		new ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: paths.html,
		}),

		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		}),
	]

	if (isDev) {
		plugins.push(new HotModuleReplacementPlugin())
		plugins.push(new ReactRefreshWebpackPlugin())
	}

	return plugins
}
