import api from '../constants/API'

export default (async function (type) {
	switch (type) {
		case api.all:
			return await getListSites();
		default:
			return await getListSites();
	}
})

function getListSites() {
	return new Promise((resolve) => {
		setTimeout(() => {
			return resolve([{
				nombre: 'Hotel X',
				descripcion: 'Descripcion de hotel x'
			}, {
				nombre: 'Hotel Y',
				descripcion: 'Descripcion de hotel Y'
			}])
		}, 10);
	})
}