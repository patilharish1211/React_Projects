import ProductCard from "../Components/ProductCard"
function ProductsTable({Data}){
    
    return (
            <table border="1px">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    Data.map((el)=>(
                      <ProductCard  key={el.id} id={el.id} price={el.price}  brand={el.brand} details={el.details} category={el.category}/>
                          ))
        
        }
        
                </tbody>
            </table>
    )
}

export default ProductsTable