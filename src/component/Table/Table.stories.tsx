import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Component, { IProps } from './'
import { Sheet } from '../'

export default {
  title: 'Component/UI/Table',
  component: Component,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as Meta

const Default: Story<IProps> = (args) => (
  <Component {...args} />
)

const Template: Story<IProps> = () => {
  return (
    <>
      <Sheet className="pa-5" color="#FAFAFA">
        <Default />
      </Sheet>
    </>
  )
}

export const Table = Template.bind({})
