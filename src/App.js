import { Component} from "react";
import CardList from "./components/card-list/card-list.component"; // This imports the newly made component.
import SearchBox from "./components/search-box/search-box.component";
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            // monsters: [
            //     {
            //         name: 'Linda',
            //         id: 1
            //     },
            //     {
            //         name: 'Frank',
            //         id: 2
            //     },
            //     {
            //         name: 'Jackie',
            //         id: 3
            //
            //     },
            //     {
            //         name: 'Andrei',
            //         id: 4
            //     }
            // ]
            // In most applications you will never be hard coding data. You will often be fetching it from a DB or an
            // API. Because the values need to be able to change and update dynamically and not wait for developer input.
            /*
            * React is built to be a platform for SPA's or Single Page Applications. Prior to SPA's all information had
            * to be asked of the server and be rendered there, the browser would send the request to the server which would send
            * the code for the page requested and return the required HTML, CSS, and JS files. With SPA's the request is sent to the server
            * however the difference being all the code for the page is now loaded in the browser which means server requests
            * do not need to be made on every page load, only when extra data is needed. React will just re-render the new page on the fly for the new page.
            */
            monsters: [],
            searchField: ''
        };
    }
    componentDidMount() { // whenever a component is placed onto the dom for the first time the component is mounted. This is where we place the logic to make an API request.
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState(() => {
                return {monsters: users}; // this maps the monsters object to the users object
            }))
        // the .then method is a promise that uses a callback to get the response from the fetch request.
    }
    onSearchChange =
        (e) => {
            const searchField = e.target.value.toLocaleLowerCase();
            this.setState(() => {
                return {searchField}
            })
        }

    render () {
        // To speed up code and make things more readable you can cast state, and functions and other functions/methods to variables for ease of use and code readability.
        const { monsters, searchField} = this.state;
        const { onSearchChange } = this;
        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });
        return (
            <div className="App">
                <h1 className='app-title'>Monsters Rolodex</h1>
                <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monsters' className='search-box'/>
                {/*<h1>{this.state.monster1.name}</h1>*/}
                {/*<h1>{this.state.monster2.name}</h1>*/}
                {/*<h1>{this.state.monster3.name}</h1>*/}
            {/*    This is extremely inefficient and should not be repeated manually. We need a way to cycle through
            this data with some relative ease. For this we will map the array to an element*/}
                {
                    // this.state.monsters.map((monster) => {
                    //     return <h1>{monster.name}</h1>
                    // })
                    // the map method allows you to iterate across every element in the array and provides a new one.
                    // You do this by passing a callback function which you pass the element in which you are referencing. In this case a monster.
                    // The return function iterates through the array and passes the monster name per the array index
                    // Each child in a list should have a key property as a good rule of thumb and the developer console will provide an error message of this.
                    // filteredMonsters.map((monster) => {
                    //     return <div key={monster.id}><h1>{monster.name}</h1></div>
                    //     // the highest element of the part where the array is mapping should be the key value. In a table this would be the <tr></tr> tags as the array is mapping to the rows.
                    // }) //
                    <CardList monsters={filteredMonsters}/> // this is the actual call for the card list component we imported at the top of the page.
                }
            </div>
        );
    }
}

export default App;
