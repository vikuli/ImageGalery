const input = document.getElementById("input");
const collection = document.querySelector(".collection");
const search = document.querySelector(".search");
const footer = document.querySelector(".footer");
const searchButton = document.querySelector(".search-button");

window.addEventListener("load", dayNight);

// Load Image function

function loadImg() {
  let val = search.value;
  let url =
    "https://api.unsplash.com/search/photos?query=" +
    val +
    "&per_page=30&client_id=kxVBCSuClqM-2fuDXecFoJzliQy5cbATr6X9sUL4MHk";
  if (val !== "") {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.results.length; i++) {
          let img = document.createElement("img");
          img.src = data.results[i].urls.regular;
          img.className = "image";
          img.addEventListener("dblclick", function () {
            window.open(data.results[i].links.download, "_blank");
          });
          collection.appendChild(img);
        }
      });
  } else {
    url =
      "https://api.unsplash.com/search/photos?query=alpaca&per_page=12&client_id=kxVBCSuClqM-2fuDXecFoJzliQy5cbATr6X9sUL4MHk";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.results.length; i++) {
          let img = document.createElement("img");
          img.src = data.results[i].urls.regular;
          img.className = "image";
          img.addEventListener("dblclick", function () {
            window.open(data.results[i].links.download, "_blank");
          });
          collection.appendChild(img);
        }
      });
  }
}
loadImg();

search.addEventListener("keydown", function (event) {
  if (event.key === "Enter") collection.innerHTML = "";
  loadImg();
});

searchButton.addEventListener("click", () => {
  collection.innerHTML = "";
  loadImg();
});

// Day and Night theme function

function dayNight() {
  const date = new Date();
  const hour = date.getHours();

  if (hour >= 7 && hour <= 19) {
    document.body.style.backgroundColor = "#eaf0ff";
    document.body.style.color = "#002a29";
    footer.style.backgroundColor = "#6e727a";
  } else {
    document.body.style.backgroundColor = "#002a29";
    document.body.style.color = "#c7cedf";
    footer.style.backgroundColor = "#001616";
  }
}
