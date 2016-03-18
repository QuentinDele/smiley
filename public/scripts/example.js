var Dropdown = React.createClass({
                getInitialState: function() {
                    return {
                        listVisible: false,
                        display: "", 
                        selected:moods[0]
                    };
                },
                
                select: function(item) {
            
                    this.setState({selected: item});

                },
            
                render: function() {
                    var nameForDropdownContent='mood';
                    var test = this.state.selected.id;
                    if (test=='happy')nameForDropdownContent='happy';
                    if (test=='mad')nameForDropdownContent='mad';
                    if (test=='sad')nameForDropdownContent='sad';
                    
                    return <div className="dropdown">
                      <button className={nameForDropdownContent} type="button" ><img src={this.state.selected.image}/> {this.state.selected.name} <span className="caret"></span>
                      </button>
                      <div className="dropdown-content">
                      <ul className="dropdown-menu">{this.renderListItems()}</ul>
                    </div>
                    </div>;
                },
                
                renderListItems: function() {
                    var items = [];
                    for (var i = 1; i < this.props.list.length; i++) {
                        var item = this.props.list[i];
                        items.push(<li onClick={this.select.bind(null, item)}><a href="#"><img src={item.image}/>&nbsp;&nbsp;{item.name}</a></li>);
                    }
                    return items;
                }
            });
            
            var moods = [{
                id: "mood",
                name:"Choose your mood",
                image: " "
        },{
                id: "happy",
                name: "",
                image: "Face-smile.png"
            }, {
                id: "mad",
                name: "",
                image: "Face-plain.png"
            }, {
                id: "sad",
                name: "",
                image: "Face-sad.png"
            }];
            ReactDOM.render(<Dropdown list={moods} selected={moods[0]} />, document.getElementById("container"));
