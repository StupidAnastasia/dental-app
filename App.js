import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SectionList } from 'react-native'
import styled from 'styled-components/native'
import { Appointment } from './components/Appointment'
import SectionTitle from './components/SectionTitle'
import { Ionicons } from '@expo/vector-icons'

const DATA = [
  {
    title: '14 сентября',
    data: [
      {
        time: '17:30',
        diagnosis: 'пульпит',
        active: true,
        user: {
          fullname: 'Петя Д',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU',
        },
      },
      {
        time: '18:30',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Петя Д',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU',
        },
      },
      {
        time: '19:00',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Петя Д',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU',
        },
      },
      {
        time: '19:30',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Анжела Д',
          avatar:
            'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg',
        },
      },
      {
        time: '20:00',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Петя Д',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU',
        },
      },
    ],
  },
  {
    title: '16 сентября',
    data: [
      {
        time: '16:30',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Анжела Д',
          avatar:
            'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg',
        },
      },
      {
        time: '17:00',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Петя Д',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU',
        },
      },
      {
        time: '17:30',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Петя Д',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU',
        },
      },
    ],
  },
]
export default function App() {
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Appointment {...item} />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
      <PlusButton>
        <Ionicons name="ios-add" size={36} color="white" />
      </PlusButton>
    </Container>
  )
}

const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2a86ff;
  position: absolute;
  right: 25px;
  bottom: 25px;
  shadow-color: #2a86ff;
  shadow-opacity: 0.7;
  elevation: 4;
  shadow-radius: 3.5;
`
const Container = styled.View`
  flex: 1;
  margin-top: 30px;
`
