import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0'
import Component, { IProps } from './'
import { Divider, Sheet } from '../'

export default {
  title: 'Component/UI/Button',
  component: Component,
  decorators: [
    (Story) => (
      <>
        <h1>Button</h1>
        <Divider className="mb-5 mt-5" />
        <Story />
      </>
    )
  ],
} as Meta

const Default: Story<IProps> = (args) => (
  <Component {...args}>
    Click
  </Component>
)
const Template: Story<IProps> = () => {
  return (
    <>
      {['Default', 'Rounded'].map((type) => (
        <Sheet width={500} className="pa-5 mt-5" color="#fff">
          <h3 className="mb-3">{type}</h3>
          <div className="d-flex ai-end jc-space-around">
            <div>
              <Default rounded={type === 'Rounded'} />
              <h5 className="text--center mt-2">Default Size</h5>
            </div>
            <div>
              <Default rounded={type === 'Rounded'} small />
              <h5 className="text--center mt-2">Small Size</h5>
            </div>
          </div>
        </Sheet>
      ))}
    </>
  )
}

export const Button = Template.bind({})
