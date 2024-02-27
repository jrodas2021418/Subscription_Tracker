import { useEffect } from "react";
import { moneyFormat } from "../helpers";

const Balance = ({count, subs, spent, setSpent}) =>{
   

    const updateBalance = () =>{
        const spent = subs.reduce((total, item) => Number(item.price) + total, 0);
        setSpent(spent);
    }

    useEffect(() =>{
        updateBalance();
    }, [subs]);

    return (
      
        <div className="balance">
            <h3> budget: {moneyFormat(count)}</h3>
            <h3> avaliable: {moneyFormat(count - spent)}</h3>
            <h3> spent: {moneyFormat(spent)}</h3>
        </div>

    );
}


export default Balance;