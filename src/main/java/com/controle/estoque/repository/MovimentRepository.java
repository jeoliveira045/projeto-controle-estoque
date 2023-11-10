package com.controle.estoque.repository;

import com.controle.estoque.entity.Moviment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovimentRepository extends JpaRepository<Moviment, Long> {

    @Query("select e from Moviment e order by e.movData desc")
    List<Moviment> findAllSortedByMovData();
}
