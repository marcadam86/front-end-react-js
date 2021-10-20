import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import card from '../assets/card.png'

const Detail = () => {

    const { id } = useParams()

    const [productDetail, setProductDetail] = useState({})
    const [loading, setLoading] = useState(false)
    const [overlay, setOverlay] = useState(false)
    const [quantity, setQuantity] = useState(1)
    console.log(productDetail);

    const getProduct = async () => {
        setLoading(true)
        await fetch(`http://localhost:3000/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
                setProductDetail(data)
            })
    }
    useEffect(() => {
        getProduct()
    }, [])

    const baseUrl = 'http://localhost:3000/'
    const handlerIncrement = () => {
        setQuantity(quantity + 1)
    }
    const handlerDecrement = () => {
        setQuantity(quantity - 1)
    }

    // const p = products.find((item) => item.slug === slug) --- No more need of this find() as we are already fetching specific product

    return (
        <div className="0-detail">
            <div className="row">
                <div className="col-md-4">
                    {
                        loading ? <h1>Loading...</h1> : <img src={card} width="100%" />
                    }
                </div>
                <div className="col-md-8">
                    {
                        loading ? <h1>Loading...</h1> : <div>
                            <h3>{productDetail.title}</h3>
                            <p>{productDetail.description}</p>
                            <h6><strong>Stock:</strong> {productDetail.stock}</h6>
                            <h6><strong>Price:</strong> PKR. {productDetail.price * quantity}</h6>
                            <button className="btn btn-danger" onClick={() => handlerDecrement()}>-</button>
                            <button className="btn btn-outline-danger">{quantity}</button>
                            <button className="btn btn-danger" onClick={() => handlerIncrement()}>+</button>
                            <button className="btn btn-danger ms-4" onClick={() => setOverlay(true)}>ADD TO BUCKET</button>
                        </div>
                    }
                </div>
            </div>
            {
                overlay ? <div className="overlay" onClick={() => setOverlay(false)}>
                    <div className="sidebar-wrapper">
                        <div className="sidebar-head">
                            <div className="head-item">
                                <h4>Your<br />Bucket</h4>
                            </div>
                            <div className="head-item">
                                <h3>1</h3>
                            </div>
                            <div className="head-item">
                                <h3>PKR. 1475</h3>
                            </div>
                        </div>
                    </div>
                </div> : ''
            }
        </div >
    )
}

export default Detail
