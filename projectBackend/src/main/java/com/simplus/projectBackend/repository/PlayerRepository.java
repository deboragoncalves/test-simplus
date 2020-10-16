package com.simplus.projectBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplus.projectBackend.model.Player;

// JpaRepository estende CRUD interface com todos os métodos

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

}
