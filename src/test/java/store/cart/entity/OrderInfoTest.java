package store.cart.entity;

import org.junit.Test;
import store.cart.model.CartItem;
import store.product.entity.Product;

import java.math.BigDecimal;

import static org.hamcrest.Matchers.contains;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

/**
 * @author mileslindheimer
 */
public class OrderInfoTest {

    @Test
    public void addingOrderItemSetsOrderItemsOrderInfo() throws Exception {
        OrderItem orderItem = new OrderItem();
        OrderInfo orderInfo = new OrderInfo();

        orderInfo.addOrderItem(orderItem);

        assertThat(orderInfo.getOrderItems(), contains(orderItem));
        assertThat(orderItem.getOrderInfo(), is(orderInfo));
    }

    @Test
    public void addingSingleCartItemAddsSingleOrderItem() throws Exception {
        OrderInfo orderInfo = new OrderInfo();
        Product product = new Product("", "", "", BigDecimal.ONE);
        CartItem cartItem = new CartItem(product);

        orderInfo.addCartItem(cartItem);
        assertThat(orderInfo.getOrderItems().size(), is(1));
        assertThat(orderInfo.getTotal(), is(BigDecimal.ONE));
    }

    @Test
    public void addingCartItemWithCountNAddsNOrderItems() throws Exception {
        OrderInfo orderInfo = new OrderInfo();
        Product product = new Product("", "", "", BigDecimal.ONE);
        final int count = 3;
        CartItem cartItem = new CartItem(product, count);

        orderInfo.addCartItem(cartItem);
        assertThat(orderInfo.getOrderItems().size(), is(count));
        assertThat(orderInfo.getTotal(), is(BigDecimal.valueOf(3)));
    }
}