package com.jokesgenerator.jokes_backend.Repository;


import com.jokesgenerator.jokes_backend.Entity.Joke;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JokeRepository extends JpaRepository <Joke, Long>{
}
