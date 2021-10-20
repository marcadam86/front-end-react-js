import React, { useState } from 'react'
import card from '../assets/card.png'
import { Link } from 'react-router-dom';

const Card = (props) => {
    const p = props.product

    const [editProduct, setEditProduct] = useState({})
    //DELETE HANDLER
    const deleteHandler = async (id) => {
        await fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                props.getProducts()
            })
    }

    //EDIT HANDLER
    const editHandler = async (id) => {
        await fetch(`http://localhost:3000/products${id}`)
            .then(res => res.json())
            .then(data => setEditProduct(data))
    }

    console.log(editProduct);
    return (
        <div className="col-md-4 mb-4">
            <div class="card">
                <img src={card} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{p.title}</h5>
                    <p class="card-text">{p.description}</p>
                    <h6><strong>Stock:</strong> {p.stock}</h6>
                    <h6><strong>Price:</strong> PKR. {p.price}</h6>
                    <Link to={`/product/${p.id}`} class="btn btn-primary">Add to Bucket</Link>
                    <button className='btn btn-dangrous' onClick={() => deleteHandler(p.id)}>Delete</button>
                    <Link to={`/edit/${p.id}`} className='btn btn-info' onClick={() => editHandler(p.id)}>Edit</Link>
                </div>
            </div>
        </div>
    )
}

export default Card