# Wordpress NodeJs data scrapper.

Extract data as configured format from Wordpress built websites.

## Goals

- Configuration implementation.
- Very easy api structure.
- Parse website xml data.
- Export data as json.

## Import logic for developers

For simplicity and increasing code readability i use this logic to imports and definition of my code.

| pointers  | types     | description                  |
| --------- | --------- | ---------------------------- |
| interface | entity    | Entity interfaces            |
| interface | abstract  | Class abstraction interfaces |
| core      | entity    | Core implemented Entity      |
| constant  | --------- | Import any constant          |
| service   | http      | Http related services        |
| service   | scrape    | Scraping related services    |

```
# Logic
import {***} from '@pointer/{type}/{name}';

# Import example:
import {WpInfo} from '@interface/abstract/WpInfo';
```

# How to use:

First of all you need to install package using:

```
# install using wp-scrapper
yarn add wp-scrapper

# install using npm
npm install wp-scrapper
```

then import the package into your project like below:

```
import {WpScrapper} from 'wp-scrapper';

# Options schema not defined yet.
WpScrapper.read(options);
```
