function getPhotos() {
  return new Promise((resolve, reject) => {
    fetch('https://picsum.photos/v2/list')
      .then((response) => response.json())
      .then((json) => {
        resolve(json);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default {
  getPhotos,
};
