import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

export const Appointment = ({ user, diagnosis, active, time }) => {
  return (
    <GroupItem>
      <Avatar
        source={{
          uri: user.avatar,
        }}
      />
      <View style={{ flex: 1 }}>
        <FullName>{user.fullname}</FullName>
        <GrayText>{diagnosis}</GrayText>
      </View>
      <GroupDate active={active}>{time}</GroupDate>
    </GroupItem>
  )
}

const GroupDate = styled.Text`
  background: ${(props) => (props.active ? '#2A86FF' : '#e9f5ff')};
  color: ${(props) => (props.active ? '#fff' : '#4294ff')};
  border-radius: 18px;
  width: 70px;
  height: 32px;
  font-family: 'sans-serif-medium';
  font-weight: 600;
  text-align: center;
  line-height: 28px;
`
const GrayText = styled.Text`
  font-size: 16px;
  color: #8b979f;
`
const FullName = styled.Text`
  font-family: 'sans-serif-medium';
  font-weight: 600;
  font-size: 16px;
`
const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`
