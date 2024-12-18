const AddProduct = () => {
    return (
        <div className="addProduct">
            <div className="title-box">
                <p>Name</p>
                <input id="title" type="text" />
            </div>
            <div className="image-box">
                <p>Photo</p>
                <input id="image" type="text" />
            </div>
            <div className="price-box">
                <p>Price</p>
                <input id="price" type="text" />
            </div>
            <div className="rating-box">
                <p>Rating</p>
                <input id="rating" type="text" />
            </div>

            <a className="add_productBtn-text btn" href="#!">ADD</a>
            
        </div>

    );
}

export default AddProduct;