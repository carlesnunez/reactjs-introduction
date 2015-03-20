var ElementoLista = React.createClass({displayName: "ElementoLista",
	render : function(){
		return React.createElement("li", null, this.props.nombre, " - ", this.props.numero)
	}
});

var ContenedorLista = React.createClass({displayName: "ContenedorLista",
	getInitialState : function(){
		return {listaItems : [], numeroActual : 0};
	},

	anadirElemento : function(){

		this.state.numeroActual = ++this.state.numeroActual;
		this.state.listaItems.push(React.createElement(ElementoLista, {nombre: "Pepe", numero: this.state.numeroActual}));
		this.setState({listaItems : this.state.listaItems, numeroActual: this.state.numeroActual});
	
	},

	render : function(){

		return (React.createElement("div", null, React.createElement("ul", null, 
			this.state.listaItems.map(function(result) {
           		return (result);
       	 	})
		), React.createElement("button", {type: "button", onClick: this.anadirElemento}, "Nuevo elemento")));
	}
});

React.render(React.createElement(ContenedorLista, null), document.body);