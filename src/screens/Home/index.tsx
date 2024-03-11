import {withHook} from '../../hoc/withHook';
import {useHome} from '../../hooks/useHome';
import Home from './Home';


const HomeScreen = withHook(useHome, Home);

export default HomeScreen;
