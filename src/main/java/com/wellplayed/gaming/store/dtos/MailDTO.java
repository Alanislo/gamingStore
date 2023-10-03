package com.wellplayed.gaming.store.dtos;

public class MailDTO {
    private String sender; // Dirección de correo del remitente
    private String addressee;
    private String issue;
    private String comment;

    public MailDTO() {
    }

    public String getSender() {
        return sender;
    }

    public String getAddressee() {
        return addressee;
    }

    public String getIssue() {
        return issue;
    }

    public String getComment() {
        return comment;
    }
}