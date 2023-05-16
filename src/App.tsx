import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";


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
    const [alertVisible, setAlertVisibility] = useState(false);

    return(
        <div>
            { alertVisible && <Alert onClose={ () => setAlertVisibility (false)}>
                Payment is successfully updated
             </Alert>
            }

            <Button onClick={ ()=> setAlertVisibility (true) }>
                Click Me
            </Button>
        </div>
        
    );
}

export default App;