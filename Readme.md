# ModernFade Javascript/CSS3 Crossfade

A very limited library that will transition images or divs in a container with a css3 crossfade

### to use on a div #wrapper w/ images inside (optional params shown)

		new ModernFade('#wrapper', {delay: 2000, time: 1600, transition: 'crossfade'})

**Delay** is the milliseconds between transitions<br>
**Time** is the milliseconds that should match your css3 transition in the css file<br>

### also include the modern-fade.css, feel free to alter your transition

### Multiple ModernFade with multiple css animations?

Just add a parent wrapper class along with the existing modern-fade class in the markup.

### WANTS

- add option for type of transition so you can could your own css3 animation and js will add the class along with the existing in/out classes