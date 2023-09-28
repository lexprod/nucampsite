import { FlatList, Text, View } from "react-native";
import { Tile } from "react-native-elements";
import { useSelector } from "react-redux";
import { baseUrl } from '../shared/baseUrl'
import Loading from "../components/loadingComponent";
import * as Animatable from 'react-native-animatable';

const DirectoryScreen = ({ navigation }) => {
    const campsites = useSelector((state) => state.campsites)

    if (campsites.isLoading) {
        return <Loading />
    }

    if (campsites.errMess) {
        <View>
            <Text>{campsites.errMess}</Text>
        </View>
    }

    const renderDirectoryItem = ({ item: campsite }) => {
        return (
            <Animatable.View
                animation='fadeInRightBig'
                duration={2000}
                delay={0}
            >
                <Tile
                    title={campsite.name}
                    caption={campsite.description}
                    featured
                    onPress={() => navigation.navigate('CampsiteInfo', { campsite })}
                    imageSrc={{ uri: baseUrl + campsite.image }}
                />
            </Animatable.View>
        )
    }

    return (
        <Animatable.View
            animation='fadeInRightBig'
            duration={2000}
            delay={0}
        >
            <FlatList
                data={campsites.campsitesArray}
                renderItem={renderDirectoryItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </Animatable.View>
    )
}


export default DirectoryScreen;