# Project description
The Project Ascent (PA) App is a digital tool for climbing training. It allows you to search an evergrowing database of climbing exercises and create a training plan. The inbuild timer enables users to perform climbing specific routines such as multiple repetitions and sets, each with the individual rest times.

(More info comging soon...)

## Curent Version
0.7.2

X.Y.Z
x > Major update
y > Minor update
z > Patches for bug fixes

# Roadmap
## MVP 1
For MVP 1 the following functionality should be available. Estimated timeframe is end of October 2024.
- List of exercises
    - List of exercises can be searched
- Every exercise has the following information
    - Main image
    - How to perform the exercise
    - Tags
- Timer
    - Timer can only Start, Stop and Reset for now
- Profile page
    - Profile image
    - Basic profile information

### To-Do for current MVP
- [ ] Bugs
    - [X] Timer controls don't seem to be centered
    - [X] Timer toggle needs to be styled
    - [X] Timer should pause countdown when reaching 0
    - [ ] The countdown is not done when reaching 0. This is evident by the controls not changing for another second. The milliseconds also need to count down to 0 first for the controls to change. When using the countdown, rounding the seconds should work differently.
- [X] Accordion component
    - [X] Description accordion should be open by default
    - [X] Add state to accordion component to control open/closed state
- [X] How to accordion should have description in steps
- [ ] Home page
    - [x] Image to stretch over the available space
    - [ ] Image to change (random or after a certain time)
- [X] Clip image component
    - [X] Pre-define certain looks (parallelogram, diamond, full, random, etc.)
- [x] CSS for general app structure
    - [x] Fix bugs with general layout
    - [x] Use of grid instead of flexbox for future scaleability
- [X] Bottom navigation
    - [x] Add logic to highlight active page
    - [x] Add icon placeholder
    - [x] Add icon from Google Fonts
    - [X] Finish styling of bottom nav
- [X] CSS for search component
- [ ] Import correct font
    - [ ] Add font to gitignore
    - [ ] Make sure there is a default font
- [ ] Add comments to all files
- [x] Install SASS for easier CSS management
- [ ] Timer component
    - [ ] Finish styling of the component
- [x] Bottom navigation should change when on Single Exercise page
- [ ] Layout component can be improved
    - [ ] Clean up functions inside the component
    - [ ] Comment component

## MVP 2
For the next MVP I'd like to improve on the timer. It should be able to handle sets, set rests, repetitions, and repetition rests. Furthermore I'd like to provide default timer information for each exercise. The timer itself can be started from the exercise page and and the timer will then be set to the default exercise timer information (i.e. how many sets, set rest lenght, how many repetitions, repetition rest lenght). Additionally, I'd like to make some visual improvements.

## MVP 3
Main task will be the deployment on a server and establish a back end with Mongo DB, Express and Node. I'd also like to add tags to each exercises and implement a filter functionality on the exercises overview page. Potentially start work on responsive design.

## MVP 4
- Ability to login and ability to change account information
- Glossary

## MVP 5
- Logbook for each account and ability to comment on exercises

## Each iteration
- Bug improvements
- Visual upgrades
- More exercises

# Backlog

A list of features that have not been assigned to a specific MVP version yet.

- General
    - Light / Dark Mode
- Timer
    - Make the timer visually distinct between running and pausing
    - Add sounds to the timer
    - Show timer on other pages when running
- Account
    - Ability to create, edit and delete accounts
    - Upload your own image
    - Change password
    - Login screen
        - Forgot password
        - Sign Up
- Training plan
    - Abilty to create training lists / plans
    - Guide to create a training plan with help from a chat bot / wizard / or similar
- Exercises
    - Show exercises improvements in a graph
    - Create images for exercises
    - Create descriptions and How-to's for exercises
    - Add exercise variations
    - Gather exercise metrics
        - Perceived difficulty
        - Weights used
        - Comments
        - etc.

## Knows bugs
Nothing to see here. For now... :D