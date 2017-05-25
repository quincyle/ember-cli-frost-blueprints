module.exports = {
  extends: ['frost-standard'],
  rules: {
    'ocd/sort-import-declarations': [
      2,
      {
        localPrefixes: [
          '../',
          './',
          'dummy/',
          'ember-cli-frost-blueprints'
        ]
      }
    ],
    'mocha/no-mocha-arrows': 2,
    'mocha/valid-test-description': 2
  }
}
