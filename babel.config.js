module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    "@babel/preset-env"
  ],
  plugins: [
    "@babel/plugin-transform-private-methods",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-class-static-block",
    "@babel/plugin-proposal-private-property-in-object",
    "@babel/plugin-proposal-private-methods"
  ]
}
