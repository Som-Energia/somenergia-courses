import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import FormControlLabel from '@mui/material/FormControlLabel'
import ReviewField from '../components/ReviewField'
import { Typography, Checkbox } from '@mui/material'

const sectionTitle = {
    fontSize: '18px',
    fontWeight: 500,
    textTransform: 'uppercase',
    mt: 3,
    mb: 1.2
}


const Review = (props) => {
    const { values, setFieldValue } = props
    const handlePrivacyPolicyCheckClick = () => {
        setFieldValue('privacy_policy_accepted', !values?.privacy_policy_accepted)
    }

    console.log(values)
    return (
        <Grid container>
            <Grid item xs={12} sm={6}>
                <ReviewField label={'NIF'} value={values?.nif} />
                <ReviewField label={'HOROSCOPE'} value={values?.horoscope} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <ReviewField label={'NAME'} value={values?.name} />
                <ReviewField label={'SURNAME'} value={values?.surname} />
            </Grid>
            
            <Grid item xs={12} sm={6}>
                <ReviewField label={'PLACE'} value={values?.place} />
                <ReviewField label={'ACTIVITY'} value={values?.activity} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <ReviewField label={'DATE'} value={values?.date} />
                <ReviewField label={'FAVORITE POKEMON'} value={values?.favorite_pokemon} />
            </Grid>
            <Box mt={2} mr={8} ml={8}>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="privacy_policy_accepted"
                            onClick={handlePrivacyPolicyCheckClick}
                            checked={values.privacy_policy_accepted}
                            color="primary"
                        />
                    }
                    label={
                        <Typography
                            variant="body1"
                            align="justify"
                        >
                            Política de privacitat: no compartirem si la persona fa o no fa el llit sota cap concepte, ens comprometem a no difondre el nombre de pelusses que hi ha per metre quadrat.
                        </Typography>
                    }
                />
            </Box>
        </Grid>

    )
}

export default Review
