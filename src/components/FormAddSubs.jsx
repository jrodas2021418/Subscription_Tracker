import { useState } from "react";

const FormAddSubs = ({setType, setPrice, type, price, setSubs, subs, editId, setEditId, spent, count}) =>{

    const [error, setError] = useState(false);
    const [errorMoney, setErrorMoney] = useState(false);

    const handleSubs = e =>{
        e.preventDefault();
        if(price === "" || Number(price) < 0 || type === ""){
            setError(true);
            return;
        }
        if(count - spent < Number(price)){
            setErrorMoney(true);
            return;
        }
         
        setError(false);
        setErrorMoney(false);
        if(editId != ""){
                setEditId("");
                 const newSubs = subs.map(item =>{
                    if(item.id === editId){
                        item.type = type;
                        item.price = price;
                    }
                    return item;
                 })
                 setSubs(newSubs);
        }else{
        const data ={
            type: type,
            price: price,
            id: Date.now()
        }
        setSubs([...subs, data]);
    }
    setType("");
    setPrice("")

    }

    return(
        <div className="add-subscription">
             <h3> Add suscription</h3>
             <form onSubmit={handleSubs}>
                <p> Service</p>
                <select onChange={e => setType(e.target.value)}  value={type}>
                    <option value="">-- Select --</option>
                    <option value="netflix">-- Netflix --</option>
                    <option value="disneyplus">-- Disney Plus --</option>
                    <option value="hboMax">-- HBO Max --</option>
                    <option value="starPlus">-- Star plus --</option>
                    <option value="primeVideo">-- Prime video --</option>
                    <option value="spotify">-- Spotify --</option>
                    <option value="appletv">-- Apple TV --</option>
                </select>
                 <p> Amount </p>
                 <input type="number" placeholder="20$" onChange={e => setPrice(e.target.value)} value={price} />
                 { editId != "" ? <input type="submit" value= "Save"/> 
                                : <input type="submit" value= "Add" />
                 }
                
             </form>
             {error ? <p className="error" >Camps Invalid</p> : null}
             {errorMoney ? <p className="error" >insufficient balance</p> : null}
        </div>
    );
}

export default FormAddSubs;