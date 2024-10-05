// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack: (config) => {
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
