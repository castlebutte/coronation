## Inspiration

Once upon a time during COVID-19, there was a princess trapped in Castle Butte, with nothing but a laptop, high speed internet, and a degree in Mechanical Engineering from the University of Butte. While waiting for her coronation and her only sister attending University of Fronte, she finds a way to make a modified online chess game as her only source of entertainment.

## What it does

This web application engages two players in a modified game of chess. The features include:

- Two way turn based game style
- Easy to use GUI
- Corgi theme fit for royalty

## How to play

1. A player must host a game, generating a room code in which the second player can input into the “Join Game” feature to do just that.
2. The player can choose how large their board is, ranging from 8x8 to 16x16. For every increase in width, additional pieces are added. Play to try out different board sizes!
3. Once the game starts, each player is assumed to know the basic rules and pieces of chess. There is only one new character, the Vanguard, which is the tower with a star at the top.
4. Pawns start by filling the front row of the player’s side of the board. They may move one to three spaces forward but when it is obstructed by opponent it may jump to the left or right of the piece that is obstructing so the attack may occur only when there are two enemy pieces right beside each other **and** ahead of them.
5. Bishops move and start as normal.
6. Rooks move and start as normal.
7. Knights move like a normal game’s queen however, they can only reach between 2-4 squares away.
8. Queens must wait 5 turns between movies. In situations where there are more than 1 queen, the counter resets after the last friendly queen moves. They can move to and attack any square on their side of the board in which a series of straight lines can bring them to.
9. The king moves and starts as normal. Protect the king at all costs.
10. Vanguards move in an L of **any** size which is fully clear except the final square. At the beginning of the game, the player is given two vanguards which can replace any of their pawns in the front row. To promote fairness, the vanguards are placed in default positions at the outermost square.

## How we built it

We chose to develop our game using React, Express, and NodeJS with Socket.IO. We used TypeScript instead of JavaScript to remove runtime errors, especially important when working as a group. The React framework is easy to use and always results in a good UI. A NodeJS server using the Express framework was needed for the multiplayer game. Socket.IO was necessary for the multiplayer chess game to prevent us from having to make a new HTTP request for every turn.
We divided the tasks as follows:

### Annette Lau:

- Front end
- GUI design/prototyping

### Charles Ancheta:

- Back end
- Real time turn communication via Socket.io

### Juyoung Kim:

- Storyline development
- Front end
- Art

### William Chorkawy:

- Front end
- Back end
- Real time turn communication via Socket.io

## Challenges we ran into

One of our largest hurdles while creating this application was implementing the correct algorithms for each of the pieces' moves. Given the time constraint of the competition and the relative computational simplicity of the program, we opted for easier to write algorithms rather than spending more time optimizing efficiency. Determining the legal moves for the vanguard and the queen were especially among our most difficult tasks. The choice of using React was also difficult because ¾ of the team have never used it before. However, we agreed that a chess game would be better implemented on a web browser.

## Accomplishments that we're proud of

We were able to actually make an application considering how little knowledge the team had of React and game development (none). Half the team does not come from a software development background so being able to develop a presentable product in time was a major feat. We were able to develop a creative story line and game structure as well which made the entire process a lot of fun.

## What we learned

This was the first time most of us have made a game. We learned a lot about turn based game design as well as React.js in general. “It was a challenge getting used to HTML and CSS files having no knowledge of either but I learned a lot.” - Annette.

## What's next for Coronation

- Part of the team designed all the features and prototypes of the game screens before actually coding it so there’s a lot we plan to implement. Juyoung completed the loading screens to play the background story before the game starts after pressing start on the home screen. It was a really cute feature but due to time constraints, we had to leave it to last. This would be done using more page components and connected in using react-router-dom and adding a timed transition or a “touch to continue” function.
- Another feature would be the customizable board options.

## - Castle Butte
