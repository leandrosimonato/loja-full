import { useAuth } from './../clienteHooks';
import { withRouter } from 'react-router-dom';

const ComAuth = props => useAuth(props) && props.children;

export default withRouter(ComAuth);

