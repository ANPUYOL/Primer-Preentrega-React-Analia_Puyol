import CartWidget from "../CartWidget/CartWidget"

const Menu = () => {
    return (
        <nav>
            <h3>Todo Cobayas</h3>
            <div>
                <button>Alimentos</button>
                <button>Jaulas</button>
                <button>Accesorios</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Menu 