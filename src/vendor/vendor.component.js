import React from 'react';

const ProductItem = ({ name, description,url,priceRange }) => (
    <a href="#" className="category__list-item">
        <img src={url} alt="Images"/>
        <hr/>
        <h3>{name}</h3>
        <article>{description}</article>
        <b>{`Starts from Rp${priceRange}`}</b>
        <div className="redirect-button">
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            <span>See Detail</span>
        </div>
    </a>
);

const ProductItems = ({ state: { products, displayCategory } }) => (
    <div className="category__list-item-container">
        {products
            .filter(
                ({ category }) =>
                    displayCategory === category || displayCategory === "All"
            )
            .map(({ category, name, description, url,priceRange }) => (
                <ProductItem
                    key={`ProductItems-${name}`}
                    category={category}
                    url={url}
                    name={name}
                    description={description}
                    priceRange={priceRange}
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
    { category: "Wedding", name: "Mardhiyah Florist", url: "https://picsum.photos/100",
        description: "We provide the most beautiful flowers to splash the most important day of your life, import and local flowers. ",
        priceRange:"1.000.000" },
    { category: "Wedding", name: "Neng Florist", url: "https://picsum.photos/100",
        description: "Arranged with love and passion, composed with quality fresh flowers, we're here to make your day the most memorable day",
        priceRange:"500.000" },
    { category: "Birthday", name: "Historia Event Organizer", url: "https://picsum.photos/100",
        description: "Say no more to messy busy party, we gathered best people to organize your parties professionaly. Let us take care of the mess, enjoy your parties!",
        priceRange:"1.500.000" },
    { category: "Birthday", name: "Yes Event Organizer", url: "https://picsum.photos/100",
        description: "Say yes to parties, cause we are here to help you organized your parties. With various theme, and best consultant in town, we create the best party in town.",
        priceRange:"1.000.000" },
    { category: "Other", name: "Yes Event Organizer", url: "https://picsum.photos/100",
        description: "Say yes to parties, cause we are here to help you organized your parties. With various theme, and best consultant in town, we create the best party in town.",
        priceRange:"3.000.000" },
    { category: "Other", name: "Historia Event Organizer", url: "https://picsum.photos/100",
        description: "Say no more to messy busy party, we gathered best people to organize your parties professionaly. Let us take care of the mess, enjoy your parties!",
        priceRange:"500.000" },
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

