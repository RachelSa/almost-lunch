function lunchIIFE() {
  addSandwhich()
  checkIfLunchTime()
}

let lunchDiv = document.getElementById("lunch-time")

function addSandwhich() {
  let img = document.createElement("img")
  img.className += "sammy"
  img.src += "http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Sandwich-PNG-Transparent-Image-2.png"
  lunchDiv.append(img)
}

function checkIfLunchTime() {

  let result = document.querySelector("output")
  switch (new Date().getHours()) {
    case 3:
    case 4:
    case 5:
    case 6:
      result.innerText = "No, too early"
      break;
    case 7:
    case 8:
      result.innerText = "No, it is breakfast time"
      break;
    case 9:
    case 10:
      result.innerText = "Not yet"
      break;
    case 11:
      result.innerText = "Maybe"
      break;
    case 12:
    case 13:
    case 14:
      result.innerText = "Yes!"
      break;
    case 15:
      result.innerText = "Sure I guess!"
      break;
    case 16:
      result.innerText = "Lunch is over"
      break;
    case 17:
    case 18:
    case 19:
      result.innerText = "I think this is suppertime, really"
      break;
    default:
      result.innerText = "No"
      break;
  }
}

lunchIIFE()
