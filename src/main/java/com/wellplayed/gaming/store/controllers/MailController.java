package com.wellplayed.gaming.store.controllers;

import com.wellplayed.gaming.store.dtos.MailDTO;
import com.wellplayed.gaming.store.models.Mail;
import com.wellplayed.gaming.store.repositories.ClientRepository;
import com.wellplayed.gaming.store.services.ServiceBilling;
import com.wellplayed.gaming.store.services.ServiceEmailSend;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api")
public class MailController {
    @Autowired
    private ServiceEmailSend serviceEmailSend;
    @Autowired
    private ClientRepository clientRepository;
    @Autowired
    private ServiceBilling serviceBilling;

    @PostMapping("/send-email")
    public ResponseEntity<String> sendEmail(@RequestBody MailDTO mailDTO) {
        // Verificar que se hayan proporcionado los datos necesarios
        if (mailDTO.getSender() == null || mailDTO.getSender().isBlank()) {
            return new ResponseEntity<>("The sender is missing from the form", HttpStatus.BAD_REQUEST);
        }
        if ( mailDTO.getComment() == null || mailDTO.getComment().isBlank()) {
            return new ResponseEntity<>("The comment is missing from the form", HttpStatus.BAD_REQUEST);
        }
        if (mailDTO.getIssue().isBlank() || mailDTO.getIssue() == null){
            return new ResponseEntity<>("Enter the subject", HttpStatus.BAD_REQUEST);
        }

        // Crear un mensaje de correo electrónico
        Mail mail = new Mail();
        mail.setSender(mailDTO.getSender());
        mail.setAddressee("wellplayedsrl@gmail.com"); // Reemplaza con la dirección de correo destino
        mail.setIssue(mailDTO.getIssue());
        mail.setComment(mailDTO.getComment());

        // Enviar el correo electrónico utilizando el EmailSender
        serviceEmailSend.sendEmail(mail);

        return new ResponseEntity<>("Email sent successfully", HttpStatus.OK);

    }
}