var config = module.exports;

config["My tests"] = {
    environment: "node",
    rootPath: "../",
    sources: [
        "none-shall-pass/**/*.js"
    ],
    tests: [
        "test/*-test.js"
    ]
};
