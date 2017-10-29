var React = require('react');

var ErrorModal = React.createClass({
    getDefaultProps:function(){
        return{
            title:'Error'
        }
    },
    componentDidMount:function(){
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    propTypes:{
        title:React.PropTypes.string,
        message:React.PropTypes.string.isRequired
    },

    render:function(){
        var {title,message}=this.props;
        return(
            <div className="reveal tiny text-center"  id="error-modal" data-reveal="">
            <h1>{title}</h1>
                <p >{message}</p>
                <p>
                    <button className="button" data-close=""  type="button" >
                    Okay
                    </button>
                </p>

            </div>
        )
    }
});

module.exports = ErrorModal;