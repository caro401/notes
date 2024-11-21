---
title: Sort a list of objects by a property in JavaScript
pubDate: 2024-11-21
lastUpdated: 2024-11-21
id: 20241121161187-sort-a-list-of-objects-by-a-property-in-javascript
---

I needed to sort a list of JS objects (in this case representing the data for a post on this blog) by the value of one of the properties of each object (date). Under the hood, each post looks like:

```javascript
post = {
  slug: "my-slug",
  title: "Post Title",
  date: "2020-05-16",
  author: "Caro Appleby",
  tldr: "words words words",
  tags: ["js", "snippet"],
};
```

Because the date is in a sensible format, I can just sort the date strings alphabetically. `sort()` in JS can take a function which tells you how to compare two elements of the list. So my brain goes to a Haskell type signature `compareFn :: a -> a -> Int`. So you have an array of things of type `a`, the function gets two of these elements, and the `Int` you get back tells you which of them should be sorted to a lower index (i.e. come before). If the return value is <0, the first one comes first, if its >0 then the second one comes first.

So, I can sort my array of post objects like:

```js
sortedPosts = posts.sort((a, b) => (a.date < b.date ? 1 : -1));
```

if I want them to come back with the newest one first in the array.

[Reference blog post](https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/) and the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) on `Array.prototype.sort()`. Oh, and the syntax for the [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).
