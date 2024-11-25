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
  const changeHandler = () => {};
  const deleteHandler = () => {};

  return (
    <div className="item-list">
      <p>Purchased Products</p>
      {products.map((product , index) => (
        <div key={index} className="form-input__list">
          <FormInput
            type="text"
            name="name"
            label="Product Name"
            value={product.name}
            onChange={changeHandler}
          />
          <div>
            <FormInput
              type="text"
              name="price"
              label="Price"
              value={product.price}
              onChange={changeHandler}
            />
            <FormInput
              type="text"
              name="qty"
              label="Qty"
              value={product.qty    }
              onChange={changeHandler}
            />
          </div>
          <button onClick={deleteHandler}>Remove</button>
        </div>
      ))}
      <button onClick={addHandler}>Add Item</button>
    </div>
  );
}

export default ItemList;
