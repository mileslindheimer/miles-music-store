package store.product.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import store.product.entity.Product;

/**
 * @author mileslindheimer
 */
public interface ProductRepo extends JpaRepository<Product, Long> {
}
