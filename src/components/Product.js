import { useParams } from 'react-router';
import { useState } from 'react';
import { FaStar, FaUserCircle, FaRegThumbsUp, FaRegThumbsDown} from "react-icons/fa";

const Product = (props) => {
    const [product, setProduct] = useState({});

    const { id } = useParams();
    fetch("https://fakestoreapi.com/products/".concat(id))
  .then((res) => res.json())
  .then((json) => setProduct(json));
//   console.log(product.title)
  return (
    <div className='container'>
        <div className="row" key={product.id}>
            <div className='col-md-5 d-flex align-items-center'>
                <img src={product.image} className='img-fluid' alt="product" />
            </div>
            <div className='col-md-5 d-flex align-items-center'>
             <div>
                <h1 className="fw-bolder mb-3">{product.title}</h1>
                <p className="fw-bold">${product.price}</p>
                <p className="fst-italic">{product.description}</p>
                <p className="fw-lighter text-decoration-underline">{product.category}</p>
                <a href="#" className="btn btn-outline-primary me-5">Buy</a>
                <a href="#" className="btn btn-outline-secondary">Review</a>

             </div>  
            </div>
        </div>
        <div className='mt-5 mb-5'>
            <h2 className="fw-bolder">Reviews</h2>
            <div>
                
                <div className="card mb-1" style={{ width: "90%" }}>
                    <div className="card-body">
                        <a href="#" style={{ textDecoration: "none" , color: "black"}}>
                            <h5 className="card-title pt-1">  <FaUserCircle /> Bassant Mahmoud </h5>
                        </a> 
                        <div>
                            <FaStar style={{color: "gold"}} />  
                            <FaStar style={{color: "gold"}} />  
                            <FaStar style={{color: "gold"}} />  
                            <FaStar style={{color: "gold"}} />  
                            <FaStar />
                        </div>
                        <p className="card-text">
                         A good and useful product. I recommend it to anyone. it is fancy and neat.
                        </p>
                        <a href="#" className="card-link">
                            <FaRegThumbsUp />
                        </a>
                        <a href="#" className="card-link">
                            <FaRegThumbsDown /> 
                        </a>
                        <a href="#" className="card-link">
                            is it useful or not? 
                        </a>
                    </div>
                </div>

                <div className="card mb-1" style={{ width: "90%" }}>
                    <div className="card-body">
                        <a href="#" style={{ textDecoration: "none" , color: "black"}}>
                            <h5 className="card-title pt-1">  <FaUserCircle /> Rayan EL-shami </h5>
                        </a> 
                        <div>
                            <FaStar style={{color: "gold"}} />  
                            <FaStar />  
                            <FaStar />  
                            <FaStar />  
                            <FaStar />
                        </div>
                        <p className="card-text">
                         it does not suit me.
                        </p>
                        <a href="#" className="card-link">
                            <FaRegThumbsUp />
                        </a>
                        <a href="#" className="card-link">
                            <FaRegThumbsDown /> 
                        </a>
                        <a href="#" className="card-link">
                            is it useful or not? 
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Product
