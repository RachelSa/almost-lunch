function lunchIIFE() {
  addSandwhich()
}

let lunchDiv = document.getElementById('lunch-time')

function addSandwhich() {
  let img = document.createElement('img')
  img.className += "sammy"
  img.src += "http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Sandwich-PNG-Transparent-Image-2.png"
  lunchDiv.append(img)
}

lunchIIFE()
