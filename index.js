/**
 * @format
 */


import { LogBox } from 'react-native'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


LogBox.ignoreLogs([
    "ViewPropTypes will be removed",
    "ColorPropType will be removed",
    'Each child in a list should have a unique "key" prop.',
    '`flexWrap: `wrap`` is not supported with the `VirtualizedList` components.Consider using `numColumns` with `FlatList` instead.',
    'componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.'
    ])


AppRegistry.registerComponent(appName, () => App);
