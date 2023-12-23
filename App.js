import React from "react";
import ReactDOM from "react-dom/client";

// // React.createElement => ReactElement-JS Object => HtmlElement(render)
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React"
// );
// // React.createElemnt => replaced by JSX

// JSX => it is not html inside javascript, but JSX is html-like or xml-like syntax
// JSX(transpiled before it reaches the JS Engine) => Parcel does it => using Babel(converts jsx to React.createElement)
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HtmlElement(render)
// Attributes in JSX are given using camelCase (like className, tabIndex, etc)
// JSX code must be enclosed within brackets() if written in multiple lines

// React Element
const heading = (
  <h1 id="heading" className="head">
    This is a JSX Heading 🐱‍🏍
  </h1>
);

// React Component => 1)Class Based Component(old), 2)Functional Component(new)
// React Functional Component => a normal JS Function that returns some JSX => always named with capital letters
// React Functional Component must be enclosed within brackets() if written in multiple lines
// Functional Components are rendered using <Component_Name />
// Component inside Component is called Componenet Composition
// Any JS code can be injected inside curly brackets {JS_Code}
const HeadingComponent = () => (
  <div id="container">
    <Title />
    {heading}
    <h1 className="head">Namste React Functional Component</h1>
    {100 + 200}
  </div>
);
const Title = () => {
  return <h1 className="title">Namste React Course</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
