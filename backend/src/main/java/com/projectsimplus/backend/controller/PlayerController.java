package com.projectsimplus.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projectsimplus.backend.model.Player;
import com.projectsimplus.backend.repository.PlayerRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/")
public class PlayerController {
	
	// Atributo Repositório
	
	@Autowired
	private PlayerRepository playerRepository;

	// Método get, especificando a URL e retornando lista, com todos os jogadores (findAll)
	
	@GetMapping("players")
	public List<Player> getPlayers() {
		return this.playerRepository.findAll();
	}
}
