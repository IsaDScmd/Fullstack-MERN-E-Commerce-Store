import React, { useState } from 'react';
import axios from 'axios';

function SearchProduct() {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (event) => {
        event.preventDefault();
        setLoading(true);
        axios.get(`/api/search?query=${searchTerm}`)
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Search failed:', error);
                setLoading(false);
            });
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search for products..." />
                <button type="submit">Search</button>
            </form>
            {loading ? <p>Loading...</p> : null}
            <ul>
                {products.length > 0 ? (
                    products.map(product => <li key={product.id}>{product.name}</li>)
                ) : (
                    !loading && <p>No products found.</p>
                )}
            </ul>
        </div>
    );
}

export default SearchProduct