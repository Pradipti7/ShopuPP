import { useState } from 'react';

function VendorRegister() {
  const [formData, setFormData] = useState({
    vendorName: '',
    productName: '',
    productPrice: '',
    productDescription: '',
    productQuantity: '',
    productCategory: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.productName,
        price: parseFloat(formData.productPrice),
        description: formData.productDescription,
        vendor: formData.vendorName,
        quantity: parseInt(formData.productQuantity),
        category: formData.productCategory,
      }),
    })
      .then(() => {
        alert('Product Registered Successfully!');
        setFormData({
          vendorName: '',
          productName: '',
          productPrice: '',
          productDescription: '',
          productQuantity: '',
          productCategory: '',
        });
      })
      .catch(err => console.error('Error registering product:', err));
  };

  return (
    <div className="vendor-register">
      <h2>Vendor Registration</h2>
      <form onSubmit={handleSubmit}>
        <input name="vendorName" placeholder="Vendor Name" value={formData.vendorName} onChange={handleChange} required />
        <input name="productName" placeholder="Product Name" value={formData.productName} onChange={handleChange} required />
        <input name="productPrice" type="number" placeholder="Product Price" value={formData.productPrice} onChange={handleChange} required />
        <input name="productDescription" placeholder="Product Description" value={formData.productDescription} onChange={handleChange} required />
        <input name="productQuantity" type="number" placeholder="Product Quantity" value={formData.productQuantity} onChange={handleChange} required />
        <input name="productCategory" placeholder="Product Category" value={formData.productCategory} onChange={handleChange} required />
        <button type="submit">Register Product</button>
      </form>
    </div>
  );
}

export default VendorRegister;
