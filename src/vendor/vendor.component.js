import React from 'react';
import ReactDOM from 'react-dom';

const ProductItem = ({ category, name }) => (
    <div className="category__list-item">
        {name}
    </div>
);

const ProductItems = ({ state: { products, displayCategory } }) => (
    <div className="category__list-item-container">
        {products
            .filter(
                ({ category }) =>
                    displayCategory === category || displayCategory === "All"
            )
            .map(({ category, name }) => (
                <ProductItem
                    key={`ProductItems-${name}`}
                    category={category}
                    name={name}
                />
            ))}
    </div>
);

const ButtonCategories = (productCategories, setCategory) =>
    productCategories.map(category => (
        <a  key={category}
            onClick={() => setCategory(category)}
            >
            {category}
        </a>
    ));

const UI = ({
                state,
                state: { productCategories },
                setCategory
            }) => (
    <div className="container">
        <div className="category">
            {ButtonCategories(productCategories, setCategory)}
        </div>
        <div className="category__items">
            <ProductItems state={state}/>
        </div>
    </div>
);

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayCategory: "All",
            products: props.products,
            productCategories: props.productCategories
        };
        this.setCategory = this.setCategory.bind(this);
    }
    setCategory(category) {
        this.setState({
            displayCategory: category
        });
    }
    render() {
        return <div>
            <UI setCategory={this.setCategory} state={this.state} />
        </div>
    }
}

// data
const PRODUCTS = [
    { category: "Wedding", name: "Football" },
    { category: "Wedding", name: "Baseball" },
    { category: "Wedding", name: "Basketball" },
    { category: "Birthday", name: "iPod Touch" },
    { category: "Birthday", name: "iPhone 5" },
    { category: "Other", name: "Nexus 7" },
    { category: "Other", name: "Holiday" }
];

// get unique category items
const uniqueItems = (x, i, array) => array.indexOf(x) === i;
const PRODUCT_CATEGORIES = PRODUCTS.map(prod => prod.category).filter(
    uniqueItems
);

PRODUCT_CATEGORIES.push("All");
PRODUCT_CATEGORIES.sort();

export default class VendorRoot extends React.Component {
    render () {
        return (
            <Main products={PRODUCTS} productCategories={PRODUCT_CATEGORIES} />
            )
    }
}

