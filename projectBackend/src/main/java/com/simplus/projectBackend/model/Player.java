package com.simplus.projectBackend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

// Mapear para DB e criar table

@Entity
@Table(name = "players")

public class Player {
	
	// Atributos (data)
	
	// Gerar id
		
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String name;
	private String position;
	private Double height;
		
	public Player() {
			
	}
		
	public Player(String name, String position, Double height) {
		this.name = name;
		this.position = position;
		this.height = height;
	}
		
	// Getters e setters
		
	public long getId() {
		return this.id;
	}
		
	public void setId(long id) {
		this.id = id;
	}
		
	public String getName() {
		return this.name;
	}
		
	public void setName(String name) {
		this.name = name;
	}
		
	public String getPosition() {
		return this.position;
	}
		
	public void setPosition(String position) {
		this.position = position;
	}
		
	public Double getHeight() {
		return this.height;
	}
		
	public void setHeight(Double height) {
		this.height = height;
	}
}
