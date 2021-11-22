import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0'
import Card, { IProps }  from './'
import { Sheet } from '../'

export default {
  title: 'Component/UI/Card',
  component: Card,
  decorators: [
    (Story) => (
      <Sheet width={400} color="transparent" className="ml-auto mr-auto">
        <Story />
      </Sheet>
    )
  ]
} as Meta

export const Default: Story<IProps> = () => (
  <Card>
    <Card.Title>
      Hello World
    </Card.Title>
    <Card.Content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusantium alias architecto aspernatur atque autem culpa ea
        expedita facere harum incidunt ipsum magnam minus odio, perferendis,
        praesentium reiciendis repellendus sequi voluptas?
      </p>
    </Card.Content>
  </Card>
)

export const Border: Story<IProps> = () => (
  <Card border>
    <Card.Title>
      Hello World
    </Card.Title>
    <Card.Content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusantium alias architecto aspernatur atque autem culpa ea
        expedita facere harum incidunt ipsum magnam minus odio, perferendis,
        praesentium reiciendis repellendus sequi voluptas?
      </p>
    </Card.Content>
  </Card>
)

export const Color: Story<IProps> = () => (
  <Card color="#365599" dark>
    <Card.Title>
      Hello World
    </Card.Title>
    <Card.Content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusantium alias architecto aspernatur atque autem culpa ea
        expedita facere harum incidunt ipsum magnam minus odio, perferendis,
        praesentium reiciendis repellendus sequi voluptas?
      </p>
    </Card.Content>
  </Card>
)

export const Flat: Story<IProps> = () => (
  <Card color="#FFC743" dark flat>
    <Card.Title>
      Hello World
    </Card.Title>
    <Card.Content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusantium alias architecto aspernatur atque autem culpa ea
        expedita facere harum incidunt ipsum magnam minus odio, perferendis,
        praesentium reiciendis repellendus sequi voluptas?
      </p>
    </Card.Content>
  </Card>
)
