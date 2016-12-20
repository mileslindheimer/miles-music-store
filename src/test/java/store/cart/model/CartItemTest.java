package store.cart.model;

import org.junit.Test;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

/**
 * @author mileslindheimer
 */
public class CartItemTest {

    @Test
    public void defaultCountIsOne() throws Exception {
        CartItem cartItem = new CartItem(null);
        assertThat(cartItem.getCount(), is(1));
    }
}