import { WebpackPluginInstance, ProgressPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { BuildPaths } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(paths: BuildPaths): WebpackPluginInstance[] {
  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),

    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ];
}
