package store.cart.model;

import org.junit.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

/**
 * @author mileslindheimer
 */
public class CartTest {

    @Test
    public void getItemsReturnsCopy() throws Exception {
        Cart cart = new Cart();
        cart.addCartItem(new CartItem(null));
        List<CartItem> cartItems = cart.getCartItems();

        assertThat(cartItems.size(), is(1));
        cartItems.remove(0);

        assertThat(cartItems.size(), is(0));
        assertThat(cart.getCartItems().size(), is(1));
    }

    @Test
    public void constructorCopiesItems() throws Exception {
        List<CartItem> cartItems = new ArrayList<>(Arrays.asList(new CartItem(null)));
        Cart cart = new Cart(cartItems);

        assertThat(cartItems.size(), is(1));
        cartItems.remove(0);

        assertThat(cartItems.size(), is(0));
        assertThat(cart.getCartItems().size(), is(1));
    }
}