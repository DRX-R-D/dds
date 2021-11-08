import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Component, { IProps } from './index'

export default {
  title: 'Component/UI/Avatar',
  component: Component,
  decorators: [
    (Story) => (
      <Story />
    )
  ]
} as Meta

const Default: Story<IProps> = (args) => (
  <Component {...args} />
)

const Template: Story<IProps> = () => {
  return (
    <>
      <Default src="https://cdn.pixabay.com/photo/2014/09/19/21/47/chihuahua-453063_960_720.jpg" />
      <Default
        size={80}
        src="https://cdn.pixabay.com/photo/2014/09/19/21/47/chihuahua-453063_960_720.jpg"
      />
      <Default
        size={40}
        src="https://cdn.pixabay.com/photo/2014/09/19/21/47/chihuahua-453063_960_720.jpg"
      />
    </>
  )
}

export const Avatar = Template.bind({})
