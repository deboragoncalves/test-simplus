package com.projectsimplus.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projectsimplus.backend.model.Player;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

}
