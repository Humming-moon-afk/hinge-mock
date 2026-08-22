package hinge.demo.service;

import org.springframework.stereotype.Service;

import hinge.demo.entity.User;
import hinge.demo.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository repository;
    public UserService(UserRepository repository) {
        this.repository = repository;
    }
    public User register(User user) {
        if(user.getAddress() == null || user.getAddress().isBlank()) {
            throw new IllegalArgumentException("Fehler, feld darf nicht leer sein");
        }
        if(user.getName() == null || user.getName().isBlank()) {
            throw new IllegalArgumentException("Fehler, feld darf nicht leer sein");
        }
        if(user.getPhoneNumber() == null || user.getPhoneNumber().isBlank()) {
            throw new IllegalArgumentException("Fehler, feld darf nicht leer sein");
        }
        return repository.save(user);
    }
}
