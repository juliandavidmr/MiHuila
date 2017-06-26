import React from 'react';
import { ScrollView, StyleSheet, Text, Dimensions, TextInput } from 'react-native';
import { Constants, MapView } from 'expo';
import sites from '../api/getListSites';
import constants_api from '../constants/API'

export default class MapScreen extends React.Component {

	static navigationOptions = {
		title: 'Mapa'
	}

	state = {
		mapRegion: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
		text: "Texto"
	};

	componentWillMount() {
		sites(constants_api.all).then(data => {
			console.log('Data:', data);
			this.setState({
				text: JSON.stringify(data)
			})
		})
	}

	_handleMapRegionChange = mapRegion => {
		this.setState({ mapRegion });
	};

	_handleChangeTextSearch = text => {
		this.setState({text})
	}

	render() {
		let height_map = Dimensions.get(`window`).height * 0.8;
		return (
			<ScrollView style={styles.container}>
				<TextInput
					placeholder=""				
					style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					onChangeText={this._handleChangeTextSearch}
					value={this.state.text}
				/>
				<Text>Mapa {Dimensions.get(`window`).height + '-' + Dimensions.get(`window`).width}</Text>
				<MapView
					style={{ alignSelf: 'stretch', height: height_map }}
					region={this.state.mapRegion}
					onRegionChange={this._handleMapRegionChange}
				/>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
