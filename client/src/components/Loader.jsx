import { Card, Skeleton } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <>
      <Card
          sx={{
            width: "40%",
            margin: "auto",
            mt: 2,
            padding: 2,
            boxShadow: "5px 5px 10px #ccc",
            ":hover:": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Skeleton
            sx={{ height: 190, marginBottom: "20px" }}
            animation="wave"
            variant="rectangular"
          />
          <Skeleton animation="wave" height={50} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={80} width="80%" />
        </Card>
      <Card
          sx={{
            width: "40%",
            margin: "auto",
            mt: 2,
            padding: 2,
            boxShadow: "5px 5px 10px #ccc",
            ":hover:": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Skeleton
            sx={{ height: 190, marginBottom: "20px" }}
            animation="wave"
            variant="rectangular"
          />
          <Skeleton animation="wave" height={50} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={80} width="80%" />
        </Card>
      <Card
          sx={{
            width: "40%",
            margin: "auto",
            mt: 2,
            padding: 2,
            boxShadow: "5px 5px 10px #ccc",
            ":hover:": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Skeleton
            sx={{ height: 190, marginBottom: "20px" }}
            animation="wave"
            variant="rectangular"
          />
          <Skeleton animation="wave" height={50} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={80} width="80%" />
        </Card>
      <Card
          sx={{
            width: "40%",
            margin: "auto",
            mt: 2,
            padding: 2,
            boxShadow: "5px 5px 10px #ccc",
            ":hover:": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Skeleton
            sx={{ height: 190, marginBottom: "20px" }}
            animation="wave"
            variant="rectangular"
          />
          <Skeleton animation="wave" height={50} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={80} width="80%" />
        </Card>
      <Card
          sx={{
            width: "40%",
            margin: "auto",
            mt: 2,
            padding: 2,
            boxShadow: "5px 5px 10px #ccc",
            ":hover:": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Skeleton
            sx={{ height: 190, marginBottom: "20px" }}
            animation="wave"
            variant="rectangular"
          />
          <Skeleton animation="wave" height={50} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={80} width="80%" />
        </Card>
      <Card
          sx={{
            width: "40%",
            margin: "auto",
            mt: 2,
            padding: 2,
            boxShadow: "5px 5px 10px #ccc",
            ":hover:": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Skeleton
            sx={{ height: 190, marginBottom: "20px" }}
            animation="wave"
            variant="rectangular"
          />
          <Skeleton animation="wave" height={50} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={80} width="80%" />
        </Card>
    </>
  )
}

export default Loader