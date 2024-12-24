package com.jokesgenerator.jokes_backend.Model;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Service
@AllArgsConstructor
public class MyAppUserService implements UserDetailsService{

    @Autowired
    private MyAppUserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("Caut utilizator cu username: " + username);

        Optional<MyAppUser> user = repository.findByUsername(username);

        if (user.isPresent()) {
            MyAppUser userObj = user.get();
            System.out.println("Utilizator găsit: " + userObj.getUsername());
            System.out.println("Parola din baza de date: " + userObj.getPassword());

            return User.builder()
                    .username(userObj.getUsername())
                    .password(userObj.getPassword())
                    .build();
        } else {
            System.out.println("Utilizator inexistent: " + username);
            throw new UsernameNotFoundException(username);
        }
    }

    //    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//
//        Optional<MyAppUser> user = repository.findByUsername(username);
//        if (user.isPresent()) {
//            var userObj = user.get();
//            return User.builder()
//                    .username(userObj.getUsername())
//                    .password(userObj.getPassword())
//                    .build();
//        }else{
//            System.out.println("User not found for username: " + username);
//            throw new UsernameNotFoundException(username);
//        }
//    }
    @GetMapping("/users/{id}")
    public MyAppUser getUserById (@PathVariable Long id){
        return repository.findById(id).orElse(null);
    }


}