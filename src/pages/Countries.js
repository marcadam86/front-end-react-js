import React, { useState, useEffect } from 'react'

const Countries = () => {

    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)
    const getCountries = async () => {
        setLoading(true)
        await fetch('https://restcountries.eu/rest/v2/all')
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
                setCountries(data)
            })
    }
    useEffect(() => {
        getCountries()
    }, [])

    return (
        <div>
            {
                loading ? <h1 style={{ textTransform: 'uppercase', color: 'red', fontWeight: 'bolder' }}>Loading...</h1> : countries.map((country) => {
                    <div className="row w-30 col-md-3">
                        <img src={country.flag} alt="" />
                        <h6>Country Name: {country.name}</h6>
                        <h6>Country Capital: {country.capital}</h6>
                    </div>    
            })
            }
        </div>
    )
}

export default Countries
