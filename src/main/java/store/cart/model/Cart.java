package store.cart.model;

import java.util.ArrayList;
import java.util.List;

/**
 * @author mileslindheimer
 */
public class Cart {

    private List<CartItem> cartItems = new ArrayList<>();

    public Cart() {

    }

    public Cart(List<CartItem> cartItems) {
        this.cartItems = new ArrayList<>(cartItems);
    }

    public List<CartItem> getCartItems() {
        return new ArrayList<>(cartItems);
    }

    public void addCartItem(CartItem cartItem) {
        cartItems.add(cartItem);
    }

    @Override
    public String toString() {
        return "Cart{" +
                "cartItems=" + cartItems +
                '}';
    }
}
