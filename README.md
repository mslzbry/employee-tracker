# Employee Tracker

![License Badge](https://shields.io/badge/license-MIT-green)

## Description

This Node command line tool allows a business owner to easily manage human resources information - specifically, employee details, departments, roles, and how all these entities are related. This tool enables the user to view, add, and update information in the underlying employees database.

The tool itself primarily uses inquirer for prompting user input as well as mysql for storing business information.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

The prerequisite to using this app is to install MySql on your machine and setting environment variables with your DB creds as environment variables, or putting them in a .env file.

To install and use this app, clone this repo and navigate to the root directory. Run `npm i` to install the necessary libraries used to run this app e.g. inquirer, mysql, etc. These libraries are specified in the package.json.

## Usage

To run this app, navigate to the project root. To pre-poluate the database with some dummy data as well as define the schema, you must run `npm run seed` which will load the database and get it working with example data.

After the db is populated, then you can use the tool by running `npm run start`.

To see a walkthrough video of this, please view this Google Drive link:
https://drive.google.com/file/d/18FOMqT2TiX0thD7Mci2Q6a_Ip7xaT0cT/view?usp=sharing

## Contributing

To contribute, please clone or fork this repo and make a pull request for my review.

## Tests

There are currently no unit tests yet for this application.

## License

This application uses the MIT license. Please see
https://mit-license.org/ for more information on this license.

## Questions

You can find me [HERE](https://github.com/mslzbry) on Github.
Feel free to email me at m.slzbry@gmail.com if you have any additional questions.
