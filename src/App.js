import React, { Component } from 'react';
import { addCity, getCities } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {

  state = {
    cityName: ''
  }

  addNewCity = () => {
    this.props.addCity(this.state.cityName);
    this.setState({ cityName: '' });
  }

  componentDidMount() {
    this.props.getCities();
  }

  render() {
    const { cities, loading, error } = this.props;
    return (
      <div>
        {
          error &&
          <h3>Erro ao se comunucar com a API</h3>
        }
        <ul>
          {
            loading ? <span>Loading...</span> :
            cities.map((element, index) =>
              <li key={index}> { element } </li>
            )
          }
        </ul>

        <input type="text" value={this.state.cityName} onChange={(e) => this.setState({ cityName: e.target.value })}/>
        <button onClick={this.addNewCity}>Adicionar cidade</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addCity, getCities }, dispatch)

const mapStateToProps = state => ({
  cities: state.cities,
  loading: state.loading,
  error: state.error
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
