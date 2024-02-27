 import { moneyFormat } from "../helpers";
 
 const SingleItem = ({ price, type, id, deleteItem, editItem}) =>{

    const HandleDelete = (e)=>{
        e.preventDefault();
        const answer = window.confirm(` Delete Subscription a${type}`);
        if(answer){
                deleteItem(id);
        }
       
    }


    const HandleEdit = e =>{
        e.preventDefault();
        editItem(id);
    }

    const urlImage = `/src/images/${type}.png`;

     
    return(

           <div className="single-item">
            <img src={urlImage} alt="Services" />
            <h3> Price: {moneyFormat(Number(price))}</h3>
            <a href="" onClick={HandleDelete}>Erase</a>
            <a href="" onClick={HandleEdit}>Edit</a>
           </div>
    );
 }


 export default SingleItem;