import React from "react";
import Product from "./Product";
import {products} from "../../Seed";

export default class ProductList extends React.Component{
    state = {
        productList:[],
    }
    componentDidMount() {
        this.setState({
                productList: products
            }
        );
    }

    handleProductUpVote=(productId)=>{
        console.log('product ID:'+productId);

        const pdts = this.state.productList.map((product)=>{
                if(productId === product.id){
                    return Object.assign({},product,{ votes: product.votes + 1});
                }else{
                    return product;
                }
            }
        );

        this.setState({
                productList:pdts,
            }
        );
    }
    render() {

        const productComponents = products.map(product=>(
            <Product
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
                onVote={this.handleProductUpVote}
            />
        ));
        return (
            <div className='ui unstackable items'>
                {productComponents}
            </div>
        );
    }

}