module.exports = {
  extends: ["commitlint/config-conventional"],
  rules: {
    "scope-case": [2, "always", ["lower-case", "camel-case"]],
    "scope-max-length": [2, "always, 80"],
  },
  "type-enum": [
    2,
    "always",
    [
      "build",
      "chore",
      "ci",
      "docs",
      "feat",
      "fix",
      "perf",
      "refactor",
      "revert",
      "style",
      "test",
      "foo",
    ],
  ],
};
