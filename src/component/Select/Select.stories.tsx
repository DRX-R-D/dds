import React from 'react'
import { Meta, Story } from '@storybook/react'
import Component, { IProps } from '.'

export default {
  title: 'Component/UI/Form/Select',
  component: Component,
  decorators: [
    (Story) => (
      <Story />
    )
  ]
} as Meta

export const Select: Story<IProps> = (props) => <Component {...props} />
