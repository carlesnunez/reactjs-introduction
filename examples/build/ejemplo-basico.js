var HolaMundo = React.createClass({displayName: "HolaMundo",
	getInitialState : function(){
		return {quienSoy : "Thomas"};
	},
	cambioElnombre: function(){
		if(this.state.quienSoy == "Thomas"){
			this.setState({quienSoy : "Carles"});
		}else{
			this.setState({quienSoy : "Thomas"});
		}
	},
	
	render : function(){
		return (

			React.createElement("div", null, " ", React.createElement("h1", null, " Ejemplo 1 "), 
			"Hola me llamo ", this.state.quienSoy, 
			React.createElement("br", null), 
			React.createElement("button", {type: "button", onClick: this.cambioElnombre}, "Cambiame el nombre!"), 
			React.createElement("hr", null)
			));
	}
});

//La manera de definir que datos se pasaran en el renderizado es a traves de esas estiquetas.
React.render(React.createElement(HolaMundo, null), document.body);