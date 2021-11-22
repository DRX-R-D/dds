import React, { useState, useEffect } from 'react'
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

const tableHeader = [
  { name: '프로필', key: 'profile' },
  { name: '팀', key: 'team' },
  { name: '현재 LP', key: 'currentLP' },
  { name: '최고 LP', key: 'topLP' },
  { name: '포지션', key: 'position' },
  { name: '주 챔피언', key: 'champions' },
  { name: '라인전 압도율', key: 'laneWinRate' },
  { name: '승률', key: 'winRate' },
  { name: 'GD@15', key: 'gd' },
  { name: 'CSD@15', key: 'csd' },
  { name: 'XPD@15', key: 'xpd' },
]
const tableData = [
  {
    profile: (
      <div className="d-flex">
        <Avatar src="" size={50} />
        <div>
          <p>송현민</p>
          <p>12344</p>
        </div>
      </div>
    ),
    team: 'DRXB',
    currentLP: '161점',
    topLP: '23',
    position: (
      <Avatar src="https://drx-image.s3.ap-northeast-2.amazonaws.com/lane/TOP.png" size={40} tile />
    ),
    champions: (
      <div className="d-flex">
        <Avatar className="mr-2" src="" size={30} />
        <Avatar className="mr-2" src="" size={30} />
        <Avatar src="" size={30} />
      </div>
    ),
    laneWinRate: '+ 113.1',
    winRate: '- 23.1',
    gd: '+ 151.2',
    csd: '123',
    xpd: '123',
  },
  {
    profile: (
      <div className="d-flex">
        <Avatar src="" size={50} />
        <div>
          <p>송현민</p>
          <p>clear77</p>
        </div>
      </div>
    ),
    team: 'CN',
    currentLP: '161점',
    topLP: '236',
    position: (
      <Avatar src="https://drx-image.s3.ap-northeast-2.amazonaws.com/lane/TOP.png" size={40} tile />
    ),
    champions: (
      <div className="d-flex">
        <Avatar className="mr-2" src="" size={30} />
        <Avatar className="mr-2" src="" size={30} />
        <Avatar className="mr-2" src="" size={30} />
        <Avatar src="" size={30} />
      </div>
    ),
    laneWinRate: '+ 113.1',
    winRate: '- 23.1',
    gd: '+ 151.2',
    csd: '12',
    xpd: '123',
  },
  {
    profile: (
      <div className="d-flex">
        <Avatar src="" size={50} />
        <div>
          <p>송현민</p>
          <p>cleㄹㄹㅁㅈㄷar77</p>
        </div>
      </div>
    ),
    team: 'DRXA',
    currentLP: '161점',
    topLP: '236',
    position: (
      <Avatar src="https://drx-image.s3.ap-northeast-2.amazonaws.com/lane/TOP.png" size={40} tile />
    ),
    champions: (
      <div className="d-flex">
        <Avatar className="mr-2" src="" size={30} />
        <Avatar className="mr-2" src="" size={30} />
        <Avatar className="mr-2" src="" size={30} />
        <Avatar className="mr-2" src="" size={30} />
        <Avatar src="" size={30} />
      </div>
    ),
    laneWinRate: '+ 113.1',
    winRate: '- 23.1',
    gd: '+ 151.2',
    csd: '123',
    xpd: '123',
  },
  {
    profile: (
      <div className="d-flex">
        <Avatar src="" size={50} />
        <div>
          <p>송현민</p>
          <p>clear77</p>
        </div>
      </div>
    ),
    team: 'CN',
    currentLP: '161점',
    topLP: '236',
    position: (
      <Avatar src="https://drx-image.s3.ap-northeast-2.amazonaws.com/lane/TOP.png" size={40} tile />
    ),
    champions: (
      <div className="d-flex">
        <Avatar className="mr-2" src="" size={30} />
        <Avatar src="" size={30} />
      </div>
    ),
    laneWinRate: '+ 113.1',
    winRate: '- 23.1',
    gd: '+ 151.2',
    csd: '123',
    xpd: '13',
  },
]
const Default: Story<IProps> = (args) => (
  <Component {...args} />
)

const Template: Story<IProps> = () => {
  const [list, setList] = useState<any[]>([])

  useEffect(() => {
    setTimeout(() => {
      setList([...tableData, ...tableData, ...tableData])
    }, 3000)
  }, [])

  return (
    <>
      <Sheet width={500} className="pa-5 mt-5">
        <h3 className="mb-3">Default</h3>
        <Default
          headers={tableHeader}
          data={tableData}
        />
      </Sheet>
      <Sheet className="pa-5 mt-5 d-flex dir-column" width={500} height={500}>
        <h3 className="mb-3">비동기</h3>
        <Default
          className="flex-1"
          headers={tableHeader}
          data={list}
        />
      </Sheet>
    </>
  )
}

export const Table = Template.bind({})
