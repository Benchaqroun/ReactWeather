var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');



var Weather = React.createClass({
    getInitialState:function(){
        return{
            isLoading:false,
            errorMessage:undefined
        }
    },
    handleSearch:function(location){
        var that = this;
        this.setState({ 
            isLoading:true,
            location:undefined,
            temp:undefined
            });
        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location:location,
                temp:temp,
                isLoading:false
            })
        },function(err){
              console.log(typeof err.message)
          that.setState({
            errorMessage:err.message
          })
        })
    },
   componentDidMount:function(){
       var place = this.props.location.query.place;
       if(place && place.length>0){
           this.handleSearch(place);
           window.location.hash = '#/'
       }
       
   },
   componentWillReceiveProps:function(newProps){
        var place = newProps.location.query.place;
       if(place && place.length>0){
           this.handleSearch(place);
           window.location.hash = '#/'
       }
   },
    render:function(){
        var {isLoading,temp,location,errorMessage} = this.state;  
        function renderMessage(){
            if(isLoading){
               return <h3 className="text-center">Fetching Weather...</h3>
            }else if(temp && location){
                 return <WeatherMessage temp={temp} location={location}/>
            }
            
        }; 
        function renderError(){
            if(typeof errorMessage === 'string')
            return(
               <ErrorModal message={errorMessage} />
            )
        };
        return(
            <div>
                 <h1 className="text-center page-title">Get Weather</h1>
             <WeatherForm onSearch = {this.handleSearch}/>
             {renderMessage()}
             {renderError()}
            </div>
           
        )
    }
});

module.exports = Weather;