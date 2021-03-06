import React from 'react';
import {TextInput} from 'react-native-paper';
import Theme from '../constants/Theme';
import NHSStyle from '../constants/NHSStyle';

const NHSInput = (props) => {
    return(
        <TextInput 
            style={[NHSStyle.input, props.style]}
            theme={{
                colors: {
                    primary: props.primaryColor ? props.primaryColor : Theme.color.teal,
                    background: Theme.color.background,
                    placeholder: Theme.color.grey1,
                    text: Theme.color.black,
                }
            }}
            {...props}
        />
    );
}

export default NHSInput;