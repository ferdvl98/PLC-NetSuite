import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

// Esto es un comentario

const users = [
  {
    userName: 'Ferdvl98',
    name: 'Fernando Dávila',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel Ángel Duran',
    isFollowing: false
  },
  {
    userName: 'aridvla',
    name: 'Ariana Dávila',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map( user => {
          const {userName, name, isFollowing} = user
          return (
            <TwitterFollowCard
              key={userName} // Preferentemente usar id de una BBDD
              userName={userName} 
              initialIsFollowing={isFollowing}
            >
            {name}
            </TwitterFollowCard>
          )
        })
      }
      
    </section>
  )
}