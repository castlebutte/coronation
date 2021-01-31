## Inspiration
Once upon a time, there was a princess trapped in Castle Butte, with nothing but a laptop, high speed internet, and a degree in Mechanical Engineering from the University of Butte. While waiting for her coronation and her only sister attending University of Fronte, she finds a way to make a modified online chess game as her only source of entertainment.

## What it does
This web application engages two players in a modified game of chess. The features include:
- Two way turn based game style
- Easy to use GUI
- Corgi theme fit for royalty

## How we built it
We chose to develop our game using React, Express, and NodeJS with Socket.IO. We used TypeScript instead of JavaScript to remove runtime errors, especially important when working as a group. The React framework is easy to use and always results in a good UI.  A NodeJS server using the Express framework was needed for the multiplayer game. Socket.IO was necessary for the multiplayer chess game to prevent us from having to make a new HTTP request for every turn.
We divided the tasks as follows:

# Annette Lau:
- Front end
- GUI design/prototyping

# Charles Ancheta:
- Back end
- Real time turn communication via Socket.io

# Juyoung Kim:
- Storyline development
- Front end
- Art

# William Chorkawy:
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
Part of the team designed all the features and prototypes of the game screens before actually coding it so there’s a lot we plan to implement. Juyoung completed the loading screens to play the background story before the game starts after pressing start on the home screen. It was a really cute feature but due to time constraints, we had to leave it to last. This would be done using more page components and connected in using react-router-dom and adding a timed transition or a “touch to continue” function.
Another feature would be the customizable board options. 

## - Castle Butte
