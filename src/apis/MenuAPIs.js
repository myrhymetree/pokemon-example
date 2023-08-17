import axios from 'axios';
import menus from '../data/menu-detail.json';

export async function getMenuList({paging}) {

    let menus = [];
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${paging.limit}&offset=${paging.offset}`;
    console.log('paging', paging);
    console.log(url);

    await axios
        .get(url)
        .then((res) => {
            menus = res.data.results;
        }).catch((e) => {
            console.log(e);
        })

        return menus;
}

export async function getPokemonImage(url) {
    let image = [];

    await axios
        .get(url)
        .then((res) => {
            // console.log(res.data.sprites.front_default);
            image = res.data.sprites.front_default;
        }).catch((e) => {
            console.log(e);
        })

        return image;
}

export async function getMenuDetail(menuName) {

    let forms = [];

    await axios
        .get(`https://pokeapi.co/api/v2/pokemon/` + menuName)
        .then((res) => {
            forms = res.data;
        }).catch((e) => {
            console.log(e);
        })

    return forms;
}

export async function searchMenu(searchMenuName) {

    let forms = [];

    await axios
        .get(`https://pokeapi.co/api/v2/pokemon/` + searchMenuName)
        .then((res) => {
            forms = res.data.forms;
        }).catch((e) => {
            console.log(e);
        })

    return forms;
}