/* APIs */
import React, { Component } from 'react';
/* Components */
import Navigation from './_Navigation';
/* Sass */
import '../../styles/scss/styles.scss';

export default class Layout extends Component {
    static async getInitialProps () {
        return {}
    }
    render() {
        return (
            <div className="page">
                <div className="page__container">
                    <Navigation />
                    {this.props.children}
                </div>
            </div>
        )
    }
}