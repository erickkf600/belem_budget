import React from 'react'
import { TabItem, Tab, styles, icon} from './../assets/styles/tab'
import { CustomIcon} from './../assets/Icons/Icons'
import { Text } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native';

const TabBar = (props) => {

    return (
        <Tab>
            <TouchableWithoutFeedback onPress={() => { props.navigation.navigate('Home') }} style={styles.item}>
                <TabItem>
                    <CustomIcon name="home" size={27} style={props.state.index === 0 ? icon.active : icon.inactive} />
                    <Text style={props.state.index === 0 ? icon.textActive : icon.textInactive}>Home</Text>
                </TabItem>
            </TouchableWithoutFeedback> 

            <TouchableWithoutFeedback onPress={() => { props.navigation.navigate('Pesquisar') }} style={styles.item}>
                <TabItem>
                    <CustomIcon name="search" size={27} style={props.state.index === 1 ? icon.active : icon.inactive} />
                    <Text style={props.state.index === 1 ? icon.textActive : icon.textInactive}>Pesquisar</Text>
                </TabItem>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => { props.navigation.navigate('GerarOrcamento') }} style={styles.add}>
                <TabItem>
                    <CustomIcon name="plus" size={20} style={icon.addBudget}/>
                </TabItem>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => { props.navigation.navigate('Orcamentos') }} style={styles.item}>
                <TabItem>
                    <CustomIcon name="history" size={27} style={props.state.index === 3 ? icon.active : icon.inactive} />
                    <Text style={props.state.index === 3 ? icon.textActive : icon.textInactive}>Orcamentos</Text>
                </TabItem>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => { props.navigation.navigate('Perfil') }} style={styles.item}>
                <TabItem>
                    <CustomIcon name="person_outline" size={30} style={props.state.index === 4 ? icon.active : icon.inactive} />
                    <Text style={props.state.index === 4 ? icon.textActive : icon.textInactive}>Perfil</Text>
                </TabItem>
            </TouchableWithoutFeedback>
        </Tab>
    );
}

export default TabBar;
