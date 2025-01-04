import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([
    "Router", "Switch", "Modem", "Multiplexer", "Splitter", "Card", "Combiner"
  ]
  );
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    stockLevel: 0,
    reorderPoint: 0,
  });

  const [editingIndex, setEditingIndex] = useState(null);
  const [categorySearch, setCategorySearch] = useState("");

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.category || newProduct.stockLevel < 0) {
      alert("Please fill all fields correctly.");
      return;
    }
    if (editingIndex === null) {
      setProducts([...products, newProduct]);
    } else {
      const updatedProducts = [...products];
      updatedProducts[editingIndex] = newProduct;
      setProducts(updatedProducts);
    }
    setNewProduct({ name: "", category: "", stockLevel: 0, reorderPoint: 0 });
    setEditingIndex(null);
  };

  const handleEditProduct = (index) => {
    const productToEdit = products[index];
    setNewProduct(productToEdit);
    setEditingIndex(index);
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const handleStockTransaction = (index, type) => {
    const updatedProduct = { ...products[index] };
    if (type === "in") {
      updatedProduct.stockLevel += 10;
    } else if (type === "out" && updatedProduct.stockLevel >= 10) {
      updatedProduct.stockLevel -= 10;
    }
    const updatedProducts = [...products];
    updatedProducts[index] = updatedProduct;
    setProducts(updatedProducts);
  };

  const filteredCategories = categories.filter(category =>
    category.toLowerCase().includes(categorySearch.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Telecom Inventory Dashboard</h1>
        <nav>
          <ul className="dashboard-nav">
            <li><a href="/products">Products</a></li>
            <li><a href="/suppliers">Suppliers</a></li>
            <li><a href="/transactions">Transactions</a></li>
            <li><a href="/notifications">Notifications</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="welcome-section">
          <h2>Welcome, [User's Name]!</h2>
          <p>Current Stock</p>
          <p><strong>{products.length} Items</strong></p>
          <p>Updated 5 mins ago</p>
        </section>
        <section className="alerts-section">
          <h3>Low Stock Alerts</h3>
          <p>{products.filter(p => p.stockLevel <= p.reorderPoint).length} Products</p>
          <a href="/low-stock">View details</a>
        </section>
        <section className="product-management">
          <h3>Product Management</h3>
          <div>
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <div>
              <input
                type="text"
                placeholder="Search Category"
                value={categorySearch}
                onChange={(e) => setCategorySearch(e.target.value)}
              />
              <select
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              >
                <option value="">Select Category</option>
                {filteredCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <label for="stock-lvl-input">Stock Level</label>
            <input
            name="stock-lvl-input"
              type="number"
              placeholder="Stock Level"
              value={newProduct.stockLevel}
              onChange={(e) => setNewProduct({ ...newProduct, stockLevel: e.target.value })}
            />
            <label for="reorder-pt">Reorder Point</label>
            <input
                name="reorder-pt"
              type="number"
              placeholder="Reorder Point"
              value={newProduct.reorderPoint}
              onChange={(e) => setNewProduct({ ...newProduct, reorderPoint: e.target.value })}
            />
            <button onClick={handleAddProduct}>
              {editingIndex === null ? "Add Product" : "Update Product"}
            </button>
          </div>
          <h4>Product List</h4>
          <ul>
            {products.map((product, index) => (
              // <li key={index}>
              //   <span>{product.name} - {product.category} - Stock: {product.stockLevel}</span>
              //   <button onClick={() => handleEditProduct(index)}>Edit</button>
              //   <button onClick={() => handleDeleteProduct(index)}>Delete</button>
              //   <button onClick={() => handleStockTransaction(index, "in")}>Stock In</button>
              //   <button onClick={() => handleStockTransaction(index, "out")}>Stock Out</button>
              // </li>

              <li key={index} className="product-row">
  <span className="product-details">
    {product.name} - {product.category} - Stock: {product.stockLevel} - Reorder Point: {product.reorderPoint}
  </span>
  <div className="product-actions">
    <button onClick={() => handleEditProduct(index)}>Edit</button>
    <button onClick={() => handleDeleteProduct(index)}>Delete</button>
    <button onClick={() => handleStockTransaction(index, "in")}>Stock In</button>
    <button onClick={() => handleStockTransaction(index, "out")}>Stock Out</button>
  </div>
</li>

            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;
