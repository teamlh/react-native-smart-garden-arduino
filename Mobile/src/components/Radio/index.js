import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Radio = ({ onChange, defaultSelected, labels, values, itemStyle, labelStyle }) => {
    const [selected, setSelected] = useState(defaultSelected)
    const _onChangeSelection = (value) => {
        if (value === selected) return;
        if (onChange) onChange(value)
        setSelected(value)
    }
    if (labels.length < values.length) return null
    return (
        <View style={styles.container}>
            {values.map((value, index) => (
                <TouchableOpacity
                    onPress={_onChangeSelection.bind(null, value)}
                    activeOpacity={1}
                    key={index} style={[styles.item, itemStyle]}>
                    <Text style={[{
                        fontSize: 16
                    }, labelStyle]}>{labels[index]}</Text>
                    <View style={styles.circle}>
                        {value === selected &&
                            <View style={{ width: '100%', height: '100%' }}>
                                <View style={styles.blueBorder}>

                                </View>
                                <View style={styles.whitePoint}>

                                </View>
                            </View>
                        }
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default Radio

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 44,
        paddingHorizontal: 15,
        width: '100%'
    },
    circle: {
        overflow: 'hidden',
        height: 24,
        width: 24,
        borderRadius: 24,
        borderColor: '#ddd',
        borderWidth: 1
    },
    blueBorder: {
        position: 'absolute',
        left: 0,
        zIndex: -1,
        top: 0,
        borderRadius: 999,
        height: '100%',
        width: '100%',
        backgroundColor: '#318bfb'
    },
    whitePoint: {
        position: 'absolute',
        left: (24 - 2 - 10) / 2,
        zIndex: 1,
        top: (24 - 2 - 10) / 2,
        borderRadius: 999,
        height: 10,
        width: 10,
        backgroundColor: '#fff'
    }
})
