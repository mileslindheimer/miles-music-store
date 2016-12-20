package store.cart.model;

import store.product.entity.Product;

/**
 * @author mileslindheimer
 */
public class CartItem {

    private Product product;
    private int count;

    public CartItem() {
    }

    public CartItem(Product product) {
        this.product = product;
        this.count = 1;
    }

    public CartItem(Product product, int count) {
        this.product = product;
        this.count = count;
    }

    public Product getProduct() {
        return product;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
}
