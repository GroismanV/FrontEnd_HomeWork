document.addEventListener("DOMContentLoaded", function () {
    // Получение продуктов с сервера
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            // Отображение продуктов в браузере
            const productContainer = document.getElementById('product-container');
            data.products.forEach(product => {
                const card = createProductCard(product);
                productContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching products:', error));

    // Функция создания карточки продукта
    function createProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('product-card');

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.title;

        const title = document.createElement('h3');
        title.textContent = product.title;

        const price = document.createElement('p');
        price.textContent = `Price: $${product.price}`;

        const description = document.createElement('p');
        description.textContent = product.description;

        const button = document.createElement('button');
        button.textContent = 'Add to Cart';

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(description);
        card.appendChild(button);

        return card;
    }
});
