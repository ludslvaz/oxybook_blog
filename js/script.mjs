import FluxRequest from "../lib/Flux/FluxyV1/FluxAPI/lib/launcher/FluxRequest.mjs";
const noticys = document.getElementsByClassName('card')

const flux = new FluxRequest("http://localhost:8080/usuarios")
const fluxBlog = new FluxRequest("http://localhost:8080/blog")

const noticys_img = document.getElementsByClassName('imgcard')
const noticys_title = document.getElementsByClassName('title_card')
const noticys_pg = document.getElementsByClassName('pg_card')
const size = noticys.length;
const response = await fluxBlog.fluxStart()
for (let id = 0; id <= size; id++){
    noticys_img[id].src = response[id].pathIcon
    noticys_title[id].textContent = response[id].title
    noticys_pg[id].textContent = response[id].comentario
}

