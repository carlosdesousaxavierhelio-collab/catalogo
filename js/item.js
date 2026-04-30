function pegarid() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

async function carregaritem() {
   const id = pegarid();
   console.log("ID do produto:", id);
   
   if (!id) {
    document.getElementById("item").innerHTML = "<h1>Produto não encontrado</h1>";
    return;
}

try {
    const resposta = await fetch(`https://dummyjson.com/products/${id}`);
    const produto = await resposta.json();

    // preencher o html
    document.querySelector(".card-img-top").src = produto.thumbnail;
    document.querySelector(".display-5").innerText = produto.title;
    document.querySelector(".lead").innerText = produto.description;
    document.querySelector(".fs-5 span:last-child").innerText = `R$${produto.price}`;
    document.querySelector(".small").innerText = `sku: ${produto.sku}`;

}catch (error) {
    console.error("Erro ao carregar o produto:", error);
    document.body.innerHTML = " <h1>erro ao carregar o produto. Por favor, tente novamente mais tarde.</h1>";
}
}

carregaritem();