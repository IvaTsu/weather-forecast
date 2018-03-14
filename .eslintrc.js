module.exports = {
    "extends": "airbnb",
    "env": {
        "es6": true,
        "browser": true,
    },
    "parser": "babel-eslint",
    "ecmaFeatures": {
        "arrowFunctions": true,
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "no-unused-vars": [2, {"vars": "local", "args": "none"}],
        "no-console": 0,
        "jsx-a11y/label-has-for": [ 2, {
            "components": [ "Label" ],
            "required": {
                "some": [ "nesting", "id" ]
            },
            "allowChildren": false
        }],
        "no-underscore-dangle": ["error", { "allowAfterThis": true }],
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": false, "peerDependencies": false}],
        "indent": [2, "tab"],
        "no-tabs": 0,
        "react/jsx-indent": [2, 'tab'],
        "react/jsx-indent-props": [2, 'tab']
    }
};
