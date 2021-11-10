import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Component, { IProps } from './'
import { Divider, Sheet, Avatar } from '../'

export default {
  title: 'Component/UI/Table',
  component: Component,
  decorators: [
    (Story) => (
      <>
        <h1>Table</h1>
        <Divider className="mb-5 mt-5" />
        <Story />
      </>
    )
  ],
  args: {
    headers: [
      { name: '챔피언', key: 'champion' },
      { name: '게임 수', key: 'game' },
      { name: '승', key: 'win' },
      { name: '패', key: 'lose' },
      { name: 'KDA', key: 'kda' },
      { name: '솔로킬', key: 'soloKill' },
      { name: '라인전 솔로킬', key: 'laneKill' },
      { name: '라인전 골드 차이', key: 'goldDiff' },
      { name: '라인전 CS 차이', key: 'csDiff' },
      { name: '라인전 JCS 차이', key: 'jcsDiff' },
      { name: '라인전 XP 차이', key: 'xpDiff' },
    ],
    data: [
      {
        champion: (
          <Avatar className="ml-auto mr-auto" size={50} src="" />
        ),
        game: 16,
        win: 13,
        lose: 3,
        kda: 3.50,
        soloKill: 0.3,
        laneKill: 1.6,
        goldDiff: 924.2,
        csDiff: 14.5,
        jcsDiff: 0.5,
        xpDiff: 364.9,
      },
      {
        champion: (
          <Avatar className="ml-auto mr-auto" size={50} src="" />
        ),
        game: 5,
        win: 2,
        lose: 3,
        kda: 1.88,
        soloKill: 0.2,
        laneKill: 0.4,
        goldDiff: 131,
        csDiff: 10.5,
        jcsDiff: 1.9,
        xpDiff: 337,
      },
    ]
  }
} as Meta

const Default: Story<IProps> = (args) => (
  <Component {...args} />
)

const Template: Story<IProps> = (args) => {
  return (
    <>
      <Sheet className="pa-5 mt-5" color="#fff">
        <h3 className="mb-3">Default</h3>
        <Default {...args} />
      </Sheet>
    </>
  )
}

export const Table = Template.bind({})
