export class ProductsComponent {
  products = [
    {
      name: 'Kids T-Shirt',
      price: 120,
      image: 'assets/images/kids-tshirt.jpg',
      sizes: ['2-3 Yrs', '4-5 Yrs', '6-7 Yrs'],
      selectedSize: ''
    },
    {
      name: 'Kids Jeans',
      price: 180,
      image: 'assets/images/kids-jeans.jpg',
      sizes: ['2-3 Yrs', '4-5 Yrs', '6-7 Yrs'],
      selectedSize: ''
    }
    // Add more products as needed
  ];

  addToCart(product: any) {
    if (!product.selectedSize) {
      alert('Please select a size.');
      return;
    }
    console.log('Added to cart:', product);
    // Implement actual cart logic here
  }
}
