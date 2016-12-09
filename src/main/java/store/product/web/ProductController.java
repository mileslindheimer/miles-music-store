package store.product.web;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author mileslindheimer
 */
@RestController
public class ProductController {

    @RequestMapping("/helloworld")
    public String helloworld() {
        return "Hello World";
    }
}
