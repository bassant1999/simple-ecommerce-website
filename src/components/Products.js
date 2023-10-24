import { useState, useEffect  } from 'react';
// import img1 from '../images/products_1.jpg'
// import img2 from '../images/products_2.jpg'
// import img3 from '../images/products_3.jpg'
// import img4 from '../images/products_4.jpg'
// import img5 from '../images/products_5.jpg'
// import img6 from '../images/products_6.jpg'
// import img from '../images/products_10.jpg'



const Products = () => {
    const [products, setProducts] = useState([]);
    // const [categories, setCategories] = useState([]);

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
      
   }, []);

    // fetch('https://fakestoreapi.com/products')
    // .then(response => response.json())
    // .then(data => setProducts(data))
    // .catch(error => console.error(error));
    // useEffect(()=> {
    //     const getProducts = async()=>{
    //         const productsFromServer = await fetchProducts();
    //         setProducts(productsFromServer)
    //     }
    //     getProducts();
        
    //   },[]);

    // const fetchProducts = async()=>{
    //     const res = await fetch('https://fakestoreapi.com/products');
    //     const data = await res.json();
    //     console.log(data);
    //     return data;
    //   }
    
     
    //   for (let product of products ) {
    //       console.log(product.title)
    //   }
      // const listItems = products.map(product =>
      //   <li key={product.id}>
      //     {product.title}
      //   </li>
      // );

      const prods = products.map(product =>
        <div className="row m-4" key={product.id}>
            <div className='col-md-5 d-flex align-items-center'>
                <img src={product.image} className='img-fluid' alt="product" />
            </div>
            <div className='col-md-5 d-flex align-items-center'>
             <div>
                <h2 className="fw-bolder mb-3">{product.title}</h2>
                <p className="fw-bold">${product.price}</p>
                <p className="fst-italic">{product.description}</p>
                <p className="fw-lighter text-decoration-underline">{product.category}</p>
                <a href={"/products/" + product.id} className="btn btn-outline-primary">view</a>
             </div>  
            </div>
        </div>
      );

    //   fetch('https://fakestoreapi.com/products/categories')
    // .then(res => res.json())
    // .then((json) => {setCategories(json)});

    // function getRandomItem(arr) {

    //     // get random index value
    //     const randomIndex = Math.floor(Math.random() * arr.length);
    
    //     // get random item
    //     const item = arr[randomIndex];
    
    //     return item;
    // }


    // const imgs= [img1, img2, img3, img4, img5, img6];

    // const categs = categories.map(category =>
        
    //     <div className='col-md-6 d-flex align-items-center mb-2'>
    //         <div className="card" style={{ width: "100%" }}>
    //             <img src={img} className="card-img-top" alt="..." />
    //             <div className="card-body">
    //                 <h2 className="card-title text-capitalize">{category }</h2>
                
    //                 <a href="#" className="btn btn-outline-primary">
    //                     view
    //                 </a>
    //             </div>
    //         </div>
    //     </div>

    //   );
  

    return (
        <div className="container m-5">           
            <div>
                <div className='container'>
                    {prods}
                </div>   
            </div>
            
        </div>
      )
}

export default Products
