import React, { Component } from 'react';

class ErrorBoundery extends Component {
    state = { 
        hasError: false,
        errorMessage: ''
     }

    // static getDerivedStateFromError(error) {
    //     return { hasError: true };
    // }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }
    
    render() { 

        if(this.state.hasError) {
            return ( <h3>{this.state.errorMessage}</h3> );
        } 
            
        return this.props.children;
        
    }
}
 
export default ErrorBoundery;