import React, {useState} from 'react'
import TextField from '@mui/material/TextField'
import SomDatePicker from '@somenergia/somenergia-ui/SomDatePicker'
import dayjs from 'dayjs'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Grid'

const webAppsHouses = [
    'Gil',
    'Marta',
    'Joana',
    'Bea',
    'Javi',
    'Marité',
    'Voki',
]

const Activity = (props) => {
    const { values, handleChange, setFieldValue } = props
    const [house, setHouse] = useState('')
    const [calendarDay, setCalendarDay] = useState(dayjs().startOf('day'))

    const selectHandleChange = (event) => {
        setHouse(event.target.value)
        setFieldValue('place', event.target.value)
    }
    const dateHandleChange = (date) => {
        setCalendarDay(date)
        setFieldValue('date', dayjs(date).toString())
    }

    return <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Select
          labelId="select-webapps-house"
          id="select-webapps-house"
          value={house}
          label={"On?"}
          onChange={selectHandleChange}
          fullWidth
        >
            {
              webAppsHouses.map((place) => <MenuItem value={place}>{place}</MenuItem>)
            }
        </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
         <SomDatePicker
           firstDate={dayjs().startOf('day')}
           period="DAILY"
           currentTime={calendarDay}
           setCurrentTime={dateHandleChange}
         />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="activity"
            name="activity"
            label={"Activitat"}
            value={values.activity}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            margin="normal"
          /> 
        </Grid>
    </Grid>
}

export default Activity 