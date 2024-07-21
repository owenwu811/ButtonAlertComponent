import ListGroup from "./components/ListGroup";

function AppComponent() {
  let items = ['New York', 'San Franciso','Tokyo', 'London', 'Paris'];
  
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  
  return <div>
    <ListGroup items = {items} heading="Cities" onSelectItem={handleSelectItem}/>
    </div>;
}

export default AppComponent;