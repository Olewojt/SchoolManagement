package com.school.management.schoolmanagment.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.*;

import java.time.LocalDate;

import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class PersonalInfo {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String pesel;
    private String phoneNumber;
    private LocalDate dateOfBirth;
    private String country;
    private String city;
    private String street;
    private String homeNumber;
    private String flatNumber;

    @OneToOne(optional = false, mappedBy = "personalInfo")
    private User user;

    public PersonalInfo(String firstName, String lastName, String pesel,
                        String phoneNumber, LocalDate dateOfBirth, String country, String city,
                        String street, String homeNumber, String flatNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.pesel = pesel;
        this.phoneNumber = phoneNumber;
        this.dateOfBirth = dateOfBirth;
        this.country = country;
        this.city = city;
        this.street = street;
        this.homeNumber = homeNumber;
        this.flatNumber = flatNumber;
    }
}
