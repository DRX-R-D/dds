import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0'
import Component, { IProps }  from './'

export default {
  title: 'Component/UI/Card',
  component: Component,
  decorators: [
    (Story) => (
      <Story />
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
      <div>
        <Default />
      </div>
      <div>
        <Default border />
      </div>
      {/*<h2>Default</h2>*/}
      {/*<Sheet width={400} className="mt-2 mb-5">*/}
      {/*  <h4>Only Content</h4>*/}
      {/*  <Default className="mt-2 mb-5" />*/}
      {/*  <h4>With Title</h4>*/}
      {/*  <Default title="Hello World" className="mt-2" />*/}
      {/*</Sheet>*/}
      {/*<h2>Border</h2>*/}
      {/*<Sheet width={400} className="mt-2 mb-5">*/}
      {/*  <Default border />*/}
      {/*</Sheet>*/}
      {/*<h2>Cover Image</h2>*/}
      {/*<Sheet width={400} className="mt-2 mb-5">*/}
      {/*  <Default cover="https://cdn.pixabay.com/photo/2017/08/01/00/44/laptop-2562361_1280.jpg" />*/}
      {/*</Sheet>*/}
    </>
  )
}

export const Card = Template.bind({})
