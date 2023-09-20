import React from "react";
import  ReactDOM  from "react-dom/client";
const JanuImg = "https://media.istockphoto.com/id/1313644269/vector/gold-and-silver-circle-star-logo-template.jpg?s=612x612&w=0&k=20&c=hDqCI9qTkNqNcKa6XS7aBim7xKz8cZbnm80Z_xiU2DI=";
import { AiOutlineUserAdd } from 'react-icons/ai';


//using React.createElement

// const heading = React.createElement("div", {class:"title"}, [
//     React.createElement("h1", {class:"title"},"Im h1 tag"),
//     React.createElement("h2",{class:"title"},"Im h2 tag"),
//     React.createElement("h3",{class:"title"},"Im h3 tag")
// ]);


//using jsx

// const jsxHeading = (
//     <div className="title">
//         <h1 className="title">Im h1 tag</h1>
//         <h2 className="title">Im h2 tag</h2>
//         <h3 className="title">Im h3 tag</h3>
//     </div>
// )

//using functional component

const HeaderComponent = () => (
    <div className="container">
        <div className="icon">
            <img src={JanuImg} alt="logo" />
        </div>
        <div className="search">
            <input type="text" placeholder="search here"    />
        </div>
        <div className="user">
            <AiOutlineUserAdd className="usericon"/>
        </div>



        
     </div>
);

const CompositionComponent = () => (
    <div>
        <HeaderComponent/>
        {/* <h1>Namaste</h1> */}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<CompositionComponent/>);
