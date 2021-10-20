// import React from 'react'
// import Card from '../components/Card'
// import { products } from '../data/products'
// import Slider from './../components/Slider';

// const Home = () => {
//     return (
//         <div>
//             <Slider />
//             <div className="row mt-5">
//                 {
//                     products.map((product) => <Card data={product} />)
//                 }
//             </div>
//         </div>
//     )
// }

// export default Home

import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from '../components/Card'
import Slider from '../components/Slider'


const Home = () => {

    //Now data fetching through API
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const getProducts = async () => {
        setLoading(true)
        await fetch('http://localhost:3000/categories')
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
                setProducts(data)
            })
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <Slider />
            <div className="row mt-5">
                {
                    loading ? <h3>Loading...</h3> : products.map((p, i) => { <Card key={i} product={p} /> })
                }
            </div>
        </div>
    )
}

export default Home
