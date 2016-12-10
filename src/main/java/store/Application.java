package store;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import store.product.entity.ProductEntityBaseClass;
import store.product.repo.ProductRepoBaseClass;

/**
 * @author mileslindheimer
 */
@SpringBootApplication
@EntityScan(basePackageClasses = {ProductEntityBaseClass.class})
@EnableJpaRepositories(basePackageClasses = {ProductRepoBaseClass.class})
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
