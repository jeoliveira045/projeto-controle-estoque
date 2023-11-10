package com.controle.estoque.rest;

import com.controle.estoque.entity.Product;
import com.controle.estoque.repository.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/product")
@AllArgsConstructor
public class ProductRest {

    private ProductRepository productRepository;

    @GetMapping
    public ResponseEntity<List<Product>> findAll(){
        return ResponseEntity.ok(productRepository.findAllSortedByIdAsc());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> findById(@PathVariable Long id){
        return ResponseEntity.ok(productRepository.findById(id).orElseThrow(() -> new RuntimeException("id não encotnrado")));
    }

    @PostMapping
    public void insert(@RequestBody Product product){
        productRepository.save(product);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> update(@PathVariable Long id, @RequestBody Product product){
        return ResponseEntity.ok(productRepository.save(product));
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        productRepository.deleteById(id);
    }


}
