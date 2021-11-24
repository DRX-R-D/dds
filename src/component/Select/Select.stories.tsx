import React from 'react'
import { Meta, Story } from '@storybook/react'
import Select, { IProps } from '.'
import { Sheet } from '~/component'

export default {
  title: 'Component/UI/Form/Select',
  component: Select,
  decorators: [
    (Story) => (
      <Sheet width={500} height={500} className="pa-5">
        <Story />
      </Sheet>
    )
  ]
} as Meta

export const Default: Story<IProps> = () => (
  <Select data={['foo', 'bar', 'hello', 'world']} />
)

export const DefaultValue: Story<IProps> = () => (
  <Select value="foo" data={['foo', 'bar', 'hello', 'world']} />
)
