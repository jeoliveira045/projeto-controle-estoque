package com.controle.estoque.rest;


import com.controle.estoque.entity.Moviment;
import com.controle.estoque.entity.Product;
import com.controle.estoque.repository.MovimentRepository;
import com.controle.estoque.repository.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/moviment")
@AllArgsConstructor
public class MovimentRest {

    private MovimentRepository movimentRepository;

    private ProductRepository  productRepository;

    @GetMapping
    public ResponseEntity<List<Moviment>> findAll(){
        return ResponseEntity.ok(movimentRepository.findAllSortedByMovData());
    }

    @PostMapping
    public void insert(@RequestBody Moviment moviment){
        for(Product i: moviment.getProducts()){
            Product product = productRepository.findById(i.getId()).orElseThrow(() -> new RuntimeException("Produto não encontrado: " + i.getName()));
            if(productRepository.findById(i.getId()).isPresent() && moviment.getMovType().equals("ENTRADA")){
                product.setQuantity(product.getQuantity() + i.getQuantity());
                productRepository.save(product);
            }else if(productRepository.findById(i.getId()).isPresent() && moviment.getMovType().equals("SAIDA") && product.getQuantity() > 0){
                product.setQuantity(product.getQuantity() - i.getQuantity());
                productRepository.save(product);
            }
        }
        movimentRepository.save(moviment);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable Long id ,@RequestBody Moviment moviment){
        movimentRepository.save(moviment);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        movimentRepository.deleteById(id);
    }
}
