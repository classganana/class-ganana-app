import { useEffect, useRef, useState } from "react";
import { Text, View, StyleSheet, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from "react-native"


const ForgetPassword = (props) => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [otpSubmitted, setOtpSubmitted] = useState(false);

    const otpDigit1 = useRef();
    const otpDigit2 = useRef();
    const otpDigit3 = useRef();
    const otpDigit4 = useRef();

    useEffect(() => {
        console.log('hii');
    }, [])

    function submitEmail() {
        console.log(emailSubmitted);
        setEmailSubmitted(true);
    }

    function closeForget() {
        setEmailSubmitted(false);
        setOtpSubmitted(false);
        props.onCancle();
    }

    const EmailSubmissionView = () => {
        return (
            <View style={styles.container.body}>
                <Text style={styles.container.body.text}>
                    Username
                </Text>
                <TextInput style={styles.container.body.textInput} placeholderTextColor={'#D3D3D3'} placeholder={'YourSchool.com'} />
                <TouchableOpacity style={styles.container.resetButton} onPress={() => submitEmail()}>
                    <Text style={styles.container.resetButton.text}>
                        Reset Password
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    const OtpSubmissionView = () => {
        return (
            <View style={styles.container.body}>
                <Text style={styles.container.body.text}>
                    Enter OTP
                </Text>
                <View style={styles.container.otp}>
                    <TextInput ref={(otpDigit1)} selectionState={{ start: 1 }} onChangeText={(v) => {
                        if (v != '') otpDigit2.current.focus();
                    }} maxLength={1} keyboardType={"number-pad"} style={styles.container.otp.input} placeholder={"0"} placeholderTextColor={'#C9B1B1'} />

                    <TextInput ref={otpDigit2}
                        onKeyPress={({ nativeEvent }) => {
                            (nativeEvent.key === 'Backspace' && otpDigit2.current.value == '') ? otpDigit1.current.focus() : ''
                        }}
                        onChangeText={(v) => {
                            if (v != '') otpDigit3.current.focus();
                        }}
                        maxLength={1} keyboardType={"number-pad"} style={styles.container.otp.input} placeholder={"0"} placeholderTextColor={'#C9B1B1'} />
                    <TextInput ref={otpDigit3}
                        onKeyPress={({ nativeEvent }) => {
                            (nativeEvent.key === 'Backspace' && otpDigit3.current.value == '') ? otpDigit2.current.focus() : ''
                        }}
                        onChangeText={(v) => {
                            if (v != '') otpDigit4.current.focus();
                        }}
                        maxLength={1} keyboardType={"number-pad"} style={styles.container.otp.input} placeholder={"0"} placeholderTextColor={'#C9B1B1'} />
                    <TextInput ref={otpDigit4}
                        onKeyPress={({ nativeEvent }) => {
                            (nativeEvent.key === 'Backspace' && otpDigit4.current.value == '') ? otpDigit3.current.focus() : ''
                        }}
                        onChangeText={(v) => {
                            if (v != '') Keyboard.dismiss();
                            else otpDigit3.current.focus()
                        }}
                        maxLength={1} keyboardType={"number-pad"} style={styles.container.otp.input} placeholder={"0"} placeholderTextColor={'#C9B1B1'} />
                </View>
                <TouchableOpacity style={styles.container.otp.submitOtpButton} onPress={() => setOtpSubmitted(true)} >
                    <Text style={styles.container.otp.submitOtpButton.text}>
                        Verify
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    const NewPasswordSetup =() => {
        return (
            <View style={styles.container.body}>
                <TextInput style={styles.container.body.retypePassword} secureTextEntry={true} placeholderTextColor={'#D3D3D3'} placeholder={'Enter new password'} />
                <TextInput style={styles.container.body.retypePassword} secureTextEntry={true} placeholderTextColor={'#D3D3D3'} placeholder={'Retype new password'} />
                <TouchableOpacity style={styles.container.saveButton}>
                    <Text style={styles.container.saveButton.text}>
                        Save
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    const RenderingView = () => {
        if (!emailSubmitted) {
            return <EmailSubmissionView />;
        } else if (!otpSubmitted) {
            return <OtpSubmissionView />;
        } else return <NewPasswordSetup />
    }



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : ''}
            keyboardShouldPersistTaps="handled" style={styles.container}>
            <View style={styles.container.heading}>
                <Text style={styles.container.heading.text}>Forget Password</Text>
                <RenderingView />
                <Text style={styles.container.cancleButton} onPress={() => closeForget()}>
                    Cancle
                </Text>
            </View>
        </KeyboardAvoidingView>)
}

const styles = StyleSheet.create({
    container: {
        height: (Dimensions.get('window').height / 4) * 3,
        backgroundColor: '#EE5177',
        width: (Dimensions.get('window').width),
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        display: 'flex',
        heading: {
            // height: '20%',
            marginTop: 100,
            text: {
                fontSize: 44,
                color: 'white',
                textAlign: 'center',
            }
        },
        body: {
            paddingLeft: '15%',
            paddingRight: '15%',
            marginTop: '5%',
            display: 'flex',
            text: {
                fontSize: 20,
                fontWeight: '400',
                color: 'white'
            },
            textInput: {
                outline: 'none',
                marginTop: 10,
                // opacity: '0.5',
                fontSize: 25,
                fontWeight: '700',
                color: 'white'
            },
            retypePassword: {
                outline: 'none',
                marginTop: 15,
                // opacity: '0.5',
                fontSize: 25,
                fontWeight: '700',
                color: 'white'                
            }
        },
        resetButton: {
            borderRadius: 20,
            marginTop: 40,
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: 'white',
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            height: 35,
            text: {
                zIndex: 100,
                fontSize: 20,
                color: 'red',
                fontWeight: '500'
            }
        },
        saveButton: {
            borderRadius: 20,
            marginTop: 40,
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: 'white',
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            height: 35,
            text: {
                zIndex: 100,
                fontSize: 20,
                color: 'red',
                fontWeight: '500'
            }
        },
        otp: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 10,
            submitOtpButton: {
                borderRadius: 20,
                marginTop: 40,
                marginLeft: 'auto',
                marginRight: 'auto',
                backgroundColor: 'white',
                width: '90%',
                justifyContent: 'center',
                alignItems: 'center',
                height: 35,
                text: {
                    zIndex: 100,
                    fontSize: 20,
                    color: 'red',
                    fontWeight: '500'
                }
            },
            input: {
                width: 36,
                height: 40,
                backgroundColor: 'white',
                fontSize: 18,
                padding: 12,
                outline: 'none',
            }
        },
        cancleButton: {
            color: 'white',
            // display: 'block',
            textAlign: 'center',
            padding: 8,
            fontSize: 20,
            fontWeight: '700'
        }
    }

});

export default ForgetPassword;