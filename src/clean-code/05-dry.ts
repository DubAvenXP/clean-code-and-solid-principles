type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
        ) {}

    toString() {
        // No Dry
        if (this.name.length <= 0) throw new Error('Product name is empty');
        if (this.price <= 0) throw new Error('Product price is not valid');
        if (this.size.length <= 0) throw new Error('Product size is not valid');

        return `${this.name} (${this.price}) ${this.size}`;
    }
}

(() => {
    const bluePants = new Product("blue large pants", 10, 'L');
    console.log(bluePants.toString());
})()
