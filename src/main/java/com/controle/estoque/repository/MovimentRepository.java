package com.controle.estoque.repository;

import com.controle.estoque.entity.Moviment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovimentRepository extends JpaRepository<Moviment, Long> {
}
