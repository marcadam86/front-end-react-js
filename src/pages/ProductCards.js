import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Card from '../components/Card';


const ProductCards = () => {

    const { category } = useParams()
    const [products, setProducts] = useState([])
    
    const [loading, setLoading] = useState(false)

    const getProducts = async () => {
        setLoading(true)
        await fetch('http://localhost:3000/products')
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
                setProducts(data)
            })
    }
    console.log(products);

    useEffect(() => {
        getProducts()
    }, [])

    const filteredProds = products.filter(product => product.category === category)

    return (
        <div className="products-wrapper">
            <div className="page-title" style={{ paddingTop: "30px", paddingBottom: "30px", }}>
                <h3 style={{ textAlign: 'center', textTransform: 'uppercase' }}>{category}</h3>
            </div>
            <div className="row">
                {
                    filteredProds.map((p, i) => <Card key={i} product={p} getProducts={getProducts} />)
                }
            </div>
        </div>
    )
}
export default ProductCards
