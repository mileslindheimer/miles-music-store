package store.cart.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import store.cart.entity.OrderInfo;

/**
 * @author mileslindheimer
 */
public interface OrderInfoRepo extends JpaRepository<OrderInfo, Long> {
}
