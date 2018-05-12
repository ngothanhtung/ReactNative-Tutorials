import { connect } from 'react-redux';
import { getAlbums, addAlbum } from '../Actions/albumAction';
import { increaseCount } from '../Actions/counterAction';
import AlbumComponent from '../Components/AlbumComponent';

const mapStateToProps = (state) => ({
    albums: state.albumReducer.albums,
    loading: state.albumReducer.loading,
});

const mapDispatchToProps = {
    getAlbums,
    addAlbum,
    increaseCount
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumComponent);

