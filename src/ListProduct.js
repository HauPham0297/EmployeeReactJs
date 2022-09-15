const Product = (props)=>{
    return (
        <tr>
            <td>{props.data.name}</td>
            <td>{props.data.category}</td>
            <td>{props.data.price}</td>
        </tr>
    )
}
const ListProduct = (props)=>{
    const lstProduct = props.products;
    const filterTextVal = props.filterText;
    const stockOnlyVal = props.inStockOnly;
    const selectVal = props.selectVal;
    const lstRows = [];
    //filter into key search 

    lstProduct.forEach((product) => {
        if(((String)(product.name).toLowerCase()).indexOf(filterTextVal)>= 0 )
        {
            if(stockOnlyVal)
            {
                if(product.stocked)
                {
                    if(selectVal !== "")
                    {
                        if(product.category === selectVal)
                            lstRows.push(<Product data={product} key={product.id}/>)
                        else return;
                    }else lstRows.push(<Product data={product} key={product.id}/>)
                }  
            }else{
                 if(selectVal !== "")
                    {
                        if(product.category === selectVal)
                            lstRows.push(<Product data={product} key={product.id}/>)
                        else return;
                    }else lstRows.push(<Product data={product} key={product.id}/>)
            }
        }else {
            if(filterTextVal!== "")return;
            else{
                if(stockOnlyVal && selectVal !== "")
            {
                if(product.stocked)
                {
                    if(selectVal !== "")
                    {
                        if(product.category === selectVal)
                            lstRows.push(<Product data={product} key={product.id}/>)
                        else return;
                    }else lstRows.push(<Product data={product} key={product.id}/>)
                }  
            }else{
                 return;
            }
            }
            
        }

        // if(((String)(product.name).toLowerCase()).indexOf(filterTextVal) === -1 )
        // {
        //     if(stockOnlyVal)
        //     {
        //         if(product.stocked)
        //             lstRows.push(<Product data={product} key={product.id}/>)
        //         else return;
        //     }else{
        //         return;
        //     }
            
        // } 
        // else{
        //     if(stockOnlyVal)
        //     {
        //         if(product.stocked)
        //             lstRows.push(<Product data={product} key={product.id}/>)
        //         else return;
        //     }else{
        //         lstRows.push(<Product data={product} key={product.id}/>)
        //     }
        // } 
    });
    return(
        <div>
            <table>
                <tbody>
                {lstRows}
                </tbody>
                
            </table>
        </div>
    )
}
export default ListProduct;