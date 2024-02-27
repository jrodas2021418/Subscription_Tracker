import SingleItem from "./SingleItem";

const DisplayItems = ({subs, deleteItem, editItem}) =>{
    return (
         <>
          <h2>Subscriptions</h2>
           {
               subs.map(item => (
                   <SingleItem 
                   key={item.id}
                   id={item.id} 
                   price={item.price} 
                   type={item.type}
                   deleteItem={deleteItem}
                   editItem={editItem}
                    />
               ))
           }
          
          </>
    );
}

export default DisplayItems;