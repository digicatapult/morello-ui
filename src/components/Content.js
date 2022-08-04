import React from 'react'
import { useNavigate } from 'react-router-dom'

import Card from './Card'
import { Container, Item, Wrapper } from './Common'
import Router from './Router'

function MainMenu(props) {
  const nav = useNavigate()

  return (
    <Container>
      {tmpScenarios.map((scenario, i) => 
        <Item size={2.5} onClick={(e) => {
          e.preventDefault()
          nav(`/demo/${i}`, { replace: true })
        }}>
          <Card {...scenario} />
        </Item>
      )}
    </Container>
  )
}

const tmpScenarios = [
  {
    path: '/demo/1',
    Element: () => <div>somee demo1 content</div>
  },
  {
    path: '/demo/2',
    Element: () => <div> somee demo2 conteent</div>
  },
  {
    path: '/demo/3',
    Element: () => <div>somee demo1 content</div>
  },
  {
    path: '/demo/4',
    Element: () => <div> somee demo2 conteent</div>
  },
  {
    path: '/demo/5',
    Element: () => <div>somee demo1 content</div>
  },
  {
    path: '/demo/6',
    Element: () => <div> somee demo2 conteent</div>
  },
  {
    path: '/demo/7',
    Element: () => <div>somee demo1 content</div>
  },
  {
    path: '/demo/8',
    Element: () => <div> somee demo2 conteent</div>
  },
]

export default function Content() {
  return <Wrapper height='90%'>
    <Router
      scenarios={[ 
        ...tmpScenarios,
        { path: '/', Element: () => <MainMenu /> }
      ]}
    />
  </Wrapper>
}
