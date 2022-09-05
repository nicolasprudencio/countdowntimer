import { FormContainer, MinutesAmoutInput, TaskInput } from './styles'

import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { useContext } from 'react'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)

  const { register } = useFormContext()

  return (
    <FormContainer>
      <div>
        <label htmlFor="task">Vou trabalhar em:</label>
        <TaskInput
          list="task-suggestions"
          id="task"
          placeholder="De um nome para seu projeto"
          disabled={!!activeCycle}
          {...register('task')}
        />
        <datalist id="task-suggestions">
          <option value="p1"></option>
          <option value="p2"></option>
          <option value="p3"></option>
          <option value="p4"></option>
        </datalist>

        <label htmlFor="number">durante:</label>
        <MinutesAmoutInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
          min={5}
          max={60}
          disabled={!!activeCycle}
          {...register('minutesAmount', { valueAsNumber: true })}
        />

        <span>minutos.</span>
      </div>
    </FormContainer>
  )
}
