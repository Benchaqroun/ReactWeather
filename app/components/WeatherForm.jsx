var React = require('react');

var WeatherForm = React.createClass({
    formSubmit:function(e){
        e.preventDefault();
        var location = this.refs.location.value;
        if(location.length>0){
            this.refs.location.value = '';
            this.props.onSearch(location);
            // alert(location);
        }
    },
    render:function(){
        return(
            <div>
             <form onSubmit={this.formSubmit}>
                <input type="text" placeholder="Enter City Name" ref="location" />
                <button>Get Weather</button>
             </form>

            </div>
        )
    }
});

module.exports = WeatherForm;