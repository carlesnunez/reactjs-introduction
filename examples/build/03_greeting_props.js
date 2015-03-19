var HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function () {
    return React.createElement("div", null, "Hello ", this.props.name)
  }
});

var Greeting = React.createClass({displayName: "Greeting",
    render: function () {
      return React.createElement("div", null, 
            React.createElement(HelloWorld, {name: "Ustun"}), 
            React.createElement(HelloWorld, {name: "Ozgur"})
       )
     }
})

React.render(React.createElement(Greeting, null), document.body)
/*
var contenedorLista = React.createClass({
	getInitialState : function(){
		return {listaItems : []};
	},
	render : function(){
		var lista = ["hola", "adios"];
		console.log(lista);
		for (i = 0; i < this.state.listaItems; i++){
			lista.push(<elementoLista nombre={this.state.listaItems[i]}/>);
		}
		this.state.listaItems = lista;
		return
		(<ul>
			{this.state.listaItems}
		</ul>);
	}
});
*/
