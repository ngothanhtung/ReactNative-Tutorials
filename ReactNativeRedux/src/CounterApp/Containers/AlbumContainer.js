import { connect } from 'react-redux';
import { getAlbums, addAlbum } from '../Actions/albumAction';
import AlbumComponent from '../Components/AlbumComponent';

const mapStateToProps = (state) => ({
    albums: state.albumReducer.albums,
    loading: state.albumReducer.loading,
});

export default connect(mapStateToProps, { getAlbums, addAlbum })(AlbumComponent);

