function countLikes() {
  const collection = document.querySelectorAll(".likesCount");
  const resultNode = document.querySelector(".heart-count");

  const likesValues = Array.from(collection).map(
    (
      item //transformation en JSON
    ) => parseInt(item.textContent) //renvoie un entier exprimé (ici item).
  );

  let sum = 0;
  for (let i = 0; i < likesValues.length; i++) {
    // quand i est inférieur au nombre de like
    sum += likesValues[i]; // ajouter alors 1 like
  }

  resultNode.textContent = sum; //afficher l'incrémentation
}

function heartManager() {
  const heartNode = document.querySelectorAll(".heart-btn");
  heartNode.forEach((element) => {
    element.addEventListener("click", (e) => {
      //au clic
      const isBtnOnclick = e.target.classList.toggle("onclick");

      let numberOfLikes = parseInt(e.target.previousElementSibling.textContent);
      console.log(numberOfLikes);

      isBtnOnclick ? numberOfLikes++ : numberOfLikes--; // +1 ou -1
      e.target.previousElementSibling.textContent = numberOfLikes;

      countLikes();
    });

    element.addEventListener("keydown", (e) => {
      if (e.target === document.activeElement && e.key === "Enter") {
        //clavier touche "ENTER"
        const isBtnOnclick = e.target.classList.toggle("onclick");

        let numberOfLikes = parseInt(
          e.target.previousElementSibling.textContent
        );

        isBtnOnclick ? numberOfLikes++ : numberOfLikes--;
        e.target.previousElementSibling.textContent = numberOfLikes;

        countLikes();
      }
    });
  });
}
