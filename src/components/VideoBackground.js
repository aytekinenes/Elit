import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

function VideoBackground() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "82vh",
        overflow: "hidden",
      }}
    >
      <video
        src="/images/bgvideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "white",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.3)", // hafif karartma efekti
        }}
      >

        <Typography variant="h2">LED Ekran ve Kayan Yazı Sistemleri</Typography>
        <Typography variant="h6" >
          Yılların tecrübesi ve rekabetçi fiyat politikamızla LED teknolojilerinde uçtan uca çözümler sunuyoruz.
        </Typography>
        <Typography variant="h6">
          Tasarım, üretim, kurulum ve teknik destek tek bir noktada.
        </Typography>
        <Box sx={{ paddingTop: 15 }}>
          <Stack direction="row" spacing={5}>
            <Button
              variant="contained"
              size="large"
            >
              Çalışmalarımız
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                
                "&:hover": { backgroundColor: "#1976d2", color:'#ffffff' }
              }}
            >
              Teklif Al
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default VideoBackground;
