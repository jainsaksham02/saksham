import React, { Component } from 'react';
import cookie from 'react-cookies';
class Oookie extends Component {

    myFunction = () => {
        console.log("hello")
        cookie.save("name", "jain");
    }
    myFunction1 = () => {
        console.log("delet")
        cookie.remove('name', 'saksham');
    }
    render() {
        return (
            <div>

                <button onClick={this.myFunction}>cookie Add

                </button>

                <button onClick={this.myFunction1}> cookie Delet </button>


            </div>

        );
    }
}
export default Oookie;