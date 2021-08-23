
## Description

Custom validators

## Installation

```bash
$ npm install nestjs-validators-devyx --save
```

## Usages
```bash
import {DbExists} from 'nestjs-validators-devyx';

@Validate(DbExists, ["Entity", "id_field"])
```

```bash
import {DbUnique} from 'nestjs-validators-devyx';

@Validate(DbUnique, ["Entity"])
```

```bash
import {IsDocument} from 'nestjs-validators-devyx';

@Validate(IsDocument)
```

```bash
import {IsGreaterThan} from 'nestjs-validators-devyx';

@Validate(IsGreaterThan, ["other_field"])
```

```bash
import {IsActive} from 'nestjs-validators-devyx';

@Validate(IsActive)
```