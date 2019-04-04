/*

## Exercise: This

Create a single object named `slideshow` that represents the data and functionality of a picture slideshow. There should be NO VARIABLES OUTSIDE THE OBJECT. The object should have properties for:

1. An array called `photoList` that contains the names of the photos as strings
2. An integer `currentPhotoIndex` that represents which photo in the `photoList` is currently displayed
3. A `nextPhoto()` function that moves `currentPhotoIndex` to the next index `if `there is one, and:
	3a. logs the current photo name.
	3b. Otherwise, log "End of slideshow";
4. A `prevPhoto()` function that does the same thing, but backwards.
5. A function `getCurrentPhoto()` that returns the current photo from the list.

### Exercise Answer

```javascript
// Have fun :)
```

*/
 
const slideshow = {
    photoList: [
    'Barbarian.jpg','Bard.jpg', 'Cleric.jpg','Fighter.jpg','Monk.jpg',
    'Paladin.jpg','Ranger.jpg','Rogue.jpg','Sorcerer.jpg','Wizard.jpg'
    ],
    currentPhotoIndex:-1,
    playInterval:undefined,
    nextPhoto() {
        if (this.currentPhotoIndex == (this.photoList.length-1)){  
            console.log('End of Slideshow')
            this.pause()
        } else {
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex])
        }
    },   
    prevPhoto() {
        if (this.currentPhotoIndex == 0){ 
            console.log('Beginning of Slideshow')
        } else {
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex])
        }
    },
    getCurrentPhoto() {
        console.log(this.photoList[this.currentPhotoIndex])
    },
    play(){
        this.playInterval = setInterval(this.nextPhoto.bind(this),2000)
    },
    pause(){
        clearInterval(this.playInterval)
    },
};


slideshow.play()
/*
Going back to our slideshow object, let's add some functionality.
create an empty property named playInterval
A play() function that moves to the next photo ever 2000ms until the end.
Tip - use playInterval = setInterval(fn,ms).
A pause() function that stops the slideshow 
Tip - use clearInterval(playInterval)
Automatically pause the slideshow if it gets to the end of the photolist while playing.
*/