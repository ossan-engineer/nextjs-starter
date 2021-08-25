import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Test from './Test'

export default {
  title: 'Test',
  component: Test,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Test>

const Template: ComponentStory<typeof Test> = (args) => <Test {...args} />

export const Normal = Template.bind({})
Normal.args = {}
