package cn.ts987.oa.domain;

import java.util.List;
import java.util.Set;

public class Role {
	private long id;
	
	private String name;
	
	private String description;
	
	private Set<User> users;
	
	
	@Override
	public String toString() {
		
		return this.name;
	}
	

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setUsers(Set<User> users) {
		this.users = users;
	}

	public Set<User> getUsers() {
		return users;
	}

	
	
}
