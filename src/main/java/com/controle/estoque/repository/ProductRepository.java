package com.controle.estoque.repository;

import com.controle.estoque.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository  extends JpaRepository<Product, Long> {

    @Query("select e from Product e order by e.id asc")
    List<Product> findAllSortedByIdAsc();
}
