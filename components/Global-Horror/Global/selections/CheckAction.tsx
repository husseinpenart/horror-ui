import { StyleSheet, View } from "react-native"; 
import { useState } from "react"; 
import CheckBox from "./CheckBox"; 

export default function CheckAction() { 
	const [music, setMusic] = useState(false); 
	const [dancing, setDancing] = useState(false); 
	const [reading, setReading] = useState(false); 

	return ( 
		<View style={styles.container}> 
			<CheckBox 
				onPress={() => setMusic(!music)} 
				title="Music"
				isChecked={music} 
                size={30}
                color="red"
			/> 
			<CheckBox 
				onPress={() => setDancing(!dancing)} 
				title="Dancing"
				isChecked={dancing} 
			/> 
			<CheckBox 
				onPress={() => setReading(!reading)} 
				title="Reading"
				isChecked={reading} 
			/> 
		</View> 
	); 
	} 

const styles = StyleSheet.create({ 
	container: { 
		flex: 1, 
		backgroundColor: "#fff", 
		justifyContent: "center", 
		alignItems: "center", 
	}, 
}); 
