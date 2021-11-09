import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0'
import Component, { IProps }  from './'
import { Divider, Sheet } from '../'

export default {
  title: 'Component/UI/Card',
  component: Component,
  decorators: [
    (Story) => (
      <>
        <h1>Card</h1>
        <Divider className="mb-5 mt-5" />
        <Story />
      </>
    )
  ],
} as Meta

const Default: Story<IProps> = (args) => (
  <Component {...args}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Accusantium alias architecto aspernatur atque autem culpa ea
      expedita facere harum incidunt ipsum magnam minus odio, perferendis,
      praesentium reiciendis repellendus sequi voluptas?
    </p>
  </Component>
)
const Template: Story<IProps> = () => {
  return (
    <>
      {['Default', 'Border'].map((type) => (
        <Sheet width={500} className="pa-5 mt-5" color="#fff">
          <h3 className="mb-3">{type}</h3>
          <Default border={type === 'Border'} />
        </Sheet>
      ))}
    </>
  )
}

export const Card = Template.bind({})
