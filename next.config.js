const basePath = process.env.NODE_ENV === 'production' ? '/lindsey-s.github.io' : '';

module.exports = {
    basePath,
    assetPrefix: `${basePath}/`,
};