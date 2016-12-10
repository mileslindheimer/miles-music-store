package store.product.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import store.product.entity.Product;
import store.product.repo.ProductRepo;

import java.util.List;

/**
 * @author mileslindheimer
 */
@RestController
public class ProductController {

    private final ProductRepo productRepo;

    @Autowired
    public ProductController(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }

    @RequestMapping("/api/products")
    public List<Product> findAll() {
        return productRepo.findAll();
    }
}
