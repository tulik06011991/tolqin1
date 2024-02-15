import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import '../App.css'

const Product = () => {
    const {id} = useParams()
    const [data, setData] = useState([])
    

    const token = localStorage.getItem('token');
    const handleGet = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/auth/products`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setData(response.data);
            
        } catch (error) {
            console.log(error);
        }
    };
    

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            handleGet();
        }
    }, []); // Agar token o'zgarishi emasdan kechirilsa, handleGet funksiyasini faqat bir marta ishga tushirish uchun bo'sh massiv berilgan
    

    
    return (
        <>
        
                    <div>
                    <h1 className='product'>Products</h1><hr />
                    

                    </div>
                <div className="wrapper">
                    {data.map((item ) =>(

                <div key={item.id} className="card mt-5" style={{ width: '18rem' }}>
                    
                    <img src={`http://localhost:5000/images`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.id}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='d-flex justify-content-between'>

                        <Link to={`update/${item.id}`} className="btn btn-primary px-1">O'zgartirish</Link>
                        <Link to={`delete/${item.id}`} className="btn btn-primary ms-3 px-3">O'chirish</Link>
                        </div>
                    </div>
                </div>
                        
                    ))}

                </div>
            
        </>
    )
}

export default Product
