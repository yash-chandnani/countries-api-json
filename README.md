# countries-api-json

[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]

A comprehensive list of countries and their details in JSON format. Useful for applications that need country data for various purposes such as dropdowns, validations, etc.

## Installation

To install this package, run:

```bash
npm install countries-api-json
```

## Usage

Here is a basic example of how to use this package:

```javascript
const countries = require('countries-api-json');

// Example usage
console.log(countries); // Prints the entire list of countries

// Accessing specific country details
const zambia = countries.find(country => country.code === 'ZM');
console.log(zambia); // { name: 'Zambia', code: 'ZM', dial_code: '+260', flag: '🇿🇲' }
```

## API

The package exports a JSON array of country objects. Each country object contains the following properties:

- `name` (String): The name of the country.
- `code` (String): The ISO 3166-1 alpha-2 code of the country.
- `dial_code` (String): The international dialing code of the country.
- `flag` (String): The flag emoji of the country.

### Example Country Object

```json
{
  "name": "Zambia",
  "code": "ZM",
  "dial_code": "+260",
  "flag": "🇿🇲"
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or features.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thank you to everyone who has contributed to this project.

[npm-image]: https://img.shields.io/npm/v/countries-api-json.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/countries-api-json
[npm-downloads]: https://img.shields.io/npm/dm/countries-api-json.svg?style=flat-square
