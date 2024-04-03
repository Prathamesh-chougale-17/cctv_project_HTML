// js/main.js
document.addEventListener("DOMContentLoaded", function () {
  const banner = document.querySelector(".banner");
  const btnViewProducts = document.querySelector(".btn");
  const products = document.querySelector(".products");

  // Simple animation using GSAP
  gsap.from(banner, { duration: 1, opacity: 0, y: -50, ease: "power2.out" });

  btnViewProducts.addEventListener("click", function () {
    // Fetch CCTV products from the server (you need to implement this)
    // For simplicity, let's assume we have an array of products
    const productData = [
      { name: "CCTV Product 1", price: 99.99 },
      { name: "CCTV Product 2", price: 149.99 },
      // Add more products as needed
    ];

    // Display the products dynamically
    productData.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.className = "product";
      productDiv.innerHTML = `
          <h2>${product.name}</h2>
          <p>Price: $${product.price.toFixed(2)}</p>
        `;
      products.appendChild(productDiv);

      // Animation for each product using GSAP
      gsap.from(productDiv, {
        duration: 0.5,
        opacity: 0,
        y: 30,
        ease: "power2.out",
        delay: 0.2,
      });
    });
  });
});
