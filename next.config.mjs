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

    // Add WebAssembly rules
    config.module.rules.push({
      test: /\.wasm$/,
      type: 'webassembly/async', // Specify the type for WebAssembly modules
    });

    // Update fallback settings
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false, // Prevent bundling server-side modules on the client
      net: false,
      tls: false,
      events: require.resolve('events'), // Ensure 'events' module is resolved properly
      child_process: false, // Prevent bundling child_process module
    };

    // Add resolve extensions
    config.resolve.extensions.push('.ts', '.js');

    // Handle `node:` scheme
    config.module.rules.push({
      test: /^node:/,
      use: 'raw-loader', // Use raw-loader to handle `node:` imports
    });

    return config;
  },
};

export default nextConfig;