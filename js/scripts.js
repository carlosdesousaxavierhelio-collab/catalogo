async function carregarprodutos() {
    const container = document.getElementById("produtos");

    try{
        const resposta = await fetch("https://dummyjson.com/products");
        const dados = await resposta.json();

        dados.products.forEach((produto) => {
            const card =`  
            <div class="col mb-5">
                        <div class="card h-100" style=" background-color: gray; color: gold;">
                            <!-- Sale badge-->
                            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                            <!-- Product image-->
                            <img class="card-img-top" src="${produto.thumbnail}" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${produto.title}</h5>
                                    <!-- Product reviews-->
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    <!-- Product price-->
                                   R$${produto.price}
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="item.html?id=${produto.id}">Adicionar ao Carrinho</a></div>
                            </div>
                        </div>
                    </div>
            `;
            container.innerHTML += card;
        });

    }catch(error){
        console.error("Erro ao carregar os produtos:", error);
        container.innerHTML = "<p>Ocorreu um erro ao carregar os produtos. Por favor, tente novamente mais tarde.</p>";
    }
}

carregarprodutos();