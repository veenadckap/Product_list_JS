"use strict";

let image = document.querySelectorAll('img');
let product = document.querySelector("#product");
let  brand = document.querySelector("#brand");
let  rate = document.querySelector("#rate");
let para = document.querySelector("#para");
let image_add = document.getElementById("image_update");

let object = [{

    src: "https://course-api.com/images/store/product-1.jpeg",
    Product: "High-Back-Bench",
    Brand: "Casre",
    Rate: "$66.99",
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
    },
    
    {

        src: "https://course-api.com/images/store/product-2.jpeg",
        Product: "Albany Table",
        Brand: "Titan",
        Rate: "$66.99",
        para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
            "Direct trade four loko narwhal VHS pop-up," +
            "chartreuse trust fund typewriter street art swag"
    },
    
    {

        src: "https://course-api.com/images/store/product-3.jpeg",
        Product: "Wooden Table",
        Brand: "Durian",
        Rate: "$45.99",
        para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
            "Direct trade four loko narwhal VHS pop-up," +
            "chartreuse trust fund typewriter street art swag"

    },

    {
        src: "https://course-api.com/images/store/product-4.jpeg",
        Product: "Wooden Table",
        Brand: "Teak",
        Rate: "$66.99",
        para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
            "Direct trade four loko narwhal VHS pop-up," +
            "chartreuse trust fund typewriter street art swag"
    },

    {
        src: "https://course-api.com/images/store/product-5.jpeg",
        Product: " Dining Table",
        Brand: "Royaloak",
        Rate: "Sofa Set",
        para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
            "Direct trade four loko narwhal VHS pop-up," +
            "chartreuse trust fund typewriter street art swag"
    },

    {
        src: "https://course-api.com/images/store/product-6.jpeg",
        Product: "Sofa Set",
        Brand: "Natuzzi",
        Rate: "$10.99",
        para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
            "Direct trade four loko narwhal VHS pop-up," +
            "chartreuse trust fund typewriter street art swag"
    },

    {

        src: "https://course-api.com/images/store/product-7.jpeg",
        Product: "Modern BookShelf",
        Brand: "Snazzy",
        Rate: "$4.99",
        para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
            "Direct trade four loko narwhal VHS pop-up," +
            "chartreuse trust fund typewriter street art swag"
    },

    {
       
        src: "https://course-api.com/images/store/product-8.jpeg",
        Product: "Emperor Bed",
        Brand: "Eliot",
        Rate: "$13.99",
        para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
            "Direct trade four loko narwhal VHS pop-up," +
            "chartreuse trust fund typewriter street art swag"
    },

    {

        src: "https://course-api.com/images/store/product-9.jpeg",
        Product: "Utopia Sofa",
        Brand: "Fabric",
        Rate: "$13.99",
        para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
            "Direct trade four loko narwhal VHS pop-up," +
            "chartreuse trust fund typewriter street art swag"

    }
];

for (let i=0; i < image.length; i++){
    image[i].addEventListener("click",function(){
        location.href = "home.html";
        localStorage.setItem('index',i);
        
    });
}

let index1 = localStorage.getItem('index')

product.innerHTML = object[index1].Product;
brand.innerHTML = object[index1].Brand;
rate.innerHTML = object[index1].Rate;
para.innerHTML = object[index1].para;
image_add.src = object[index1].src;

let back_button = document.getElementsByClassName("btn");

for(let i=0; i<back_button.length; i++){
    back_button[i].addEventListener("click",function(){
        location.href = "product.html";
    })
}

function searchProducts() {
    var searchValue = document.getElementById('searchInput').value.toLowerCase();
    var productDivs = document.querySelectorAll('.products .image');

    productDivs.forEach(function (div) {
        var productText = div.querySelector('p').textContent.toLowerCase();
        if (productText.includes(searchValue)) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
}



