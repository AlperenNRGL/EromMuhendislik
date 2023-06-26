const images_div = document.querySelectorAll(".first-div .box");
const image_modal = document.querySelector(".image-modal");

images_div.forEach(element => {
    element.addEventListener("click", (e) => {
        var order;
        var box;
        if (!e.target.classList.contains("box")) {
            box = e.target.parentElement.previousElementSibling;
            order = e.target.parentElement.attributes["order"].value;
        } else {
            box = e.target.previousElementSibling;
            order = e.target.attributes["order"].value;
        }
        image_modal.firstElementChild.attributes["image_order"].value = order;
        image_modal.firstElementChild.src = box.src;
        image_modal.style.display = "block"
    })
})



function left_btn() {
    let value = image_modal.firstElementChild.attributes["image_order"].value - 1;
    if (value == 0) { value = document.querySelectorAll(".first-div .box").length }
    image_modal.firstElementChild.attributes["image_order"].value = value
    const src = document.querySelector(`[order='${value}']`).previousElementSibling.attributes["src"].value;
    image_modal.firstElementChild.attributes["src"].value = src;
}

function right_btn() {
    let value = image_modal.firstElementChild.attributes["image_order"].value;
    if (value == document.querySelectorAll(".first-div .box").length) { value = 0 }
    image_modal.firstElementChild.attributes["image_order"].value = Number(value) + 1
    const src = document.querySelector(`[order='${Number(value) + 1}']`).previousElementSibling.attributes["src"].value;
    image_modal.firstElementChild.attributes["src"].value = src;
    calculate_height()

}



function close_btn() {
    image_modal.style.display = "none"
}


function calculate_height() {
    const yukseklik = document.getElementById("image_modal_img").style.height;
    console.log(yukseklik);
}