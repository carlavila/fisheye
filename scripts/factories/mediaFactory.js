class MediaFactory {
	constructor(data) {
      
	  if (data.hasOwnProperty("image")) { //hasOwnProperty() retourne un booléen indiquant si l'objet possède la propriété spécifiée "en propre", sans que celle-ci provienne de la chaîne de prototypes de l'objet.
	    return new Image(data)
	  }
     
	  if (data.hasOwnProperty("video")) {
	    return new Video(data)
	  }
	}
}