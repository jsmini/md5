# 文档
pubsub是一个小而美的发布订阅者模式库。

## Md5

md5 生成函数
对应生成传入参数字符串的 md5 值

函数参数和返回值

- param {string} str 需要取md5值的字符串
- return {object} 生成的md5值，32位小写

举个例子

```js
import md5 from '@jsmini/md5'

md5('a') // 生成hash串 0cc175b9c0f1b6a831c399e269772661
```


