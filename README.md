# Intent

![IPhone 11 Pro Max](https://im4.ezgif.com/tmp/ezgif-4-d659b2e647be.gif)![IPhone SE(2nd Generation)](https://im4.ezgif.com/tmp/ezgif-4-bdeb52066349.gif)![Google Pixel XL)](https://im4.ezgif.com/tmp/ezgif-4-4db9ed9e1382.gif)


### Installation

1. Install dependencies using `yarn`.
2. Run `yarn install:pods` to install Pods.
3. Use `yarn dev` to run the Metro bundler.
4. Run the proxy server with `yarn proxy`.
5. Use `yarn start:ios` or `yarn start:android` to build and run the app in the development mode.

### Requirements

In this project you'll be using `University Domains API` (don't forget to run the proxy server).
The API includes names and universities of most of the universities of the world.

> http://localhost:9000/search?university=Poland
> http://localhost:9000/search?university=Poland&name=medical

You'll be implementing a simple app that contains 2 screens:

**Screen 1**

- the initial screen should contain a list of 5 universities: Poland, Germany, France, Spain, and the United Kingdom
- pressing the university card should open the `Screen 2` for that specific university.

**Screen 2**

- add a name of the university in the header
- the screen should contain a list of the university universities
- the screen should contain a search bar (there should be a possibility to filter the list by name)
- there should be an option to sort the list by name as well
- please display an empty state (placeholder) if there are no results
- each university card should contain the name and pressable link which opens the university web page in the default phone browser

### Other

- if you don't want to use TS in this project change the `allowJs` param to `true` in `./tsconfig.json` (or completely remove TS from the project dependencies)
- estimated time to complete this task is 4h but we don't use a stopwatch! :)

Good luck! 🤗
