"use strict";
import axios from 'axios';

const ENDPOINT = 'https://pixabay.com/api/';
const API_KEY = '33939838-11490f037ea089d93e9423619';

export default class imagesApi {
    constructor() {
        this.page = 1;
        this.searchQuery = " ";
}
}

async function getImages(searchQuery) {
    const apiParams = new searchParams({
        q: this.searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40,
        page: this.page
    });
    const { data } = await axios.get(`${ENDPOINT}?${apiParams}`);
    return data;
}



