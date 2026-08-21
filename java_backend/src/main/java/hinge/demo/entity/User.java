package hinge.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String userId;
    private String userName;
    private String userPhoneNumber;
    private String userAdress;
    public User(String userName, String userPhoneNumber, String userAdress) {
        this.userName = userName;
        this.userPhoneNumber = userPhoneNumber;
        this.userAdress = userAdress;
    }
    public User() {}
    public String getId() {
        return userId;
    }
    public String getName() {
        return userName;
    }
    public void setName(String userName) {
        this.userName = userName;
    }
    public String getPhoneNumber() {
        return userPhoneNumber;
    }
    public void setPhoneNumber(String userPhoneNumber) {
        this.userPhoneNumber = userPhoneNumber;
    }
    public String getAdress() {
        return userAdress;
    }
    public void setAdress(String userAdress) {
        this.userAdress = userAdress;
    }
    
}