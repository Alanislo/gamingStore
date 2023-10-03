package com.wellplayed.gaming.store.dtos;

import com.wellplayed.gaming.store.models.Client;

public class ClientDTO {
    private long id;
    private String email;
    private String phoneNumber;

    public ClientDTO() {
    }
    public ClientDTO(Client client) {
        this.id = client.getId();
        this.email = client.getEmail();
        this.phoneNumber = client.getPhoneNumber();
    }
    public long getId() {
        return id;
    }
    public String getEmail() {
        return email;
    }
    public String getPhoneNumber() {
        return phoneNumber;
    }
}