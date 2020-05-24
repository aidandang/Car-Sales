import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = state => {
  return { car: state.car }
}

const CarInfo = connect(mapStateToProps)(Header);

export default CarInfo;