import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

const Loader = ({visible = true}) => {
    return (
        visible && (
            <View>
            <ActivityIndicator size={"small"} color="white"/>
          </View>
      )
  )
}

export default Loader

const styles = StyleSheet.create({})