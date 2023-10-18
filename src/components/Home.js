import products from '../images/products_7.jpg'
import {Link } from "react-router-dom"; 

const Home = () => {
    return (
        <div>
           <div className='container'>
                <div className='row'>
                    <div className='col-md-7 d-flex align-items-center'>
                        <div className=' home-intro-text p-5'>
                            <h1>You Deserve The Best</h1>
                            <h6 className='fw-lighter'>
                                Get the best of Shopping and Entertainment.  
                                <br/> 
                                Discover and shop. 
                                <br/> 
                                Browse many products, search for a product, buy products.
                            </h6>
                            <div className='mt-4'>
                                <Link className="btn btn-danger me-5" to="/products">Shop Now</Link>
                                <Link className="btn btn-outline-secondary" to="#">Category</Link>       
                            </div>
                        </div>  
                    </div>
                    <div className='col-md-5 d-flex align-items-center'>
                        <img src={products} className='img-fluid' alt="products" />
                    </div>
                </div>
           </div>
       </div>
    )
    
  };
  
  export default Home;