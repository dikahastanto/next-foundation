interface accessProps {
  label: string,
  value: string,
  index: string
}
const admin: accessProps = {
  label: 'example',
  value: '1',
  index: 'examplePageRole'
}

const all : accessProps[] = [
  admin
]

export {
  admin,
  all
}
export type { accessProps }

