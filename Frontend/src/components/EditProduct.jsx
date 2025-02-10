import  { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        productName: '',
        productDescription: '',
        productPrice: '',
        productImage: ''
    });

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`http://localhost:8080/api/products/${id}`);
            const data = await response.json();
            setFormData(data.data);
        };

        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch(`http://localhost:8080/api/products/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            navigate('/');
        } catch (error) {
            alert("Error updating product: " + error.message);
        }
    };

    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "20px",
        boxSizing: "border-box",
    };

    const formStyle = {
        width: "100%",
        maxWidth: "500px",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    };

    const headingStyle = {
        textAlign: "center",
        marginBottom: "20px",
        fontSize: "24px",
        fontWeight: "bold",
        color: "#333",
    };

    const inputContainerStyle = {
        marginBottom: "15px",
    };

    const inputStyle = {
        width: "100%",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "16px",
        boxSizing: "border-box",
    };

    const textareaStyle = {
        ...inputStyle,
        minHeight: "100px",
        resize: "vertical",
    };

    const labelStyle = {
        marginBottom: "5px",
        display: "block",
        fontWeight: "bold",
        color: "#555",
    };

    const buttonStyle = {
        padding: "12px",
        width: "100%",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer",
        textAlign: "center",
    };

    return (
        <div style={containerStyle}>
            <form style={formStyle} onSubmit={handleSubmit}>
                <h2 style={headingStyle}>Edit Product</h2>
                
                <div style={inputContainerStyle}>
                    <label style={labelStyle} htmlFor="productName">
                        Product Name:
                    </label>
                    <input
                        type="text"
                        id="productName"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />
                </div>

                <div style={inputContainerStyle}>
                    <label style={labelStyle} htmlFor="productDescription">
                        Product Description:
                    </label>
                    <textarea
                        id="productDescription"
                        name="productDescription"
                        value={formData.productDescription}
                        onChange={handleChange}
                        style={textareaStyle}
                        required
                    />
                </div>

                <div style={inputContainerStyle}>
                    <label style={labelStyle} htmlFor="productPrice">
                        Product Price:
                    </label>
                    <input
                        type="number"
                        id="productPrice"
                        name="productPrice"
                        value={formData.productPrice}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />
                </div>

                <div style={inputContainerStyle}>
                    <label style={labelStyle} htmlFor="productImage">
                        Product Image URL:
                    </label>
                    <input
                        type="text"
                        id="productImage"
                        name="productImage"
                        value={formData.productImage}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                </div>

                <button type="submit" style={buttonStyle}>
                    Update Product
                </button>
            </form>
        </div>
    );
};

export default EditProduct;