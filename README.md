# Spaceships finder

## In order to run it, do following

1. `npm i`
2. `npm run dev`

Due to the tight time budget, I build main feature of the application, what I have:

1. Use query params as a state, so it can be easily shareable
2. Built components that can be reused in other parts of the application
3. Build Filters and list of spaceships
4. Basic empty state

What I would do if I had more time:

1. Revisit components and check if they are built to be reusable of they looks fine, cover with tests.
2. Decide what it's better to use for styling, tailwind I used for the first time just for fun so it can be little messy.
3. Adapt it to be responsive
4. Revisit types, create types for each entity and put them to shareable.
5. Add memo for filtering, or use server side filtering if we have to much spaceships to choose from
6. Think about pagination in case we have too much spaceships
7. Build layout component that can render Filters/List and also handle Loading/Error states.
8. Add unit test for the whole feature.
9. Revisit filtering util, make it the way that we can easily configure different kind of filters on the way. smth like this
   spaceships.filter((spaceship) => [colorsFilter(colors, mode), optionsFilter(options), speedFilter(speed)].every(filter => filter(spaceship)))
