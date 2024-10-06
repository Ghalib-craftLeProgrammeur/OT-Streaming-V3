import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add node polyfills for client-side builds
    if (!isServer) {
      config.plugins.push(new NodePolyfillPlugin());
    }

    // Enable async WebAssembly and layers support
    config.experiments = {
      asyncWebAssembly: true, // Enable async WebAssembly support
      layers: true, // Enable layers support
    };

    config.module.rules.push({
      test: /\.wasm$/,
      type: 'webassembly/async' // Specify the type for WebAssembly modules
    });

    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false, // Prevent bundling server-side modules on the client
      net: false,
      tls: false,
      events: 'events' // Use direct string reference for events module
    };

    return config;
  }
};

export default nextConfig;