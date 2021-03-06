import React from 'react';
import ReactSearchBox from 'react-search-box';

export default class HomeRoot extends React.Component {
    data = [
        {
            key: 'john',
            value: 'John Doe',
        },
        {
            key: 'jane',
            value: 'Jane Doe',
        },
        {
            key: 'mary',
            value: 'Mary Phillips',
        },
        {
            key: 'robert',
            value: 'Robert',
        },
        {
            key: 'karius',
            value: 'Karius',
        },
    ]

    render() {
        return (
        <div className="homepage-container">
            <div className="homepage-content">
                <div className="homepage-content__text-content">
                    <div className="brand-tagline">
                        <h1 className="brand-logo">
                            Historia
                        </h1>
                        <hr/>
                        <span>Create Your Own Precious Moment</span>
                    </div>
                    <ReactSearchBox
                        placeholder = "Let us help you..."
                        value = "search"
                        data={this.data}
                    />
                </div>
            </div>
        </div>
        )
    }
}
