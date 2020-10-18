package com.simplus.projectBackend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
	
	// Get by id
	
	@GetMapping("/players/{id}")
	public Player getPlayerById(@PathVariable Long id) {
		Optional<Player> playerData = this.playerRepository.findById(id);
		
		// Se exibir o objeto, retornar esse objeto
		
		if (playerData.isPresent()) {
			Player _player = playerData.get();
			return _player;
		} else {
			return new Player();
		}
	}
	
	// Post: salva o objeto no banco de dados e retorna esse objeto
	
	@PostMapping("/register")
	public Player createPlayer(@RequestBody Player player) {
		return this.playerRepository.save(player);
	}
	
	// Update
	
	@PutMapping("/update/{id}")
	public Player updatePlayer(@PathVariable Long id, @RequestBody Player player) {
		
		// Encontrar objeto pelo id

		Optional<Player> playerData = this.playerRepository.findById(id);
		
		// Se existir o objeto, setar os dados e salvar no db
		
		if (playerData.isPresent()) {
			Player _player = playerData.get();
			_player.setName(player.getName());
			_player.setPosition(player.getPosition());
			_player.setHeight(player.getHeight());
			this.playerRepository.save(_player);
			
			return _player;
			
		} else {
			return new Player();
		}
		
	}
	
	// Delete: deletar aquele com o id e retornar lista de jogadores 
	
	@DeleteMapping("/delete/{id}")
	public List<Player> deletePlayer(@PathVariable Long id) {
		this.playerRepository.deleteById(id);
		return this.playerRepository.findAll();
	}

}
