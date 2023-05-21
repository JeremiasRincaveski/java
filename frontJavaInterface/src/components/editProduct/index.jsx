const EditProduct = ({id = 1, name = 1, price = 1, stock = 1, date = 1}) => {
    return (
        <div>
            <h1>{id}</h1>
            <h1>{name}</h1>
            <h1>{price}</h1>
            <h1>{stock}</h1>
            <h1>{date}</h1>
        </div>
    )
}

export default EditProduct