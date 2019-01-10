# react-children-type

In case you are wondering how to check the type of react children, like:

1. The CardGroup wishes its children only Card components.

1. The Wrapper want to do something else when its children is another Wrapper.

There seems several way to do:

```javascript
if (children.type === Target) {...}
if (children.type.name === 'Target') {...} // using function.name
if (children.type.displayName === 'Target') {...} // which is a static variable on Target
```

They all seems to be right, but actually no. And the first is recommended.

> `if (children.type === Target) {...}`

see also [react-hot-loader](https://github.com/gaearon/react-hot-loader) in [dev](https://github.com/gaearon/react-hot-loader/blob/master/src/utils.dev.js) and [prod](https://github.com/gaearon/react-hot-loader/blob/master/src/utils.prod.js)

## How to run

```bash
git clone https://github.com/dancerphil/react-children-type.git
npm i
npm start
npm build
npm serve
```

You will see that in production, the behavior is different.
