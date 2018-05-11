import { connect } from 'react-redux';
import { getAlbums, addAlbum } from '../Actions/albumAction';
import { increaseCount } from '../Actions/counterAction';
import AlbumComponent from '../Components/AlbumComponent';

const mapStateToProps = (state) => ({
    albums: state.albumReducer.albums,
    loading: state.albumReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
    getAlbums, addAlbum,
    increaseCount: (number) => dispatch({ type: 'INCREASE_COUNT', number: number })
});


export default connect(mapStateToProps, mapDispatchToProps)(AlbumComponent);

