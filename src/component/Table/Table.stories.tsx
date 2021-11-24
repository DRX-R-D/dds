import React, { useState, useEffect } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Table, { IProps } from './'
import { Sheet, Avatar } from '../'

export default {
  title: 'Component/UI/Table',
  component: Table,
  decorators: [
    (Story) => (
      <Sheet className="pa-5">
        <Story />
      </Sheet>
    )
  ]
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
export const Default: Story<IProps> = () => (
  <Table
    headers={tableHeader}
    data={tableData}
  />
)

export const Lazy: Story<IProps> = () => {
  const [list, setList] = useState<any[]>([])

  useEffect(() => {
    setTimeout(() => {
      setList([...tableData, ...tableData, ...tableData])
    }, 3000)
  }, [])

  return (
    <Table
      className="flex-1"
      headers={tableHeader}
      data={list}
    />
  )
}

export const EventHandling: Story<IProps> = () => {
  const onHeadCellClick = () => {
    alert('onHeadCellClick')
  }
  const onBodyRowClick = () => {
    alert('onBodyRowClick')
  }

  return (
    <Table
      onHeadCellClick={onHeadCellClick}
      onBodyRowClick={onBodyRowClick}
      headers={tableHeader}
      data={tableData}
    />
  )
}
