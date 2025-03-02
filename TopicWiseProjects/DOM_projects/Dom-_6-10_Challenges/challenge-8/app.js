
let products=[
    {
        imageUrl:'https://imgs.search.brave.com/Q8N1hgmCdmKvrapcnNXYFu1xDCgiw1XzYJiQ7ory7VI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzkxLzcxLzg5/LzM2MF9GXzk5MTcx/ODk0M19EVlo5RzJD/SG40NjJlaVVnMmpH/dklCQzNycDNrOElT/WS5qcGc',
        imageCaption:'Product 1',
        title:'T-Shirt',
        price:'$19.99'
    },
    {
        imageUrl:'https://imgs.search.brave.com/icgN7FZcrVNjzmbtHY3-JQYUCgEqOqu6i44LsdXMtNw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2hpdGVob3VzZWJs/YWNrbWFya2V0LmNv/bS9fYXNzZXRzL2Nt/cy92My9hc3NldHMv/Ymx0NmFkMTM5ZjRm/ZTE4YTE1Yi9ibHRh/ZWM5NzhkMzI0NWEx/ODYxLzY3NDVkMTgw/N2RiNGExNDc2YmVj/NWUyOS80XygxNCku/anBnP2ltd2lkdGg9/Mzg0MCZxdWFsaXR5/PTgw',
        imageCaption:'Product 2',
        title:'Jeans',
        price:'$49.99'
    },
    {
        imageUrl:'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/1728c1f21fbc41868170e24edb30777e_9366/samba-og-shoes.jpg',
        imageCaption:'Product 3',
        title:'Sneakers',
        price:'$79.99'
    },
    {
        imageUrl:'https://imgs.search.brave.com/5-_HHr1WiVcP9Gxiikg5Pqomy0orJVtFXTEwiovOfx0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcz/NjI0NDEwL3Bob3Rv/L25ldy15ZWFycy1o/YXQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXdBMTF6N1NT/VlhwSjUwakxaQUNF/UzdoWU44SWY4cW5a/eFRVV3lRM1Q4b0k9',
        imageCaption:'Product 4',
        title:'Hat',
        price:'$24.99'
    }
]

const productsDiv=document.getElementById('products');

products.forEach((ele)=>{

    const productCard=document.createElement('div');
        productCard.className='product';
    const productImage=document.createElement('img');
        productImage.src=ele.imageUrl;
        productImage.alt=ele.imageCaption;
        productCard.appendChild(productImage);
    const productTitle=document.createElement('h3');
        productTitle.innerText=ele.title;
        productCard.appendChild(productTitle);
    const productPrice=document.createElement('h3');
        productPrice.innerText=ele.price;
        productCard.appendChild(productPrice);
    const addProduct=document.createElement('button');
        addProduct.innerText='Add to Cart'
        productCard.appendChild(addProduct);
        addProduct.onclick=()=>{
            console.log(ele);
        }
    productsDiv.appendChild(productCard);
    
})