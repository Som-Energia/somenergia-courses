import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const ReviewField = ({ label, value }) => {
  return (
    <Box
      sx={{
        margin: '1rem',
      }}>
      {label !== false && (
        <Box className="field__title">
          <Typography
            sx={{
              textTransform: 'uppercase',
              pr: '12px',
              fontSize: '14px',
              fontWeight: 400,
              color: 'rgba(0, 0, 0, 0.54)'
            }}
            variant="subtitle2">
            {label}
          </Typography>
        </Box>
      )}
      <Box>
        <Typography sx={{ fontSize: '16px' }} variant="body2">
          {value}
        </Typography>
      </Box>
    </Box>
  )
}

export default ReviewField