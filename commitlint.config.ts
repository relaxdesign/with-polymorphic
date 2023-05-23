module.exports = {
  extends: ['@commitlint/config-conventional'],
  helpUrl:
    'https://github.com/relaxdesign/with-polymorphic/blob/main/CONTRIBUTING.MD#commit-convention',
  rules: {
    'type-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'always', 'sentence-case'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'refactor',
        'build',
        'test',
        'ci',
        'chore',
        'docs',
        'style',
        'perf',
        'revert',
      ],
    ],
  },
};
