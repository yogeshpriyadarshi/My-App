import React,{useContext} from 'react'
import { AuthContext } from './App'

export default function About() {

const {state} =useContext(AuthContext)

  return (
    <div>About{state.name}</div>
  )
}