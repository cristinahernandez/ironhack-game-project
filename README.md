# Ironhack's Game Project

## Description

Too many poo's left on the streets and civic people complain about this. Usually these dogs are walked without a dog's leash and this game is created to encourage uncivic pawrents to pick the shit of theis dogs, because obviously, they can't do on their own. So pick your shit dude! In this game, you'll have to pick the poos your dog generate in your neighborhood. Your dog has eaten a lot so be prepared to pick a lot of poos.

You earn points:
If you pick poos

You loose points:
If your neighbor slides off with your dog's poo

## MVP (DOM - CANVAS)

- Intro screen
- A map of the neighborhood with score
- A dog that moves randomly around the map
- Poos elements generated with a temps interval
- Hand or sack to pick up poos

## Backlog

- Flies appear when poo is not picked in "x" time
- Pink poos give more points and are generated if your dog eat a pink award
- A car that crush your dog, game is over immediately.
- Sound effects
- A third character that removes points if he/she goes throught the poos

## Data structure

Classes:

- Game
- Dog extends Character
- Neighbor extends Character
- Hand
- Poo

Methods:

- Game.checkCollision
- Character.moveUp
- Character.moveDown
- Character.moveRight
- Character.moveLeft
- Dog.generatePoo
- Dog.die
- Character.disappear
- Dog.GeneratePoos
- Neighbor.SlideOff
- Game.score
- Game.start
- Game.gameover

## States y States Transitions

Definition of the different states and their transition (transition functions)

- splashScreen
  An start screen with instructions and a button of START
- gameScreen
  A neighborhood map with all the elements
- gameoverScreen
  A screen with a message "You're such a uncivid pawrent!"
- winScreen
  A screen with a happy dog "Youd did it great!"

## Task

Task definition in order of priority
Canvas

## Links

### Trello

[Link url](https://trello.com/b/fdG3QgjF/pick-your-s)

### Git

URls for the project repo and deploy
[Link Repo](https://github.com/cristinahernandez/ironhack-game-project)
[Link Deploy](https://cristinahernandez.github.io/ironhack-game-project/)

### Slides

URls for the project presentation (slides)
[Link Slides.com](https://slides.com/crishernandez/deck/live?context=editing#/pick-your-sh)
