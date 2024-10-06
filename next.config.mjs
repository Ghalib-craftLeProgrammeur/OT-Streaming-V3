// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Prevent Webpack from bundling Node.js core modules for client-side code
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
        child_process: false, // Prevent bundling child_process if used in Firebase Admin SDK
      };
    }

    // Exclude WebAssembly (.wasm) files
    config.module.rules.push({
      test: /\.wasm$/,
      type: 'javascript/auto', // Avoids WebAssembly handling in Webpack
      use: 'ignore-loader', // Ignores .wasm files
    });

    return config;
  },

  // Add any other config options here
};

export default nextConfig;