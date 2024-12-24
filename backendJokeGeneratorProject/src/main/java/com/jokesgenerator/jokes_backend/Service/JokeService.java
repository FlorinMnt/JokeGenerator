package com.jokesgenerator.jokes_backend.Service;

import com.jokesgenerator.jokes_backend.Entity.Joke;
import com.jokesgenerator.jokes_backend.Repository.JokeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JokeService {
    @Autowired
    private JokeRepository jokeRepository;

    public Joke saveJoke (Joke joke){
        return jokeRepository.save(joke);
    }


    public List<Joke> getAllJokes (){
        return  jokeRepository.findAll();
    }

    public Joke getJokeById(Long id){
        return jokeRepository.findById(id).orElse(null);
    }

    public Joke getRandomJoke(){

        List<Joke> jokes = jokeRepository.findAll();
        int random = (int) (Math.random() * jokes.size());
        return jokes.get(random);
    }

    public void deleteJoke(Long id){
        jokeRepository.deleteById(id);
    }

    public void deleteAllJokes(){
        jokeRepository.deleteAll();
    }
}
