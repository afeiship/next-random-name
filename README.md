# next-random-name
> Get random Chinese name

## install:
```bash
npm install -S afeiship/next-random-name --registry=https://registry.npm.taobao.org
```

## apis:
| api   | params                | description  |
|-------|-----------------------|--------------|
| boys  | name(String/Undefind) | Family name. |
| girls | name(String/Undefind) | Family name. |

## usage:
```js
import NxRandomName from 'next-random-name';

// random:
// boys:
NxRandomName.boys()
// [ '湛乾', '湛依晨' ]

//girls:
NxRandomName.girls()
// [ '易添', '易從陽' ]

// boys: 
NxRandomName.boys('陈')
// [ '陈业', '陈子鹏' ]

// girls:
NxRandomName.girls('陈')
// [ '陈硕', '陈娜秀' ]
```

## resources:
- https://github.com/afeiship
