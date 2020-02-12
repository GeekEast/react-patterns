<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table Of Content

- [Tips](#tips)
  - [属性默认值](#%E5%B1%9E%E6%80%A7%E9%BB%98%E8%AE%A4%E5%80%BC)
  - [属性解构](#%E5%B1%9E%E6%80%A7%E8%A7%A3%E6%9E%84)
  - [剩余属性收集](#%E5%89%A9%E4%BD%99%E5%B1%9E%E6%80%A7%E6%94%B6%E9%9B%86)
  - [覆盖解构属性](#%E8%A6%86%E7%9B%96%E8%A7%A3%E6%9E%84%E5%B1%9E%E6%80%A7)
  - [代理属性](#%E4%BB%A3%E7%90%86%E5%B1%9E%E6%80%A7)
  - [条件渲染](#%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93)
  - [样式组件](#%E6%A0%B7%E5%BC%8F%E7%BB%84%E4%BB%B6)
  - [布局组件](#%E5%B8%83%E5%B1%80%E7%BB%84%E4%BB%B6)
  - [高阶组件](#%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6)
- [参考](#%E5%8F%82%E8%80%83)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Tips
### 属性默认值
- Code Path: `/defaultprops`
```javascript
const Item = (
  { name = "James" } // here
  ) => {
  return (<div>name: {name}</div>)
}
```

### 属性解构
- object
```javascript
let person = {name: "chan"};
let { name } = { person };
```
- array
```javascript
let things = ['one', 'two'];
// 按照顺讯返回
let [first, second] = things;
```

### 剩余属性收集
```javascript
const Greeting = ({ name, ...platformProps }) => {
  return <div {...platformProps}>Hi {name}!</div>;
}
```

### 覆盖解构属性
- `...` is sensitive to **order**
```javascript
const MyButton = (props) => {
  // btn will override className within props
  return <button {...props} className="btn" />;
}
```
- Better Solution: Destructure `className` from `props`
```javascript
function MyButton({ className = "", ...props }) {
  let classNames = ["btn", className].join(" ");

  return <button className={classNames} {...props} />;
}
```

### 代理属性
```javascript
const Button = props =>
  <button type="button" {...props}>
```

### 条件渲染
- if 
```javascript
{ conditions && <span>...</span>}
```
- unless = if not
```javascript
// render when condition is false
{ condition || <span>...</span>}
// equal
{ !condition && <span>...</span>}
```
- if-else
```javascript
{
  condition ? (
    <span>...</span>
  ) : (
    <span>...</span>
  );
}
```

### 样式组件
```javascript
import classnames from "classnames";

const PrimaryBtn = props => <Btn {...props} primary />;

const Btn = ({ className, primary, ...props }) => (
  <button
    type="button"
    className={classnames("btn", primary && "btn-primary", className)}
    {...props}
  />
);
```

### 布局组件
- 只是处理静态布局，无需更新
```javascript
class HorizontalSplit extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    <FlexContainer>
      <div>{this.props.leftSide}</div>
      <div>{this.props.rightSide}</div>
    </FlexContainer>
  }
}
```

### 高阶组件
- 传递组件进入高阶组件，让高阶组件做中间处理

## 参考
- [React Patterns](https://reactpatterns.com/)



