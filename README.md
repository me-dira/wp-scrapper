# Wordpress NodeJs data scrapper.

Extract data as configured format from Wordpress built websites.

## Goals

- Configuration implementation.
- Very easy api structure.
- Parse website xml data.
- Export data as json.

## Import logic for developers

For simplicity and increasing code readability i use this logic to imports and definition of my code.

| pointers  | types    | description                  |
| --------- | -------- | ---------------------------- |
| interface | entity   | Entity interfaces            |
| interface | abstract | Class abstraction interfaces |
| core      | entity   | core implemented Entity      |
| constant  | -        | Import any constant          |

```
# Logic
import {***} from '@pointer/{type}/{name}';

# Import example:
import {WpInfo} from '@interface/abstract/WpInfo';
```
