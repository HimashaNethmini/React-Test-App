import Alert from "./components/Alert";

/*import ListGroup from "./components/ListGroup";*/

/*function App() {
     let items = ["New York", "San Franciso", "Tokyo", "London", "Paris"];

    const handleSelectItem = (item: string) => {
        console.log(item);

    }
    return (
        <div>
            <ListGroup items = {items} heading ="Cities" onSelectItem={handleSelectItem}/>
        </div>
    );
} 

*/

function App(){
    return(
        <div>
            <Alert>
                Hello World
            </Alert>
        </div>
    );
}

export default App;