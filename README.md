# suit-cx

Built on top of bem-classnames [https://github.com/pocotan001/bem-classnames]() with small extra functionality

## Changes/extra

The returned value from suit-cx is a method not a string like in bem-classnames. That is so we can use that method to add related classnames to children.

```js
import cx from 'suit-cx';

const classes = cx({
    name: 'Panel',
    modifiers: [],
    states: []
}, { ...this.props }, className );

<div className={ classes() }>
  <div className={ classes('header') }></div>
  <div className={ classes('body') }></div>
  <div className={ classes('footer') }></div>
</div>
```

Would create elements with these classnames

```
Panel
Panel-header
Panel-body
Panel-footer
```
