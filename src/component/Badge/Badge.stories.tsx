import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Component, { IProps } from '.'
import { Divider, Avatar, Sheet } from '../'

export default {
  title: 'Component/UI/Badge',
  component: Component,
  decorators: [
    (Story) => (
      <>
        <h1>Badge</h1>
        <Divider className="mb-5 mt-5" />
        <Story />
      </>
    )
  ]
} as Meta

export const Badge: Story<IProps> = (args) => (
  <>
    <Sheet color="#fff" width={500} className="pa-5">
      <h3 className="mb-3">Default</h3>
      <div className="d-flex">
        <Component
          content={<>1</>}
          {...args}
        >
          <Avatar src="https://cdn.pixabay.com/photo/2014/09/19/21/47/chihuahua-453063_960_720.jpg" />
        </Component>
      </div>
    </Sheet>
  </>
)
