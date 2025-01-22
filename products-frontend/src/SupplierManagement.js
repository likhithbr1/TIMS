import React, { useState } from "react";
import "./SupplierManagement.css";

const SupplierManagement = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [newSupplier, setNewSupplier] = useState({
    name: "",
    contact: "",
    location: "",
  });

  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddOrUpdateSupplier = () => {
    if (!newSupplier.name || !newSupplier.contact || !newSupplier.location) {
      alert("Please fill all fields.");
      return;
    }

    if (editingIndex === null) {
      setSuppliers([...suppliers, newSupplier]);
    } else {
      const updatedSuppliers = [...suppliers];
      updatedSuppliers[editingIndex] = newSupplier;
      setSuppliers(updatedSuppliers);
    }

    setNewSupplier({ name: "", contact: "", location: "" });
    setEditingIndex(null);
  };

  const handleEditSupplier = (index) => {
    setNewSupplier(suppliers[index]);
    setEditingIndex(index);
  };

  const handleDeleteSupplier = (index) => {
    const updatedSuppliers = suppliers.filter((_, i) => i !== index);
    setSuppliers(updatedSuppliers);
  };

  return (
    <div className="supplier-management-container">
      <h3>Supplier Management</h3>

      <div>
        <input
          type="text"
          placeholder="Supplier Name"
          value={newSupplier.name}
          onChange={(e) => setNewSupplier({ ...newSupplier, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Contact Information"
          value={newSupplier.contact}
          onChange={(e) => setNewSupplier({ ...newSupplier, contact: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={newSupplier.location}
          onChange={(e) => setNewSupplier({ ...newSupplier, location: e.target.value })}
        />
        <button onClick={handleAddOrUpdateSupplier}>
          {editingIndex === null ? "Add Supplier" : "Update Supplier"}
        </button>
      </div>

      <h4>Supplier List</h4>
      <ul className="supplier-list">
        {suppliers.map((supplier, index) => (
          <li key={index}>
            <span>
              <strong>Name:</strong> {supplier.name} | <strong>Contact:</strong> {supplier.contact} |{" "}
              <strong>Location:</strong> {supplier.location}
            </span>
            <div className="supplier-actions">
              <button onClick={() => handleEditSupplier(index)}>Edit</button>
              <button className="delete-button" onClick={() => handleDeleteSupplier(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupplierManagement;
