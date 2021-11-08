import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0'

import Component  from './';

export default {
  title: 'Component/UI/Button',
  component: Component,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as Meta

const Default: Story<any> = (args) => (
  <Component {...args}>
    Click
  </Component>
)
const Template: Story<any> = () => {
  return (
    <>
      <div className="mb-5">
        <Default />
        <Default className="ml-3" small />
      </div>
      <div>
        <Default rounded />
        <Default className="ml-3" rounded small />
      </div>
    </>
  )
}

export const Button = Template.bind({})
