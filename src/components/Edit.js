import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

const Edit = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({})
    //EDIT HANDLER
    const getProduct = async (id) => {
        await fetch(`http://localhost:3000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }
    useEffect(() => {
        getProduct(id)
    }, [id])

    const updateProduct = async () => {
        await fetch(`http://localhost:3000/product/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then(res => res.json())
            .then(data => console.log('Product Updated'))
    }
    return (
        <div className="w-50">
            <h1>Edit the Product</h1>
            <input type="text" className="form-control form-control-sm mb-2" placeholder="Product Title" onChange={(e) => setProduct({ ...product, title: e.target.vale })} value={product.title} />
            <input type="text" className="form-control form-control-sm mb-2" placeholder="Product Slug" onChange={(e) => setProduct({ ...product, slug: e.target.value })} value={product.slug} />
            <input type="text" className="form-control form-control-sm mb-2" placeholder="Product Description" onChange={(e) => setProduct({ ...product, description: e.target.value })} value={product.description} />
            <input type="text" className="form-control form-control-sm mb-2" placeholder="Product Price" onChange={(e) => setProduct({ ...product, price: e.target.value })} value={product.price} />
            <input type="text" className="form-control form-control-sm mb-2" placeholder="Product Stock" onChange={(e) => setProduct({ ...product, stock: e.target.value })} value={product.stock} />
            <button type="button" value="Update Product" onClick={updateProduct} className="btn btn-success">Update</button>
        </div>
    )
}

export default Edit