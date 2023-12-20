import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        console.log("child constructor");

        // this.state = {
        //     count : 0,
        //     count2 : 1,
        // };

        this.state = {
            userInfo : {
                name:'Dummy',
                location:'Default',
            }
        }
    }
    async componentDidMount() {
        console.log("child component will be mounted");
        const data = await fetch("https://api.github.com/users/janani");
        const json = await data.json();

        this.setState({
            userInfo:json,
        })
        console.log(json);
    }
    render () {
        console.log("child render");
        const {name, location,avatar_url} = this.state.userInfo;
    //    const {name} = this.props;
    //    const {count, count2} = this.state;
        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h1>{name}</h1>
                <h2>{location}</h2>




                {/* <h1>Count : {this.state.count} </h1> */}
                
                {/* <h1>Count : {count} </h1>
                <h1>Count2 : {count2} </h1>
                <button onClick={() => {
                    this.setState({
                        count : this.state.count + 1,
                        count2 : this.state.count2 + 1,
                    })
                }}>Count Increase</button> */}

                {/* <h2>Name: Janani</h2> */}
                {/* <h2>Name: {this.props.name} </h2> */}

                {/* <h2>Name: {name} </h2>
                <h3>Location:Salem</h3>
                <h4>Contact:@Janani12</h4> */}
            </div>
        );
    };
};

export default UserClass;