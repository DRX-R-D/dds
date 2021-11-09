import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Component, { IProps } from '.'
import { Divider, Avatar, Sheet, Image } from '../'

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

const BadgeImage = () => <Image src="https://drx-image.s3.ap-northeast-2.amazonaws.com/lane/TOP.png" />
export const Badge: Story<IProps> = () => (
  <>
    <Sheet color="#fff" width={800} className="pa-5">
      <h3 className="mb-3">Default</h3>
      <div className="d-flex jc-space-around">
        <div>
          <Component content={<BadgeImage />} right top>
            <Avatar src="https://cdn.pixabay.com/photo/2014/09/19/21/47/chihuahua-453063_960_720.jpg" />
          </Component>
          <h5 className="text--center mt-2">Right Top</h5>
        </div>
        <div>
          <Component content={<BadgeImage />} right bottom>
            <Avatar src="https://cdn.pixabay.com/photo/2014/09/19/21/47/chihuahua-453063_960_720.jpg" />
          </Component>
          <h5 className="text--center mt-2">Right Bottom</h5>
        </div>
        <div>
          <Component content={<BadgeImage />} left bottom>
            <Avatar src="https://cdn.pixabay.com/photo/2014/09/19/21/47/chihuahua-453063_960_720.jpg" />
          </Component>
          <h5 className="text--center mt-2">Left Bottom</h5>
        </div>
        <div>
          <Component content={<BadgeImage />} left top>
            <Avatar src="https://cdn.pixabay.com/photo/2014/09/19/21/47/chihuahua-453063_960_720.jpg" />
          </Component>
          <h5 className="text--center mt-2">Left Top</h5>
        </div>
      </div>
    </Sheet>
  </>
)
