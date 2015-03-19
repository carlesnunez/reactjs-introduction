var HolaMundo = React.createClass({
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

			<div> <h1> Ejemplo 1 </h1>
			Hola me llamo {this.state.quienSoy}
			<br></br>
			<button type="button" onClick={this.cambioElnombre}>Cambiame el nombre!</button>
			<hr></hr>
			</div>);
	}
});

//La manera de definir que datos se pasaran en el renderizado es a traves de esas estiquetas.
React.render(<HolaMundo />, document.body);