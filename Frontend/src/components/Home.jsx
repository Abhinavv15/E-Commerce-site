import { useEffect, useState } from "react";
import Cart from "./Cart";


function Home() {
    let [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/product").then((res) => res.json())
        .then((res) => {
            console.log(res);
            setProductData(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:8080/product/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            setProductData((prevProducts) => prevProducts.filter(product => product._id !== id));
        } else {
            console.error("Failed to delete the product");
        }
    };

    const containerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "150px",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        textAlign: "center",
    };

    const cartStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "30px",
        padding: "40px",
        backgroundColor: "#f1f1f1",
    };

    return (
        <div>

            <div style={containerStyle}>
                <h1>Welcome to E-Commerce</h1>
            </div>
            <div style={cartStyle}>
                {productData?.map((product) => (
                    <Cart key={product._id} product={product} onDelete={handleDelete}></Cart>
                ))}
            </div>
        </div>
    );
}

export default Home;
