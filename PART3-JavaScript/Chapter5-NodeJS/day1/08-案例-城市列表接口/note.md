# 08-案例-城市列表接口

- `querystring`模块: 用于解析和格式化URL查询字符串
  - `querysting.parse()`: 将URL查询字符串解析为对象
  - 例: `querystring.parse('foo=bar&abc=xyz&abc=123')` => `{ foo: 'bar', abc: ['xyz', '123'] }`