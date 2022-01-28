export const getAll = async (page)=>{
	const res = await fetch(`https://chairdnb-api.herokuapp.com/${page}`);
	const data = res.json();
	return data;
}

