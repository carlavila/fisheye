class MediaFactory { // Parent
	constructor(data) { // argument
      
	  if (data.hasOwnProperty("image")) { //hasOwnProperty() retourne un booléen indiquant si l'objet possède la propriété spécifiée "en propre", sans que celle-ci provienne de la chaîne de prototypes de l'objet.
	    return new Image(data)
	    // objet appartenant à la class MediaFactory
	  }
     
	  if (data.hasOwnProperty("video")) {
	    return new Video(data) // class Video : videoModel
	  }
	}
}

// hasOwnProprety()
/* ex : 
	var x = {
    		y: 10
	};
	console.log(x.hasOwnProperty("y")); //true
	console.log(x.hasOwnProperty("z")); //false 
*/