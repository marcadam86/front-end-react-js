import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)


    const getCategories = async () => {
        setLoading(true)
        await fetch('http://localhost:3000/categories')
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
                setCategories(data)
            })
    }
    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/collection/everyday-value">Everyday Value</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/collection/make-it-a-meal">Make It A Meal</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/collection/signature-box">Signature Boxes</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/collection/sharing">Sharing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/collection/promotions">Promotions</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/collection/snacks">Snacks</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/collection/midnight-deals">MIDNIGHT DEALS</Link>
                            </li> */}
                            {
                                loading ? <h1>Loading</h1> : categories.map((category) => {
                                    <li class="nav-item">
                                        <Link class="nav-link active" aria-current="page" to={`/collection/${category}`}>{category.replace("-", "")}</Link>
                                    </li>
                                })
                            }
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/countries">Countries</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar
