const init = async () => {
  //la fonction renvoie toujours une promesse.

  const { photographers } = await getData(); //attend que cette promesse se réalise et renvoie son résultat.

  photographers.forEach((photographer) => {
    // La méthode forEach() est aussi utilisée pour faire des boucles dans des tableaux
    const Template = new Photographer(photographer); //la méthode constructor Photographer est appelé par "new" --> un nouvel objet est crée : "photographer"
    Template.buildPhotographerCard();
  });
};

init();
