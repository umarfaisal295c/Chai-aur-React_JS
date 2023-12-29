import { useEffect, useState } from "react";
import { addToCart } from "../Store/Slice/CartSlice";
import { useDispatch } from "react-redux";
function Home() {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, []);
  // function of handleData
  const handleData = (product) => {
    dispatch(addToCart(product));
    console.log(product);
  };
  return (
    <>
      <div className="productsWrapper">
        {product.map((product, id) => {
          return (
            <div className="card" key={id}>
              <img src={product.image} alt="" />
              <h4>{product.title}</h4>
              <h5>{product.price}</h5>
              <button className="btn" onClick={() => handleData(product)}>
                AddToCart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
