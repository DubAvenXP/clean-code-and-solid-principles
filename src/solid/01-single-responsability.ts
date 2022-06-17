(() => {
    interface Product {
        id: number;
        name: string;
    }

    class ProductService {
        private httpAdapter: any;

        getProduct(id: number): Product {
            console.log(`Retrieved product ${id}`);
            return { id, name: "Product" };
        }
        createProduct(product: Product): Product {
            console.log(`Created product ${product.name}`);
            return product;
        }
    }

    class Mailer {
        private masterEmail: string = "master@example.com";

        sendEmail(emailList: string[], template: "to-clients" | "to-admins") {
            console.log(`Sending email to ${emailList}`);
        }
    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }

        loadProduct(id: number) {
            this.productService.getProduct(id);
        }

        saveProduct(product: Product) {
            this.productService.createProduct(product);
        }

        notifyClients() {
            this.mailer.sendEmail(
                ["example1@email.com", "example1@email.com"],
                "to-clients"
            );
        }
    }

    class CartBloc {
        addProduct(productId: number) {
            // Agregar al carrito de compras
            console.log("Agregando al carrito ", productId);
        }
    }

    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: "OLED TV" });
    productBloc.notifyClients();

    cartBloc.addProduct(10);
})();
