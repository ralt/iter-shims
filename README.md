iter-shims
===

Shims the iterator methods. Bonus: it works on NodeLists.

Installation
---

    npm install iter-shims

API
---

```javascript
var forEach = require('iter-shims').forEach;
// or
var forEach = require('iter-shims/forEach');

forEach(arr, fn);
```

List of methods: `forEach`, `map`, `filter`, `every`, `some`, `find` and
`findIndex`.

Contributors
---

- [Florian Margaine](http://margaine.com)

License
---

MIT License.
