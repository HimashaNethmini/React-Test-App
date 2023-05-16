import { useState } from "react";

// {items: [], heading: string }
interface Props {
  items : string [];
  heading : string;
  
  //making a function to go for a new one when one of the cities is selected
  onSelectItem: (item: string) =>void; // action after onclick
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li 
          className = { selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
          key={item} 
          onClick={() =>{ setSelectedIndex(index);
          onSelectItem (item);
        } }
          >
            {item}
            </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
