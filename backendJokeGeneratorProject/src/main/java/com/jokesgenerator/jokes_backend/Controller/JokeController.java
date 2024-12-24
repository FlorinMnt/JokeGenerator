package com.jokesgenerator.jokes_backend.Controller;

import com.jokesgenerator.jokes_backend.Entity.Joke;
import com.jokesgenerator.jokes_backend.Service.JokeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true",
        allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST,
        RequestMethod.DELETE, RequestMethod.PUT})
@Controller
@RestController
@RequestMapping("/joke")

public class JokeController {

    @Autowired
    private JokeService jokeService;

    @PostMapping("/create")
    public Joke createJoke(@RequestBody Joke joke){
        return jokeService.saveJoke(joke);
    }

    @GetMapping("/getAllJokes")
    public List<Joke> getAllJokes (){
        return jokeService.getAllJokes();
    }

    @GetMapping("/getJokeById/{id}")
    public Joke getJokeById (@PathVariable Long id){
        return jokeService.getJokeById(id);
    }
    @GetMapping("/getRandomJoke")
    public Joke getRandomJoke(){
        return  jokeService.getRandomJoke();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteJoke(@PathVariable Long id){
        jokeService.deleteJoke(id);
    }

    @DeleteMapping("/deleteAll")
    public void deleteAll(){
        jokeService.deleteAllJokes();
    }
}
