const init = async () => {
  // id
  const photographerId = new URLSearchParams(location.search).get("id");
  
  // Build Data
  const { photographers, media } = await getData();
  const photographerData = photographers.find(
    (photographer) => photographer.id == photographerId
  );
  const mediaData = media.filter(
    (media) => media.photographerId == photographerId
  );

  // Build photographer header
  const Template = new Photographer(photographerData);
  Template.buildPhotographerHeader()
  //à compléter

  // Event Modal Btn
  //à compléter
};

init();