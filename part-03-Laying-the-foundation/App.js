import React from "react";
import ReactDOM from "react-dom/client";

//React element => Object =>HTML(after render)

// const heading = React.createElement("h1", {}, "Akshay");

//JSX
const jsxHeading = (<h1 className="heading">Akshay sakinam
    learning react
</h1>
);

//React Component
//React Functional Component


const HeadingComponent = () => {
    return <h1>Functional Component1</h1>
}
// const HeadingComponent2 = () => (<h1 className="header">Functional Component</h1>)
//We can create children also

const Title = () => {
    return (
        <div className="title-container">
            <h1>This is title</h1>
        </div>
    )
}
const spanElement = (<span>This is span element</span>);
const titleElement = (
    < h1 >
        {spanElement}
        This is title react element not component
    </h1>
);

const HeadingComponent3 = () => {
    return (
        <div className="container">
            <Title />
            {titleElement}
            <h2>{100 + 200 * 300}</h2>
            <h1 className="header">Functional Component</h1>
            <h2 className="header">Akshay</h2>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
// root.render(jsxHeading)
root.render(<HeadingComponent />)
root.render(<HeadingComponent3 />)

