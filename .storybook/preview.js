import { Style } from '~/component'

export const decorators = [
  Story => (
    <Style>
      <div className="fill width height">
        <Story />
      </div>
    </Style>
  ),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
