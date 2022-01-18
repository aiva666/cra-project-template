/**
 * craco配置文件
 */
const CracoLessPlugin = require("craco-less")
const themeConfig = require("./theme.config")
const path = require("path")

const resolve = (dir) => path.resolve(__dirname, dir)
module.exports = {
  devServer: {
    port: 8080,
    // proxy:{
    //     "/api":{
    //         target:"http://localhost:8000",
    //         changeOrigin:true,
    //         pathRewrite:{
    //             "^/api":""
    //         }
    //     }
    // }
  },
  webpack: {
    alias: {
      "@": resolve("src"),
      "~": resolve("node_modules"),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: themeConfig,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
