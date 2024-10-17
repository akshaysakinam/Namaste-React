const h1 = React.createElement("h1", {
    id: "title"
},
    "Hello World from React")
console.log(h1); // object
const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(h1)
//render converts object to h1 tag and appends to root so that tag is visible in browser
//render converts and puts up in browser as h1

//-----------------------------------------------------------------------------------------

/*
Lets create a nested element like this:
    <div id="parent">
        <div id="child">
            <h1>Iam h1 tag</h1>
        </div>
    </div>
*/

// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("h1", {}, "Iam Parent"),
//     React.createElement("div", { id: "child" },
//         React.createElement("h1", {}, "Iam child"),
//         React.createElement("h1", {}, "Iam h1 tag")
//     )
// ) or
const parent = React.createElement("div", { id: "parent" },
    React.createElement("h1", {}, "Iam Parent"),
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "Iam child"),
        React.createElement("h1", {}, "Iam h1 tag")
    ]
    )
)
// root.render(parent)

// lets create this:
/*
    <div id="parent">
        <div id="child">
            <h1>Iam h1 tag</h1>
        </div>
        <div id="child2">
            <h1>Iam h1 tag</h1>
        </div>
    </div>
*/
const parent2 = React.createElement("div", { id: "parent" },
    React.createElement("h1", {}, "Iam Parent"),
    [
        React.createElement("div", { id: "child" }, [
            React.createElement("h1", {}, "Iam child"),
            React.createElement("h1", {}, "Iam h1 tag")
        ]
        ),
        React.createElement("div", { id: "child2" }, [
            React.createElement("h1", {}, "Iam child"),
            React.createElement("h1", {}, "Iam h1 tag")
        ]
        )
    ]
)
root.render(parent2)

