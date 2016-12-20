package store.cart.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import store.product.entity.Product;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * @author mileslindheimer
 */
@Entity
@Table(name = "ORDER_ITEM")
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "ORDER_INFO_ID")
    private OrderInfo orderInfo;
    @OneToOne
    @JoinColumn(name = "PRODUCT_ID")
    private Product product;

    protected OrderItem() {
    }

    protected OrderItem(Product product) {
        this.product = product;
    }

    protected void setOrderInfo(OrderInfo orderInfo) {
        this.orderInfo = orderInfo;
        if (!orderInfo.getOrderItems().contains(this)) {
            orderInfo.getOrderItems().add(this);
        }
    }

    public Long getId() {
        return id;
    }

    public OrderInfo getOrderInfo() {
        return orderInfo;
    }

    public Product getProduct() {
        return product;
    }
}
