import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const navBarStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "white",
        position: "sticky",
        top: "0",
        width: "100%",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        boxSizing: "border-box",
        zIndex: 10,
    };

    const logoStyle = {
        fontSize: "24px",
        fontWeight: "bold",
        cursor: "pointer",
    };

    const linkContainerStyle = {
        display: "flex",
        gap: "20px",
    };

    const linkStyle = {
        color: "white",
        textDecoration: "none",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
    };

    return (
        <nav style={navBarStyle}>
            <div style={logoStyle} onClick={() => navigate("/")}>
                E-Commerce
            </div>
            <div style={linkContainerStyle}>
                <span style={linkStyle} onClick={() => navigate("/")}>Home</span>
                <span style={linkStyle} onClick={() => navigate("/myproducts")}>My Products</span>
                <span style={linkStyle} onClick={() => navigate("/productform")}>Add Product</span>
                <span style={linkStyle} onClick={() => navigate("/cart")}>Cart</span>
                <span style={linkStyle} onClick={() => navigate("/signup")}>Sign Up</span>
                <span style={linkStyle} onClick={() => navigate("/login")}>Login</span>
            </div>
        </nav>
    );
}

export default Navbar;
