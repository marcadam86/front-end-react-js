import React, { useState, useEffect } from 'react'

const Create = () => {
    const [product, setProduct] = useState({})

    const createProduct = async () => {
        await fetch(`http://localhost:3000/product/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then(res => res.json())
            .then(data => console.log('Product Created Successfully'))
    }
    return (
        <div className="w-50">
            <h1>Add New Products</h1>
            <input type="text" className="form-control form-control-sm mb-2" placeholder="Product Title" onChange={(e) => setProduct({ ...product, title: e.target.vale })} value={product.title} />
            <input type="text" className="form-control form-control-sm mb-2" placeholder="Product Slug" onChange={(e) => setProduct({ ...product, slug: e.target.value })} value={product.slug} />
            <input type="text" className="form-control form-control-sm mb-2" placeholder="Product Description" onChange={(e) => setProduct({ ...product, description: e.target.value })} value={product.description} />
            <input type="text" className="form-control form-control-sm mb-2" placeholder="Product Price" onChange={(e) => setProduct({ ...product, price: e.target.value })} value={product.price} />
            <input type="text" className="form-control form-control-sm mb-2" placeholder="Product Stock" onChange={(e) => setProduct({ ...product, stock: e.target.value })} value={product.stock} />
            <button type="button" value="Create Product" onClick={createProduct} className="btn btn-success">Create Product</button>
        </div>
    )
}

export default Create