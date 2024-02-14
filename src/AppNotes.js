import { Component} from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
    // local state is something only this component has access to and can change / read from. You can pass information to the component through this by using the constructor method.
    constructor() {
        super(); // This calls the underlying super component class for the component.
        this.state = { // state is always a json object using key value pairs.
            name: {
                firstName: 'Hunter',
                lastName: 'Bailey'
            }
        }
    }
    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>Hi {this.state.name.firstName} {this.state.name.lastName}!</p> {/* React uses the jsx formatting which is an html based javascript extension to allow for better formatting. Think like laravel's double {{}} for injecting information into the client side.  */}
                    <button onClick={() => {
                        // this.setState({name: 'Carroll'})  // The use of the setState method on the component will allow React to re-render the component with the changes made, making the button press to be dynamic.
                        // setState uses a function ability of shallow merging that looks for any existing keys in the current state object and update them to the values that were passed.
                        // React tends to do things in an asynchronous manner which means you may need to choose which gets processed first, whereas normal javascript does things in a synchronous manner.
                        // you can access objects within objects by using the same notation so if we wanted to add a first name and last name we could do the following
                        // this.setState({
                        //     name: {
                        //         firstName: 'Bailey',
                        //         lastName: 'Carroll'
                        //     }
                        // })
                        // You can actually pass setState a function and callback that allows you to do things in a more consistent synchronous behavior.
                        this.setState(() => {
                            return {
                                name: {firstName: 'Bailey', lastName: 'Carroll'}
                            }
                        }, () => {
                            console.log(this.state)
                        });
                        // By doing things in this manner console.log returns the new state and not the preserved state in memory. You are not required to pass a callback, but it allows for better synchronous processing.
                    }}>Change Name</button>
                </header>
            </div>
        );
    }
}

export default App;
