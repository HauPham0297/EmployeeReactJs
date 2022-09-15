
const SearchBar = (props) =>{
   // const inStockOnly = props.inStockOnly;
    const onChangeFilterText = (event)=>{
        props.onFilterTextChange(event.target.value)
    }
    const onChangeStock = (event)=>{
        props.onInStockChange(event.target.checked)
    }
    
    const onChangeSelect = (event)=>{
        props.onFilterSelectchange(event.target.value)
    }

    return(
        <div>
            <input type="text" placeholder="Enter key search..." value={props.filterText} onChange={onChangeFilterText}/>
            <p>
                <input type="checkbox" checked={props.inStockOnly} onChange={onChangeStock} />
                {" "}Stock 
            </p>
            <select value={props.category} onChange={onChangeSelect}>
              <option value=""></option>
              <option value="Sporting Goods">Sporting Goods</option>
              <option value="Electronics">Electronics</option>
            </select>
        </div>
    )
}
export default SearchBar;