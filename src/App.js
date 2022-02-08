import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";

export default function App(){
    return (
        <div>
            <Navbar />
            <Hero />
            <div  id="card--div"> 
                <Card 
                    img={ require("./images/img1.jpg") } 
                    rating = { "5.0" }
                    poin = {"(6)"}
                    country = { "PAK" }
                    info = { "Life Lessons with katie zafres" }
                    price = { "200" }
                />
                
                <Card 
                    img={ require("./images/img2.jpg") } 
                    rating = { "4.7" }
                    poin = {"(6)"}
                    country = { "USA" }
                    info = { "Working With props its loks better" }
                    price = { "120" }
                />
                
                <Card 
                    img={ require("./images/img3.jpg") } 
                    rating = { "4.9" }
                    poin = {"(6)"}
                    country = { "UAE" }
                    info = { "Life Lessons with katie zafres" }
                    price = { "150" }
                />
                
                <Card 
                    img={ require("./images/img4.jpg") } 
                    rating = { "4.1" }
                    poin = {"(6)"}
                    country = { "UK" }
                    info = { "Stronger with checking" }
                    price = { "200" }
                />
                
                <Card 
                    img={ require("./images/img5.jpg") } 
                    rating = { "4.0" }
                    poin = {"(6)"}
                    country = { "INDIA" }
                    info = { "The bad Quality world" }
                    price = { "53" }
                />
            
            </div>
            

        </div>
    )
}