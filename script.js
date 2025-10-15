const url = "https://api.thecatapi.com/v1/images/search?limit=50";
let pic = document.createElement("img")
function getdata() {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let photo_url = data[i].url
        console.log(photo_url);
        pic.src = photo_url
        document.body.appendChild(pic)
      }
    });
    
}
getdata();
