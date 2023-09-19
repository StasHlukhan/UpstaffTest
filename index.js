function generateRandomText() {
    const texts = [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt",
      "ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
      "quis nostrud exercitation ullamco",
      "laboris nisi ut aliquip ex ea commodo",
      "duis aute irure dolor in reprehenderit",
    ];
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
  }
  
  const styledDiv = document.createElement("div");
  styledDiv.style.backgroundColor = "#f4f4f4";
  styledDiv.style.border = "1px solid #ddd";
  styledDiv.style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0.3)";
  styledDiv.style.borderRadius = "5px";
  styledDiv.style.padding = "10px";
  styledDiv.style.textAlign = "center";
  styledDiv.style.margin = "10px 0";
  styledDiv.style.position = "relative";
  
  styledDiv.textContent = generateRandomText();
  
  const products = document.querySelectorAll(".product");
  if (products.length >= 4) {
    const fourthProduct = products[3];
    fourthProduct.parentNode.insertBefore(styledDiv, fourthProduct.nextSibling);
  }
  
  function applyResponsiveStyles() {
    const columns = window.innerWidth >= 768 ? 3 : 2;
  
    styledDiv.style.width = columns === 3 ? "66.66%" : "100%";
    styledDiv.style.margin = columns === 3 ? "10px auto" : "10px 0";
  }
  
  window.addEventListener("resize", applyResponsiveStyles);
  
  applyResponsiveStyles();