document.addEventListener('DOMContentLoaded', () => {
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const priceValue = document.getElementById('priceValue');
    const sortFilter = document.getElementById('sortFilter');
    const products = document.querySelectorAll('.product');

    // Filtrar por categoria
    categoryFilter.addEventListener('change', () => {
        const category = categoryFilter.value;
        products.forEach(product => {
            if (category === 'all' || product.getAttribute('data-category') === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });

    // Filtrar por preço
    priceFilter.addEventListener('input', () => {
        const price = priceFilter.value;
        priceValue.textContent = `Até R$ ${price}`;
        products.forEach(product => {
            if (parseInt(product.getAttribute('data-price')) <= price) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });

    // Ordenar produtos
    sortFilter.addEventListener('change', () => {
        const sortBy = sortFilter.value;
        const sortedProducts = Array.from(products).sort((a, b) => {
            const priceA = parseInt(a.getAttribute('data-price'));
            const priceB = parseInt(b.getAttribute('data-price'));
            if (sortBy === 'price-asc') {
                return priceA - priceB;
            } else if (sortBy === 'price-desc') {
                return priceB - priceA;
            }
            return 0;
        });

        const productsContainer = document.querySelector('.products');
        productsContainer.innerHTML = '';
        sortedProducts.forEach(product => {
            productsContainer.appendChild(product);
        });
    });
});
