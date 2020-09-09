import React, { Suspense, lazy } from 'react'
import { Text, View } from 'react-native';
function LazyImport(Component) {
    const ComponentLoadable = lazy(Component)
    return props => (
        <Suspense fallback={
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 35 }}>Loading</Text>
            </View>
        }>
            <ComponentLoadable {...props} />
        </Suspense>
    );
}

export default LazyImport
//LAZY LOAD MODULES
export const Home = LazyImport(() => import('./../pages/Home/Home'/* webpackChunkName: 'home' */))
export const Search = LazyImport(() => import('./../pages/Search/Search'/* webpackChunkName: 'home' */))
export const GenereteBudget = LazyImport(() => import('./../pages/GenereteBudget/GenereteBudget'/* webpackChunkName: 'home' */))
export const Budgets = LazyImport(() => import('../pages/Budgets/Budgets'/* webpackChunkName: 'home' */))
export const Profile = LazyImport(() => import('./../pages/Profile/Profile'/* webpackChunkName: 'home' */))
