# JSON.stringify() & JSON.parse()

## What they do

**`JSON.stringify()`** converts a JavaScript value into a JSON string.  
**`JSON.parse()`** does the opposite — converts a JSON string back into a JavaScript value.

They are essential for data serialization, API communication, and storage.

---

## Example

```javascript
// JavaScript object (lives in memory, your code can use it)
const user = { name: "Carlos", age: 25 };

// Convert to JSON string so it can be sent over the internet
const str = JSON.stringify(user);
// '{"name":"Carlos","age":25}'

// Convert back to object when you receive a response
const back = JSON.parse(str);
// { name: "Carlos", age: 25 }
```

---

## Why this matters for APIs

APIs communicate in text — you cannot send a JavaScript object directly over the internet.
It must be converted to a string first, sent as text, then converted back on the other side.

```
Your Code          →        Internet       →      API Server
JavaScript object  →  JSON.stringify()  →  text  →  JSON.parse()
JavaScript object  ←  JSON.parse()      ←  text  ←  JSON.stringify()
```

This happens automatically behind the scenes on every API call you make.
