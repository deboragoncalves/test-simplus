package com.projectsimplus.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.projectsimplus.backend.model.Player;
import com.projectsimplus.backend.repository.PlayerRepository;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
	
	// Repositório (adicionar novos dados)
	
	@Autowired
	private PlayerRepository playerRepository;
	
	// Método run: executaodo ao iniciar app.

	public void run(String... args) throws Exception {
		
		// Inserir e salvar dados
		
		this.playerRepository.save(new Player("Jaqueline", "Ponta", 1.85));
		this.playerRepository.save(new Player("Paula Pequeno", "Ponta", 1.80));
		this.playerRepository.save(new Player("Camila Brait", "Líbero", 1.75));
		
	}
	
	

	
	

}
