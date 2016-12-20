package store.cart.entity;

import store.cart.model.CartItem;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

/**
 * @author mileslindheimer
 */
@Entity
@Table(name = "ORDER_INFO")
public class OrderInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToMany(mappedBy = "orderInfo", cascade = CascadeType.ALL)
    private List<OrderItem> orderItems = new ArrayList<>();

    public OrderInfo() {
    }

    protected void addOrderItem(OrderItem orderItem) {
        orderItems.add(orderItem);
        if (orderItem.getOrderInfo() != this) {
            orderItem.setOrderInfo(this);
        }
    }

    public void addCartItem(CartItem cartItem) {
        for (int i = 0; i < cartItem.getCount(); i++) {
            addOrderItem(new OrderItem(cartItem.getProduct()));
        }
    }

    public Long getId() {
        return id;
    }

    public List<OrderItem> getOrderItems() {
        return orderItems;
    }
}
