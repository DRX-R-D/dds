import React from 'react'
import { Meta, Story } from '@storybook/react'
import Component, { IProps } from '.'
import { Divider, Sheet } from '../'

export default {
  title: 'Component/UI/Form/Input',
  component: Component,
  decorators: [
    (Story) => (
      <>
        <h1>Form / Input</h1>
        <Divider className="mb-5 mt-5" />
        <Story />
      </>
    )
  ],
  args: {
    placeholder: 'Placeholder'
  }
} as Meta

export const Input: Story<IProps> = (args) => (
  <>
    <Sheet width={500} className="pa-5 mt-5" color="#fff">
      <h3 className="mb-3">Default</h3>
      <Component {...args} />
    </Sheet>
    <Sheet width={500} className="pa-5 mt-5" color="#fff">
      <h3 className="mb-3">Flat</h3>
      <Component {...args} flat />
    </Sheet>
  </>
)
