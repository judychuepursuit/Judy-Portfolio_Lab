let array = ["portfolio-images/1.png", "portfolio-images/2.png", "portfolio-images/3.png", "portfolio-images/4.png", "portfolio-images/5.png", "portfolio-images/6.png", "portfolio-images/7.png", "portfolio-images/8.png", "portfolio-images/9.png", "portfolio-images/10.png", "portfolio-images/11.png", "portfolio-images/12.png"]

let portfolioImage;

window.onload = () => {
console.log("Page loaded.")
portfolioImage = document.getElementsByTagName("img")[1]
portfolioImage.onclick = clickEvent
}

clickEvent = () => {
console.log("Click event.")
console.log(portfolioImage)
portfolioImage.src = array[Math.floor(Math.random() * 12)] 
}

// current image index subtract and adds arrows