const path = require("path");
console.log(__dirname);
let common_config = {
    node: {
        __dirname: true,
    },
    mode: process.env.ENV || "development",
};

module.exports = [
    Object.assign({}, common_config, {
        target: "electron-main",
        entry: {
            renderrer: "./src/main/index.js",
        },
        output: {
            filename: "[name]-bundle.js",
            path: path.resolve(__dirname, "src/main/dist"),
        },
    }),
    Object.assign({}, common_config, {
        target: "electron-renderer",
        entry: {
            ui: "./src/renderer/index.js",
        },
        output: {
            filename: "[name]-bundle.js",
            path: path.resolve(__dirname, "src/renderer/dist"),
        },
    }),
];
