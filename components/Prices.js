const options = [
    'USD',
    'GBP',
    'EUR'
]

class Prices extends React.Component {
    state = {
        currency: 'USD'
    };

    buildListItem = (currency) => {
        return (
            <li className='list-group-item'>
                Bitcoin Rate for {this.props.bpi[currency].description}
                : <span className='badge badge-primary'>{this.props.bpi[currency].code}</span>
                <strong>{this.props.bpi[currency].rate}</strong>
            </li>
        );
    };

    onSelectChange = (ev) => {
        this.setState({
            currency: ev.target.value
        });
    };

    render() {
        const listItem = this.buildListItem(this.state.currency);

        return (
            <div>
                <ul className='list-group'>
                    {listItem}
                </ul>
                <br />

                <select onChange={this.onSelectChange} className='form-control'>
                    {options.map(o => <option>{o}</option>)}
                </select>
            </div>
        );
    }
}

export default Prices;