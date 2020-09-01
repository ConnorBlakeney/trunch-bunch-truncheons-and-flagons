### _Trunch Bunch presents..._
# Truncheons & Flagons

------------------------
Truncheons and Flagons is a companion app for a medieval drinking game, styled in the finest retro 80’s pink and teal! 

Why would we make something like this? Well, It was fun, and it was a great chance to learn! 

The Team: Connor, Monica, Mikayla, Red and Gib were all students at NSS together, but this project was totally extra credit! We think we all deserve a pat on the back for going beyond what was required of us to learn something new.

The project requirements: We were given a set of instructions from the NSS github Repo. Those are linked below. The only example code we used was from those instructions. 
… and one more thing about those instructions. They are intentionally written to lead the team to create the Leaderboard, the component with the most dependencies, early on in the project. This is an intentional challenge, to teach the team the importance of drawing out your ERD, and starting with components that don’t have dependencies. Our team, The Trunch Bunch, claims the title of being the FIRST TEAM TO EVER COMPLETE THIS PROJECT!

------------------------

Setup:

1. Keep in mind that this is a learning project, not a commercial product
1. Clone the repo to your local machine
1. Use npm to serve the page locally
1. Open a new terminal and navigate to the api folder
1. Use json server to serve the database on port 8088. An example command is `json-server -p 8088 -w database.json`
1. Open your browser, and navigate to page.

Game Play:

1. To get into the spirit of the game, read the wonderful description of the game here: [Ch.1 - Application Requirements and Layout](https://github.com/nashville-software-school/client-side-mastery/blob/cohort-42/book-2-glassdale-pd/chapters/TF_STRUCTURE_LAYOUT.md " Ch. 1 - Application Requirements & Layout")
1. Test out adding a new team, assigning players to the team, starting the game, entering scores ect. We are especially proud of the custom event flow, and the form validation features of the game.

------------------------
Here is our wireframe. We created it in sketchboard.me which has intentionally rough lines to encourage focusing on the big picture.

![Wireframe Version 2](/images/sketchboard/wireframe-v2.png "Wireframe Version 2")

Our event flow diagram turned out to be critical in this project. 

![Event-Flow Diagram](/images/sketchboard/event-flow.png "Event-Flow Diagram")

We learned about ERD's half way through the course of this project, and immediately realized that our sneaky instructors had played a trick on us by having us create the leaderboard mid-way through the project. Now that we know how to create and read ERDs, its clear that this component has the most dependencies, and should have been built LAST.

![Entity Relationship Diagram](/images/sketchboard/erd.png "Entity Relationship Diagram")


------------------------

- [x] [Ch.1 - Application Requirements and Layout](https://github.com/nashville-software-school/client-side-mastery/blob/cohort-42/book-2-glassdale-pd/chapters/TF_STRUCTURE_LAYOUT.md " Ch. 1 - Application Requirements & Layout")

- [x] [Ch. 2 - Game Data](https://github.com/nashville-software-school/client-side-mastery/blob/cohort-42/book-2-glassdale-pd/chapters/TF_GAME_DATA.md "Ch. 2 - Game Data")

- [x] [Ch. 3 - Rendering Game Data"](https://github.com/nashville-software-school/client-side-mastery/blob/cohort-42/book-2-glassdale-pd/chapters/TF_GAME_RENDER.md "Ch. 3 - Rendering Game Data")

- [x] [Ch. 4 - Truncheons & Flagons API](https://github.com/nashville-software-school/client-side-mastery/blob/cohort-42/book-2-glassdale-pd/chapters/TF_API.md "Ch. 4 - Truncheons & Flagons API")

- [x] [Ch. 5 - Adding Teams](https://github.com/nashville-software-school/client-side-mastery/blob/cohort-42/book-2-glassdale-pd/chapters/TF_FORMS.md "Ch. 5 - Adding Teams")

- [x] [Ch. 6 - Leaderboard & Team List](https://github.com/nashville-software-school/client-side-mastery/blob/cohort-42/book-2-glassdale-pd/chapters/TF_LEADERBOARD_TEAMS.md "Ch. 6 - Leaderboard & Team List")

- [x] [Ch. 7 - Adding Players](https://github.com/nashville-software-school/client-side-mastery/blob/cohort-42/book-2-glassdale-pd/chapters/TF_PLAYER_FORM.md "Ch. 7 - Adding Players")

- [x] [Ch. 8 - Selecting Teams For Game](https://github.com/nashville-software-school/client-side-mastery/blob/cohort-42/book-2-glassdale-pd/chapters/TF_CHOOSE_TEAMS.md "Ch. 8 - Selecting Teams For Game")

- [ ] [Ch. 9 - Recording Scores](https://github.com/nashville-software-school/client-side-mastery/blob/cohort-42/book-2-glassdale-pd/chapters/TF_ROUND_SCORES.md "Ch. 9 - Recording Scores")
