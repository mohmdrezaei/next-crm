import FormInput from "./FormInput";

function ItemList({ form, setForm }) {
  const { products } = form;
  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
    console.log(products);
  };
  const changeHandler = (e, index) => {
    const { name, value } = e.target;
    const newProducts = [...products];
    
    newProducts[index][name] = value;
    setForm({ ...form, products: newProducts });
  };
  const deleteHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index , 1)
    setForm({ ...form, products: newProducts });
  };

  return (
    <div className="item-list">
      <p>Purchased Products</p>
      {products.map((product, index) => (
        <div key={index} className="form-input__list">
          <FormInput
            type="text"
            name="name"
            label="Product Name"
            value={product.name}
            onChange={(e) => changeHandler(e, index)}
          />
          <div>
            <FormInput
              type="text"
              name="price"
              label="Price"
              value={product.price}
              onChange={(e) => changeHandler(e, index)}
            />
            <FormInput
              type="number"
              name="qty"
              label="Qty"
              value={product.qty}
              onChange={(e) => changeHandler(e, index)}
            />
          </div>
          <button onClick={()=>deleteHandler(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addHandler}>Add Item</button>
    </div>
  );
}

export default ItemList;
