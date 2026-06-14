import { Select } from '@chakra-ui/react'

export const STATUS = ['Prospek', 'Deal', 'Rejected']
export const STATUS_COLOR = { Prospek: 'orange', Deal: 'green', Rejected: 'red' }

export default function StatusSelect({ value, onChange, size = 'sm' }) {
  const color = STATUS_COLOR[value] || 'gray'
  return (
    <Select
      size={size}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      w="130px"
      borderColor={`${color}.300`}
      color={`${color}.700`}
      fontWeight="600"
      bg={`${color}.50`}
      onClick={(e) => e.stopPropagation()}
    >
      {STATUS.map((s) => <option key={s} value={s}>{s}</option>)}
    </Select>
  )
}
