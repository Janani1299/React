import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// const About = () => {
//     return (
//         <div>
//             <h1>About US page</h1>
//             <User name={"kavi(function)"}/>
//             <UserClass name={"Janani(class)"} />
//         </div>
//     );
// };


class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }
    componentDidMount() {
        console.log("parent component will be mounted");
    }
    render() {
        console.log("parent render");
        return (
            <div>
                <h1>About US page</h1>
                <User name={"kavi(function)"}/>
                <UserClass name={"Janani(class)"} />
            </div>
        );
    }
}
export default About;