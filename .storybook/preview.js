import { Style } from '~/component'

export const decorators = [
  Story => (
    <Style>
      <div className="fill width height pb-5">
        <Story />
      </div>
    </Style>
  ),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
