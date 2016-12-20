package store.cart.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import store.cart.entity.OrderInfo;
import store.cart.model.Cart;
import store.cart.service.CartService;

/**
 * @author mileslindheimer
 */
@RestController
@RequestMapping("/api/cart")
public class CartController {

    private final CartService cartService;

    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public OrderInfo checkout(@RequestBody Cart cart) {
        return cartService.checkout(cart);
    }
}
