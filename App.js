
const Dog = props => {
	const { name, weight, breed } = props;
	return React.createElement("div", {}, [
		React.createElement("h2", {}, name),
		React.createElement("h2", {}, weight),
		React.createElement("h2", {}, breed),
	]);
};


const App = () => {
	return React.createElement("div", {}, [
		React.createElement("div", {}, "Dog Website"),
		dogs.map(dog => React.createElement(Dog, { ...dog })),
	]);
};


const dogs = [
	{
		name: "Doggy 1",
		weight: "5.7kg",
		breed: "Husky",
	},
	{
		name: "Doggy 2",
		weight: "5.7kg",
		breed: "Husky",
	},
	{
		name: "Doggy 3",
		weight: "5.7kg",
		breed: "Husky",
	},
];


ReactDOM.render(
	React.createElement(App, {}, null),
	document.getElementById("root")
);
