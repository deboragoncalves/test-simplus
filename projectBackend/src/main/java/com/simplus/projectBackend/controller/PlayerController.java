package com.simplus.projectBackend.controller;

import java.util.List;
import java.util.Optional;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplus.projectBackend.model.Player;
import com.simplus.projectBackend.repository.PlayerRepository;

@RestController

// URL padrão para requisição

@RequestMapping("/api/v1/")

// Url frontend

@CrossOrigin(origins = "http://localhost:4200")
public class PlayerController {
	
	// Atributo repositório para criar os métodos
	
	@Autowired
	private PlayerRepository playerRepository;
	
	// Método get retorna ao cliente uma lista quando a url /api/v1/players for acessada
	
	@GetMapping("/players")
	public List<Player> getPlayers() {
		return this.playerRepository.findAll();
	}
	
	// Post: salva o objeto no banco de dados e retorna esse objeto
	
	@PostMapping("/players")
	public Player createPlayer(@RequestBody Player player) {
		return this.playerRepository.save(player);
	}
	
	// Delete: deletar aquele com o id e retornar lista de jogadores 
	
	@DeleteMapping("/players/{id}")
	public List<Player> deletePlayer(@PathVariable Long id) {
		this.playerRepository.deleteById(id);
		return this.playerRepository.findAll();
	}

}
