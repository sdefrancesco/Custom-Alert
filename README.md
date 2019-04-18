#   Custom Alert
### Created By Sebastian Defrancesco
  [http://seb25.com/developers](https://www.seb25.com)
---
   CustomAlert.js is a plugin designed to replace the native javascript confirm option. It comes with many customizeable options. This plugin relies on anime.js 

1. In the head of your html file, include the custom-alert.css file

    `<link rel="stylesheet" href="/Custom-Alert.css">`

2. On the bottom of your html file, include the custom-alert.js file and the anime.js file or cdn. Anime.js must be loaded first for Custom-Alert to work with animations.

    `<script src='https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js'></script>`
    `<script src='/custom-alert.js'></script>`

3. Initialize a new custom alert:

   `let customAlert = new CustomAlert('your heading', 'and your subheading')`

4. You can get more specific with your custom alert, by passing in a third parameter which is an object called options.

    `let customAlert = new CustomAlert('your heading', 'and your subheading', 
            {
                //      Custom function for when user confirms
                confirm: function() {
                    console.log('User Has Confirmed')
                    //  run custom confirm function here
                },
                //      Custom function for when user cancels
                cancel: function() {
                    console.log('User Has Canceled')
                    //  run custom cancel function here
                },
                //      Custom function for when alert is closed and animation has ended
                afterExitAnimation: function() {
                    console.log('animation ended.')
                    // after animation function here
                }
            }
    )`