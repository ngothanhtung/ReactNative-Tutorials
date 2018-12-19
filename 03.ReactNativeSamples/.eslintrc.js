module.exports = {
	"parser": "babel-eslint",
	"extends": "airbnb",
	"rules": {
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"max-len": ["error", 200],
	},
	"plugins": [
		"react",
		"react-native"
	]
};