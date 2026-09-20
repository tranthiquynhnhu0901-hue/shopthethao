function productCard(p){return `<article class="product-card"><div class="product-image"><span class="product-badge">${p.badge}</span><img src="${p.image}" alt="${p.name}"></div><div class="product-info"><span class="product-category">${p.category}</span><h3>${p.name}</h3><div class="rating">★ ${p.rating} <span>(${p.reviews})</span></div><p>${p.shortDescription}</p><div class="price"><strong>${money(p.price)}</strong><del>${money(p.oldPrice)}</del></div><a class="product-btn" href="product.html?id=${p.id}">Xem chi tiết</a></div></article>`}
function blogCard(b){return `<article class="blog-card"><img src="${b.image}" alt="${b.title}"><div class="blog-content"><span class="blog-category">${b.category}</span><h3>${b.title}</h3><p>${b.excerpt}</p><a class="read-more" href="blog-detail.html?id=${b.id}">Đọc bài chi tiết →</a></div></article>`}
const featuredProducts=document.getElementById('featuredProducts');
if(featuredProducts) featuredProducts.innerHTML=products.slice(0,4).map(productCard).join('');
const homeBlogs=document.getElementById('homeBlogs');
if(homeBlogs) homeBlogs.innerHTML=blogs.slice(0,4).map(blogCard).join('');
