import React, { Component } from 'react';
import {
	StyleSheet, Text, View, Image, TextInput,
	TouchableOpacity, Dimensions, KeyboardAvoidingView, Platform,
	DatePickerAndroid, DatePickerIOS, Picker, ActionSheetIOS,
	Modal, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import COLORS from '../../constants/COLORS';

// BEGIN: CONSTANTS
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

// Get value from CONSTANTS
const WHITE_COLOR = COLORS.White;
const DARK_COLOR = '#45aaf2';
const LIGHTBLUE_COLOR = '#4a8bfc';

const BACKGROUND_IMAGE = require('../../resources/background-2.jpg');
const LOGO_IMAGE = require('../../resources/react-native-logo.png');
const MAIL_ICON = require('../../resources/icons/mail_icon.png');
const LOCK_ICON = require('../../resources/icons/lock_icon.png');
const PHONE_ICON = require('../../resources/icons/phone_icon.png');
const BIRTHDAY_ICON = require('../../resources/icons/gift_icon.png');
const GENDER_ICON = require('../../resources/icons/gender_icon.png');
const JOB_ICON = require('../../resources/icons/job_icon.png');

const SUBMIT_BUTTON_TEXT = 'REGISTER';

// END CONSTANTS COMPONENTS

const Error = (props) => {
	if (props.isInvalid === true) {
		return (
			<View style={{ alignItems: 'center' }}>
				<Text style={{ color: 'yellow' }}>{props.errorMessage}</Text>
			</View>
		);
	}
	return (
		<View></View>
	);
};

export default class RegisterScreenV2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			birthday: new Date(Date.now()),
			tempIOSDatePickerTime: null,
			pickerSelectedValue: {
				gender: '',
				job: ''
			},
			iOS: {
				datepickerVisible: false,
				jobPickerVisible: false,
				genderPickerVisible: false
			}
		}
		this.state.tempIOSDatePickerTime = this.state.birthday;
	}

	JOBS = ['Software Engineer', 'Teacher', 'Student'];
	GENDERS = ['Male', 'Female'];

	//COMPONENTS
	
	PlatformDatePicker = props => (
		<View style={styles.inputContainer}>
			<View style={styles.subInputContainer}>
				<Image source={props.icon} style={styles.inputIcon} />
				<Text style={styles.placeHolderText} onPress={this.openBirthdayDatePicker}>
					{this.formatAndroidBirthdayText()}
				</Text>
			</View>
			<View style={styles.inputBackground}></View>
			{
				Platform.OS == 'ios'
				&&
				<Modal
					transparent
					animationType={'slide'}
					visible={this.state.iOS.datepickerVisible}
					onRequestClose={() => { }}
				>
					<View style={styleSheet.iOSDatepicker.container}>
						<View style={styleSheet.iOSDatepicker.allButtonContainer}>
							<View style={styleSheet.iOSDatepicker.buttonContainer}>
								<Text style={styleSheet.iOSDatepicker.buttonText} onPress={this.closeIOSDatePicker} >
									Cancel
								</Text>
							</View>
							<View style={styleSheet.iOSDatepicker.buttonContainer}></View>
							<View style={{ ...styleSheet.iOSDatepicker.buttonContainer, alignItems: 'flex-end' }}>
								<Text style={styleSheet.iOSDatepicker.buttonText} onPress={this.submitIOSDatePicker} >
									Select
								</Text>
							</View>
						</View>
						<DatePickerIOS
							mode={'date'}
							date={this.state.tempIOSDatePickerTime}
							onDateChange={date => this.setState({ tempIOSDatePickerTime: date })}
						/>
					</View>
				</Modal>
			}
		</View>
	)

	PlatformPicker = (props) => (
		<View style={styles.inputContainer}>
			<View style={styles.subInputContainer}>
				<Image source={props.icon} style={styles.inputIcon} />
				{
					Platform.OS == 'ios'
					&&
					<Text style={styles.placeHolderText} onPress={this.openGenderActionSheetIOS.bind(this, props.data)}>
						{props.selectedValue}
					</Text>
					||
					<Picker
						style={{ flex: 1, color: WHITE_COLOR }}
						mode={'dropdown'}
						selectedValue={props.selectedValue}
						onValueChange={(pickerValue, pickerIndex) => this.onPickerValueChange(pickerValue, pickerIndex, props.data)}
						children={props.data.items.map((subItem, subIndex) => <Picker.Item key={subIndex} label={subItem} value={subItem} color={DARK_COLOR} />)}
					/>

				}
			</View>
			<View style={styles.inputBackground}></View>
		</View>
	)

	//END COMPONENTS

	openBirthdayDatePicker = e => {
		if (Platform.OS == 'ios') {
			this.setState({
				iOS: {
					...this.state.iOS,
					datepickerVisible: true
				}
			});
		} else {
			DatePickerAndroid.open({ mode: 'spinner', date: this.state.birthday })
				.then(result => {
					if (result.action != DatePickerAndroid.dismissedAction) {
						var birthday = new Date();
						birthday.setUTCDate(result.day);
						birthday.setUTCMonth(result.month);
						birthday.setUTCFullYear(result.year);
						this.setState({
							birthday
						});
					}
				})
				.catch(err => console.log(err));
		}
	}

	onPickerValueChange = (pickerValue, pickerIndex, item) => {
		if (pickerIndex != PICKER_HOLDER) {
			var stateModel = {};
			if (item.type == 'Gender') {
				stateModel = {
					selectedPickerItem: {
						job: this.state.selectedPickerItem.job,
						gender: pickerValue
					}
				}
			} else {
				stateModel = {
					selectedPickerItem: {
						gender: this.state.selectedPickerItem.gender,
						job: pickerValue
					}
				}
			}
			this.setState(stateModel);
		}
	}

	formatAndroidBirthdayText = () => {
		var birthday = this.state.birthday;
		return `${birthday.getUTCDate()}/${birthday.getUTCMonth() + 1}/${birthday.getUTCFullYear()}`;
	}

	closeIOSDatePicker = () => {
		this.setState({
			iOS: {
				...this.state.iOS,
				datepickerVisible: false
			}
		});
	}

	submitIOSDatePicker = () => {
		this.setState({
			birthday: this.state.tempIOSDatePickerTime,
			iOS: {
				...this.state.iOS,
				datepickerVisible: false
			}
		});
	}

	openGenderActionSheetIOS = (params) => {
		var options = [...params.items];
		options.push('Cancel');

		ActionSheetIOS.showActionSheetWithOptions({
			title: params.title,
			message: params.message,
			options,
			cancelButtonIndex: options.length - 1
		}, buttonIndex => {
			if (buttonIndex != options.length - 1) {
				var stateModel = {
					pickerSelectedValue: this.state.pickerSelectedValue
				};
				stateModel.pickerSelectedValue[params.type.toLowerCase()] = options[buttonIndex];
				this.setState(stateModel);
			}
		});
	}

	render() {
		return (
			<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.container}>
				{/* BACKGROUND */}
				<Image source={BACKGROUND_IMAGE} resizeMode='stretch' style={styles.backgroundImage} />
				<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

					{/* LOGIN COMPONENTS */}
					<View style={styles.loginContainer}>
						{/* LOGO IMAGE */}
						<Image source={LOGO_IMAGE} style={styles.logoImage} />

						{/* EMAIL INPUT */}

						<View style={styles.inputContainer}>
							<View style={styles.subInputContainer}>
								<Image source={MAIL_ICON} style={styles.inputIcon} />
								<TextInput
									autoFocus={false}
									autoCorrect={false}
									autoCapitalize={'none'}
									style={styles.inputText}
									placeholder={'Email'}
									keyboardType={'email-address'}
									underlineColorAndroid={'transparent'}
									placeholderTextColor={WHITE_COLOR}
								/>
							</View>
							<View style={styles.inputBackground}></View>
						</View>

						{/* PASSWORD INPUT */}
						<View style={styles.inputContainer}>
							<View style={styles.subInputContainer}>
								<Image source={LOCK_ICON} style={styles.inputIcon} />
								<TextInput
									autoFocus={false}
									autoCorrect={false}
									autoCapitalize={'none'}
									secureTextEntry={true}
									style={styles.inputText}
									placeholder={'Password'}
									keyboardType={'default'}
									underlineColorAndroid={'transparent'}
									placeholderTextColor={WHITE_COLOR}
								/>
							</View>
							<View style={styles.inputBackground}></View>
						</View>


						{/* PHONE INPUT */}
						<View style={styles.inputContainer}>
							<View style={styles.subInputContainer}>
								<Image source={PHONE_ICON} style={styles.inputIcon} />
								<TextInput
									autoFocus={false}
									autoCorrect={false}
									autoCapitalize={'none'}
									style={styles.inputText}
									placeholder={'Phone'}
									keyboardType={'phone-pad'}
									underlineColorAndroid={'transparent'}
									placeholderTextColor={WHITE_COLOR}
								/>
							</View>
							<View style={styles.inputBackground}></View>
						</View>

						{/* BIRTHDAY DATE PICKER */}
						<this.PlatformDatePicker icon={BIRTHDAY_ICON} />

						{/* GENDER PICKER */}
						<this.PlatformPicker
							selectedValue={this.state.pickerSelectedValue.gender == '' ? '-- Please select a gender' : this.state.pickerSelectedValue.gender}
							icon={GENDER_ICON}
							data={{ title: 'Gender', message: 'Please select a gender', items: this.GENDERS }}
						/>

						{/* JOB PICKER */}
						<this.PlatformPicker
							selectedValue={this.state.pickerSelectedValue.job == '' ? '-- Please select a job' : this.state.pickerSelectedValue.job}
							icon={JOB_ICON}
							data={{ title: 'Job', message: 'Please select a job', items: this.JOBS }}
						/>

						{/* LOGIN BUTTON */}
						<TouchableOpacity
							activeOpacity={0.7}
							style={styles.submitButton}
							onPress={this.onPressLogin}>
							<Text style={styles.submitButtonText}>{SUBMIT_BUTTON_TEXT}</Text>
						</TouchableOpacity>
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	backgroundImage: {
		height: '100%',
		width: '100%'
	},
	loginContainer: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	logoImage: {
		width: 120,
		height: 120,
		borderRadius: 60,
		alignSelf: 'center',
		marginVertical: 15
	},
	inputContainer: {
		width: WINDOW_WIDTH / 10 * 9,
		height: 50,
		marginVertical: 10
	},
	subInputContainer: {
		zIndex: 1,
		width: '100%',
		height: '100%',
		paddingHorizontal: 20,
		flexDirection: 'row'
	},
	inputIcon: {
		width: 24,
		height: 24,
		tintColor: WHITE_COLOR,
		alignSelf: 'center',
		marginBottom: 5,
		marginRight: 12
	},

	inputBackground: {
		position: 'absolute',
		backgroundColor: WHITE_COLOR,
		opacity: 0.2,
		width: '100%',
		height: '100%',
		borderRadius: 12,
		zIndex: 0
	},

	inputText: {
		width: '100%',
		height: '100%',
		fontSize: 16,
		color: COLORS.White
	},
	submitButton: {
		backgroundColor: DARK_COLOR,
		alignItems: 'center',
		padding: 15,
		width: WINDOW_WIDTH / 10 * 9,
		borderRadius: 12,
		marginVertical: 10
	},
	submitButtonText: {
		fontSize: 16,
		color: WHITE_COLOR,
		fontWeight: 'bold'
	},
	placeHolderText: {
		color: WHITE_COLOR,
		alignSelf: 'center',
		paddingVertical: 10,
		width: '100%'
	}
});

const styleSheet = {
	iOSDatepicker: {
		container: {
			bottom: 0,
			height: 250,
			borderRadius: 5,
			alignSelf: 'center',
			position: 'absolute',
			backgroundColor: WHITE_COLOR,
			width: WINDOW_WIDTH / 10 * 9,
		},
		allButtonContainer: {
			flexDirection: 'row'
		},
		buttonContainer: {
			width: 100 / 3 + '%'
		},
		buttonText: {
			padding: 5,
			color: LIGHTBLUE_COLOR
		}
	}
}