package com.controle.estoque.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Table(name="MOVIMENT")
@Data
public class Moviment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="MOV_TYPE")
    private String movType;

    @Column(name="MOV_DATA")
    private LocalDateTime movData = LocalDateTime.now();

    @ManyToMany
    @JoinTable(name = "MOV_PROD", joinColumns = @JoinColumn(name="mov_id"), inverseJoinColumns = @JoinColumn(name = "product_id"))
    private Set<Product> products;


}
