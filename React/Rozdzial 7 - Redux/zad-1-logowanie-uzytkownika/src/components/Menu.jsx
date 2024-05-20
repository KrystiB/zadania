import { useSelector } from "react-redux"


const Menu = () => {
    const balance = useSelector((state) => state.bank.balance);

    return (
        <div>
            <p>Saldo: {balance}</p>
        </div>
    )
}

export default Menu