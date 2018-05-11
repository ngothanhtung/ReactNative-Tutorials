import { connect } from 'react-redux';
import { getPhotosAsync } from '../Actions/photoAction';
import PhotoComponent from '../Components/PhotoComponent';

const mapStateToProps = (state) => ({
    photos: state.photoReducer.photos,
    loading: state.photoReducer.loading,
});

export default connect(mapStateToProps, { getPhotosAsync })(PhotoComponent);

