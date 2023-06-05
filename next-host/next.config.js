const NextFederationPlugin = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, options) {
        const { webpack } = options
        if(!options.isServer) {
            config.plugins.push(
                new NextFederationPlugin({
                    name: 'next-host',
                    remotes: {
                        vue_remote: "http://localhost:5001/remoteEntry.js",
                    },
                    filename: 'static/chunks/remoteEntry.js',
                    shared: {},
                })
            )
        }
        return config
    }
}

module.exports = nextConfig
