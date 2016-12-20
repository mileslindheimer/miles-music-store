package store.cart.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import store.cart.entity.OrderInfo;
import store.cart.model.Cart;
import store.cart.model.CartItem;
import store.cart.repo.OrderInfoRepo;

/**
 * @author mileslindheimer
 */
@Component
public class CartService {

    private final OrderInfoRepo orderInfoRepo;

    @Autowired
    public CartService(OrderInfoRepo orderInfoRepo) {
        this.orderInfoRepo = orderInfoRepo;
    }

    public OrderInfo checkout(Cart cart) {
        OrderInfo orderInfo = new OrderInfo();
        for (CartItem cartItem : cart.getCartItems()) {
            orderInfo.addCartItem(cartItem);
        }
        return orderInfoRepo.save(orderInfo);
    }
}
