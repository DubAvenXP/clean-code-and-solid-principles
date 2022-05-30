type Size = "" | "S" | "M" | "L" | "XL";

class Product {
    constructor(
        public name: string = "",
        public price: number = 0,
        public size: Size = ""
    ) {}

    // No Dry
    // toString() {
    //     if (this.name.length <= 0) throw new Error('Product name is empty');
    //     if (this.price <= 0) throw new Error('Product price is not valid');
    //     if (this.size.length <= 0) throw new Error('Product size is not valid');
    //     return `${this.name} (${this.price}) ${this.size}`;
    // }

    isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case "string":
                    if ((<string>(<unknown>this[key])).length <= 0)
                        throw new Error(`${key} is empty`);
                    break;
                case "number":
                    if (<number>(<unknown>this[key]) <= 0)
                        throw new Error(`${key} is zero`);
                    break;
                default:
                    throw new Error(`${typeof this[key]} is not supported`);
            }
        }

        return true;
    }

    toString() {
        if (!this.isProductReady()) throw new Error("Product is not ready");
        return `${this.name} (${this.price}) ${this.size}`;
    }
}

(() => {
    const bluePants = new Product("blue large pants", 10, "L");
    console.log(bluePants.toString());
})();
