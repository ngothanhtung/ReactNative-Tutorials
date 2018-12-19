import { connect } from 'react-redux'
import { fetchPeople } from './actions'
import PeopleComponent from './PeopleComponent';


function mapStateToProps(state) {
  return {
    appData: state.dataReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPeople: () => dispatch(fetchPeople())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleComponent);