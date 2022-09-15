import { useState } from "react";
import ListProduct from "./ListProduct";
import SearchBar from "./SearchBar";

const Search = ()=>{
    const products = [
        {id:1,category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
        {id:2,category: 'Sporting Goods', price: '$9.99', stocked: false, name: 'Baseball'},
        {id:3,category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball Sport'},
        {id:4,category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        {id:5,category: 'Electronics', price: '$399.99', stocked: true, name: 'iPhone 5'},
        {id:6,category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
        {id:7,category: 'Sporting Goods', price: '$19.99', stocked: false, name: 'Volleyball'},
        {id:8,category: 'Electronics', price: '$199.99', stocked: true, name: 'iPhone 10'},
        {id:9,category: 'Electronics', price: '$299.99', stocked: false, name: 'iPhone 12'},
      ];
    const [searchStored, setSearchStored] = useState({
        filterText:'',
        inStockOnly:false,
        selectChange:''
    }) 
    const handleFilterTextChange = (filterTextVal) =>{
        setSearchStored(prevState=>({
            ...prevState,
            filterText:filterTextVal
        }))
    }
    
    const handleInStockChange = (stockOnlyVal) =>{
        setSearchStored(prevState=>({
            ...prevState,
            inStockOnly:stockOnlyVal
        }))
    }
    const handleSelectChange = (selectVal) =>{
        setSearchStored(prevState=>({
            ...prevState,
            selectChange:selectVal
        }))
    }
    
    return (
        <div>
            <SearchBar
                filterText={searchStored.filterText}
                inStockOnly={searchStored.inStockOnly}
                onFilterTextChange={handleFilterTextChange}
                onInStockChange={handleInStockChange}
                onFilterSelectchange={handleSelectChange}
            />
            <ListProduct
                products={products}
                filterText={searchStored.filterText}
                inStockOnly={searchStored.inStockOnly}
                selectVal={searchStored.selectChange}
            />
        </div>
    )
}
export default Search;