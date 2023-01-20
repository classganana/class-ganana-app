import { useState } from "react";
import { Text, View, Image, StyleSheet, Button, TouchableOpacity } from "react-native";
import { COLORS } from '../../styles/color.js';
const FirstScreen = () => {
    const [screen, setScreen] = useState(0)


    const screenData = [
        { text: 'Let’s get the rid of Attendance Register', backgroundColor: COLORS.firstIntroScreen, svg: require('../../assets/screen0.png')},
        { text: 'Digital Report Card Creation in few seconds', backgroundColor: COLORS.secondIntroScreen, svg: require('../../assets/screen1.png') },
        { text: 'Get instant feedback for your child', backgroundColor: COLORS.thirdIntroScreen, svg: require('../../assets/screen2.png') },
    ]

    function nextScreen() {
        if(screen ==2 ) setScreen((screenNo) => 0);
        else setScreen((screenNo) => screenNo + 1);
    }

    const Screen1 = () => {
        return (
            <View style={[styles.screen1, {backgroundColor : screenData[screen].backgroundColor}]}>
                <Text style={styles.introScreenText}>
                    {screenData[screen].text}
                </Text>
                <Image style={styles.screen1.image} source={require('../../assets/screen0.png')} ></Image>
                <TouchableOpacity style={styles.nextButton} onPress={() => nextScreen()}>
                    <Image style={styles.screen1.nextimage} source={require('../../assets/next.png')} ></Image>
                </TouchableOpacity>
            </View>        
        )
    }

    const Screen2 = () => {
        return (
            <View style={[styles.screen1, {backgroundColor : COLORS.secondIntroScreen}]}>
                <Text style={styles.introScreenText}>
                    {screenData[screen].text}
                </Text>
                <Image style={styles.screen1.image} source={require('../../assets/screen1.png')} ></Image>
                <TouchableOpacity style={styles.nextButton} onPress={() => nextScreen()}>
                    <Image style={styles.screen1.nextimage} source={require('../../assets/next.png')} ></Image>
                </TouchableOpacity>
            </View>        
        )
    }

    const Screen3 = () => {
        return (
            <View style={[styles.screen1, {backgroundColor : COLORS.thirdIntroScreen}]}>
                <Text style={styles.introScreenText}>
                    {screenData[screen].text}
                </Text>
                <Image style={styles.screen1.image} source={require('../../assets/screen2.png')} ></Image>
                <TouchableOpacity style={styles.nextButton} onPress={() => nextScreen()}>
                    <Image style={styles.screen1.nextimage} source={require('../../assets/next.png')} ></Image>
                </TouchableOpacity>
            </View>        
        )
    }

    const renderingView =() => {
        switch(screen) {
            case 0:
                return Screen1();
            case 1:
                return Screen2();
            case 2:
                return Screen3();
        }
    }


    return (<>
        <View style={styles.screen}>
            { renderingView() }
        </View>
    </>)
}

export default FirstScreen;

const styles = StyleSheet.create({
    screen: {
        position: 'relative',
        flex: 1,
        backgroundColor: COLORS.firstIntroScreen,
        justifyContent: 'center',
        width: '100%',
        image: {
            width: '50%',
            height: '50%',
        }
    },
    introScreenText: {
        fontWeight: '700',
        fontSize: 48
    },
    screen1: {
        position: 'relative',
        flex: 1,
        backgroundColor: COLORS.firstIntroScreen,
        justifyContent: 'center',
        width: '100%',
        paddingLeft: 28,
        paddingRight: 28,
        paddingTop: '10%',
        image: {
            marginLeft: 'auto',
            marginRight: 'auto',
            resizeMode: 'contain',
            height: '60%',
            width: '100%',
        },
        nextimage: {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '60%',
            height: '60%',
        }
    },
    nextButton: {
        position: 'absolute',
        backgroundColor: 'white',
        height: 70,
        width: 70,
        borderRadius: 50,
        color: 'white',
        bottom: '6%',
        right: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})