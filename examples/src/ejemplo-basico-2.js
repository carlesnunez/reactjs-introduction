var ElementoLista = React.createClass({
	render : function(){
		return <li>{this.props.nombre} - {this.props.numero}</li>
	}
});

var ContenedorLista = React.createClass({
	getInitialState : function(){
		return {listaItems : [], numeroActual : 0};
	},

	anadirElemento : function(){

		this.state.numeroActual = ++this.state.numeroActual;
		this.state.listaItems.push(<ElementoLista nombre="Pepe" numero={this.state.numeroActual}/>);
		this.setState({listaItems : this.state.listaItems, numeroActual: this.state.numeroActual});
	
	},

	render : function(){
		
		return (<div><ul>
			{this.state.listaItems.map(function(result) {
           		return (result);
       	 	})}
		</ul><button type="button" onClick={this.anadirElemento}>Nuevo elemento</button></div>);
	}
});

React.render(<ContenedorLista/>, document.body);
