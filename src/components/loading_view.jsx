import React from 'react';
/**
 * @return {component} The component of product list
 */
class LoadingView extends React.Component {
    /**
     * @return {component}
     */
    render() {
        return (
            <div className="loading">
                <h3>Loading...</h3>
                <i className="fa fa-circle-o-notch fa-spin fa-5x fa-fw"></i>
            </div>
        );
    }
}

export default LoadingView;
