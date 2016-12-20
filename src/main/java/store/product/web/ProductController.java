package store.product.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import store.product.entity.Product;
import store.product.repo.ProductRepo;

import java.util.List;

/**
 * @author mileslindheimer
 */
@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductRepo productRepo;

    @Autowired
    public ProductController(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }

    @RequestMapping
    public List<Product> findAll() {
        return productRepo.findAll();
    }

    @RequestMapping("/{id}")
    public Product findById(@PathVariable(value="id") long id) {
        return productRepo.findOne(id);
    }
}
