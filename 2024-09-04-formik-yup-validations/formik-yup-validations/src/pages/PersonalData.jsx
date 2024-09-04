import React from 'react'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import { MenuItem } from '@mui/material'

const PersonalData = (props) => {

    const { values, handleChange, setFieldValue } = props
    const horoscopes = [
        'Aries',
        'Taurus',
        'Gemini',
        'Cancer',
        'Leo',
        'Virgo',
        'Libra',
        'Scorpio',
        'Sagittarius',
        'Capricorn',
        'Aquarius',
        'Pisces',
    ]
    
    const selectHandleChange = (event) => {
        setFieldValue('horoscope', event.target.value)
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="nif"
                    name="nif"
                    label={"NIF"}
                    value={values.nif}
                    fullWidth
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Select
                    labelId="horoscope"
                    id="horoscope-select"
                    value={values.horoscope}
                    label="Horoscope"
                    onChange={selectHandleChange}
                    fullWidth
                >
                    {
                        horoscopes.map((horoscope) => <MenuItem value={horoscope}>{horoscope}</MenuItem>)
                    }
                </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="name"
                    name="name"
                    label={"Name"}
                    value={values.name}
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="surname"
                    name="surname"
                    label={"Surname"}
                    value={values.surname}
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                   
                />
            </Grid>
            
             <Grid item xs={12} sm={6}>
                <TextField
                    id="favorite_pokemon"
                    name="favorite_pokemon"
                    label={"Favorite Pokemon"}
                    value={values.favorite_pokemon}
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                />
            </Grid>
        </Grid>
    )
}

export default PersonalData