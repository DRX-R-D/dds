import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Component, { IProps } from './index'
import { Divider, Sheet } from '../'

export default {
  title: 'Component/UI/Avatar',
  component: Component,
  decorators: [
    (Story) => (
      <>
        <h1>Badge</h1>
        <Divider className="mb-5 mt-5" />
        <Story />
      </>
    )
  ],
  args: {
    src: 'https://cdn.pixabay.com/photo/2014/09/19/21/47/chihuahua-453063_960_720.jpg'
  }
} as Meta

const Default: Story<IProps> = (args) => (
  <Component {...args} />
)

const Template: Story<IProps> = (args) => {
  return (
    <>
      {['Default', 'Tile'].map((type) => (
        <Sheet width={500} className="pa-5 mt-5" color="#fff">
          <h3 className="mb-3">{type}</h3>
          <div className="d-flex ai-end jc-space-around">
            <div>
              <Default tile={type === 'Tile'} className="mb-2" {...args} />
              <h5 className="text--center">110px (Default Size)</h5>
            </div>
            <div>
              <Default tile={type === 'Tile'} className="mb-2" size={80} {...args} />
              <h5 className="text--center">80px</h5>
            </div>
            <div>
              <Default tile={type === 'Tile'} className="mb-2" size={40} {...args} />
              <h5 className="text--center">40px</h5>
            </div>
          </div>
        </Sheet>
      ))}
    </>
  )
}

export const Avatar = Template.bind({})
