import React, { useState, useEffect, } from "react";
import ProductTable from "../components/ProductTable";
import ProductList from "../components/ProductList";
import { useNavigate } from "react-router-dom";
import Reviews from "../components/review";

// import solar1 from "./assets/home/solar1.jpeg";
// import slider2 from "./assets/home/solar-slider-2.jpeg";
// import products from "../components/ProductList"; // Adjust the import path as necessary


// Dummy data for slides and products
const slides = [
    { id: 1, image: "/assets/home/DKSlider1.png", title: "Welcome to Craker" },
    { id: 2, image: "/assets/home/DKSlider2.png", title: "Discover Our Products" },
    { id: 3, image: "/assets/home/DKSlider3.png", title: "Best Deals Here" },
];

const mainproducts = [
{
    id: 1,
    image:"/assets/home/DKSlider3.png", // Must be in public/assets/home/
    title: "Product One",
    button: "Buy Now",
},
{
    id: 2,
    image: "/assets/home/DKSlider3.png", // Must be in public/assets/home/
    title: "Product Two",
    button: "Buy Now",
},
{
    id: 3,
    image: "/assets/home/DKSlider3.png", // Works fine
    title: "Product Three",
    button: "Buy Now",
},
];

const products = [
{
    id: 1,
    name: 'Fancy Crackers',
    description: 'Colorful fireworks for celebration.',
    mrp: 500,
    offerPrice: 350,
    image: "/assets/home/Solar3.jpeg"
},
{
    id: 2,
    name: 'Gift Box',
    description: 'Premium selection of crackers.',
    mrp: 1000,
    offerPrice: 800,
    image: "/assets/home/Solar3.jpeg"
}
];

const HeroSection = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        
        <div style={{ position: "relative", width: "auto", margin: "0 auto" }}>

            <img
                src={slides[current].image}
                alt={slides[current].title}
                style={{ width: "100%", borderRadius: "10px" }}
            />
            <h2 style={{ position: "absolute", bottom: "20px", left: "30px", color: "#fff" }}>
                {slides[current].title}
            </h2>
            <button
                onClick={prevSlide}
                style={{ position: "absolute", top: "50%", left: "10px", fontSize: "2rem" }}
            >
                &#8592;
            </button>
            <button
                onClick={nextSlide}
                style={{ position: "absolute", top: "50%", right: "10px", fontSize: "2rem" }}
            >
                &#8594;
            </button>
        </div>
    );
};

const ProductBox = ({ image, title, button }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/product/'); // navigates to /product/
    };

    return (
        <div
            style={{
                border: "1px solid #eee",
                borderRadius: "8px",
                padding: "16px",
                textAlign: "center",
                width: "400px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                margin: "0 10px",
            }}
        >
            <img src={image} alt={title} style={{ width: "100%", borderRadius: "8px" }} />
            <h3 style={{ margin: "16px 0 8px" }}>{title}</h3>
            <button onClick={handleClick} style={{ padding: "8px 16px", borderRadius: "4px", background: "#007bff", color: "#fff", border: "none" }}>
                {button}
            </button>
        </div>
    );
};

const WhyChooseUs = () => (
    <div className="flex flex-col md:flex-row items-center my-10 md:my-16 px-4 md:px-10 bg-gray-50 rounded-xl shadow-lg">
        <div className="w-full md:w-1/2 md:mr-12 mb-6 md:mb-0 flex-shrink-0">
            <img
                src="/assets/home/whychoose.png"
                alt="Why Choose Us"
                className="w-full h-auto rounded-xl shadow-md"
            />
        </div>
        <div className="w-full md:w-1/2 md:pl-8 font-bold">
            <h2 className="mb-4 text-3xl md:text-5xl font-extrabold">Why Choose Us?</h2>
            <p className="mb-4 text-gray-600 font-normal">
                We provide the best quality crackers at unbeatable prices, ensuring your celebrations are safe and memorable.
            </p>
            <ul className="list-disc pl-5 text-gray-800 space-y-2 text-base md:text-lg font-medium">
                <li>Premium quality and safety-tested products</li>
                <li>Wide variety to suit every celebration</li>
                <li>Fast delivery and excellent customer support</li>
                <li>Premium quality and safety-tested products</li>
                <li>Wide variety to suit every celebration</li>
                <li>Fast delivery and excellent customer support</li>
                <li>Premium quality and safety-tested products</li>
                <li>Wide variety to suit every celebration</li>
                <li>Fast delivery and excellent customer support</li>
                <li>Premium quality and safety-tested products</li>
                <li>Wide variety to suit every celebration</li>
                <li>Fast delivery and excellent customer support</li>
            </ul>
        </div>
    </div>
)



const Home = () => {
    
    return (
        <>
            <div>
                <HeroSection />
                <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
                    {mainproducts.map((mainproduct) => (
                        <ProductBox key={mainproduct.id} {...mainproduct} />
                    ))}
                </div>
                <h2 style={{ textAlign: "center", fontSize: 50, fontWeight: 700, marginTop: "40px" }}>Our Products</h2>
                <ProductTable products={products} />
                <WhyChooseUs />
                <Reviews />
            </div>
        </>
    );
};

export default Home;