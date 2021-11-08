import { Style } from '~/component'

export const decorators = [
  Story => (
    <Style>
      <Story />
    </Style>
  ),
]

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: "^on[A-Z].*" },
}
