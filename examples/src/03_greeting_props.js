var HelloWorld = React.createClass({
  render: function () {
    return <div>Hello {this.props.name}</div>
  }
});

var Greeting = React.createClass({
    render: function () {
      return <div>
            <HelloWorld name={"Ustun"}/>
            <HelloWorld name={"Ozgur"}/>
       </div>
     }
})

React.render(<Greeting/>, document.body)
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
