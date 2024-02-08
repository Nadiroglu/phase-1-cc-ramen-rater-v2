// index.js

const url = "http://localhost:3000/ramens"
fetch(url)
.then((res) => res.json())
.then((data) => {
  data.forEach(imagesData => {
      displayRamens(imagesData)
      console.log(imagesData);
  });;
})


const displayRamens = (imagesData) => {
  // request data from the server display image for each for an image add #ramen-menu
  let displayDiv = document.getElementById("ramen-menu")
  let image = document.createElement("img")
  image.src = imagesData.image
  displayDiv.append(image)
  


  image.addEventListener('click', function handleClick() {
    console.log("Click");
    let ramenName = document.querySelector(".name")
    ramenName.textContent = imagesData.name

    let restaurant = document.querySelector(".restaurant")
    restaurant.textContent = imagesData.restaurant


    let imageD = document.querySelector(".detail-image")
    imageD.src = imagesData.image

    let rating = document.querySelector("#rating-display")
    rating.textContent = imagesData.rating

    let comment = document.querySelector("#comment-display")
    comment.textContent = imagesData.comment

  })

  
};
  let form = document.querySelector("#new-ramen")
  let inputName = document.querySelector("#new-name")
  let inputImg = document.querySelector("#new-image")
  let inputRestaurant = document.querySelector("#new-restaurant")
  let inputRating = document.querySelector("#new-rating")
  let inputComment = document.querySelector("#new-comment")

form.addEventListener("submit", function addNew(e) {
  e.preventDefault()
  console.log("NewClick");

  let newRamen = {
    name: inputName.value,
    image: inputImg.value,
    restaurant: inputRestaurant.value,
    rating: inputRating.value,
    comment: inputComment.value
  }

  displayRamens(newRamen)
  // let newRamenName = document.createElement("h2")
  // newRamenName.textContent = inputName.value

  // let newRamenImg = document.createElement("img")
  // newRamenImg.src = inputImg.value

  // let newRamenRestaurant = document.createElement("h3")
  // newRamenRestaurant.textContent = inputRestaurant.value

  // let newRamenRating = document.createElement("p")
  // newRamenRating.textContent = inputRating.value

  // let newRamenComment = document.createElement("p")
  // newRamenComment.textContent = inputComment.value

  // displayDiv.appendChild(newRamenImg);
  // displayDiv.appendChild(newRamenName);
  // displayDiv.appendChild(newRamenRestaurant);
  // displayDiv.appendChild(newRamenRating);
  // displayDiv.appendChild(newRamenComment);
})
// const main = () => {
//   // Invoke displayRamens here
//   // Invoke addSubmitListener here
// }

// main()

// // Export functions for testing
// export {
//   displayRamens,
//   addSubmitListener,
//   // handleClick,
//   main,
// };
