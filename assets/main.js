const API = 'https://animes5.p.rapidapi.com/';

const content = null || document.getElementById("content");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '48a9a55ff7mshe5285c6a3d7f987p1f75a2jsn0de4d9537903',
		'X-RapidAPI-Host': 'animes5.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const info = await fetchData(API);
        let view = `
        ${info.animes.map(anime => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${anime.main_picture.medium}" alt="${anime.id}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                <h3 class="text-lg text-gray-900">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${anime.title}
                </h3>
                </div>
            </div>
        `)}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error)
    }
})();