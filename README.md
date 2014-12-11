local-microblogging-client
==========================

Задача — создать клиент для работы с локальным микроблогом, используя JS/HTML/CSS. Клиент должен позволять просматривать ленту, добавлять в неё новые записи и удалять их. Записи должны сохраняться локально, никакой серверной части писать не нужно. Разрешается использовать любые фреймворки и библиотеки.  Визуальное оформление остаётся на ваше усмотрение.


## Working environment ##
- node.js


## For beginning ##
```
npm install
grunt build
```

## For developing ##
```
grunt
```

## Used ##
- Sass (SCSS)
- Bootstrap 3
- Haml
- Grunt, include this plugins:
  - grunt-contrib-haml
  - grunt-contrib-sass
  - grunt-contrib-watch
  - grunt-yui-compressor