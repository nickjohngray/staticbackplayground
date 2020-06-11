import React from 'react';

interface SearchBarProps {
    handleFormSubmit: (obj: any) => void;
}

interface SearchBarState {
    term: string;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    constructor(props: SearchBarProps) {
        super(props);

        this.state = {
            term: ''
        };
    }

    setSearchTerm = event => {
        this.setState({
            term: event.target.value
        });
    };
    search = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    };

    render = () => (
        <form onSubmit={this.search}>
            <div className="search-bar">
                <input
                    onChange={this.setSearchTerm}
                    placeholder="Search..."
                    className="vid-search"
                    type="text"
                    value={this.state.term}
                />
                <button className="search-button" disabled={!this.state.term} onClick={this.search}>
                    {' '}
                    Search{' '}
                </button>
            </div>
        </form>
    );
}
export default SearchBar;
