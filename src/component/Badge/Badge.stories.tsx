import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Component, { IProps } from '.'
import { Divider, Avatar } from '../'

export default {
  title: 'Component/UI/Badge',
  component: Component,
  decorators: [
    (Story) => (
      <>
        <h1>Badge</h1>
        <Divider />
        <Story />
      </>
    )
  ]
} as Meta

const Default: Story<IProps> = (args) => (
  <Component
    {...args}
    content={<>1</>}
  >
    <Avatar src="https://cdn.pixabay.com/photo/2014/09/19/21/47/chihuahua-453063_960_720.jpg" />
  </Component>
)

export const Badge: Story<IProps> = (args) => <Default {...args} />
