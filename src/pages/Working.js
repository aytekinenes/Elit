import React, { useEffect, useState } from "react";
import Paper from "../components/Paper";
import { Box, Typography, Grid } from '@mui/material';
import '../css/Elit.css'
import { TelButton, MailButton } from '../components/Button';
import CardMedia from "../components/CardMedia";
import SeviceProcess from '../components/ServiceProcess'

const Working = () => {
    return (
        <Box paddingTop={8}>
            <Grid size={12} justifyContent='center' alignItems='center' textAlign='center'>
                <Typography variant="h2">
                    Çalışmalarımız
                </Typography>
            </Grid>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    justifyContent: "space-between",
                    paddingTop: 2
                }}
            >
                <Paper>
                    <>
                        <video
                            src="/images/vid4-v.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            style={{
                                width: "100%",
                                height: "70%",
                                objectFit: "cover",
                            }}
                        />
                    </>
                    <>
                        <Typography variant="subtitle2">Proje 1</Typography>
                        <Typography variant="h6">Ayaklı LED Ekran - Firma A</Typography>
                        <Typography variant="body2">
                            Ayaklı LED ekran projemiz ile mağaza önü görünürlüğü artırıldı ve müşteri trafiği yükseldi.
                        </Typography>
                    </>
                </Paper>
                <Paper>
                    <>
                        <video
                            src="/images/vid5-h.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            style={{
                                width: "100%",
                                height: "70%",
                                objectFit: "cover",
                            }}
                        />
                    </>
                    <>
                        <Typography variant="subtitle2">Proje 2</Typography>
                        <Typography variant="h6">Reklam Videosu - Lastik Firması</Typography>
                        <Typography variant="body2">
                            Kısa reklam videoları ve canlı içeriklerle marka algısı güçlendirildi.
                        </Typography>
                    </>
                </Paper>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    justifyContent: "space-between",
                    paddingTop: 10
                }}
            >
                <Paper>
                    <>
                        <video
                            src="/images/vid3-v.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            style={{
                                width: "100%",
                                height: "70%",
                                objectFit: "cover",
                            }}
                        />
                    </>
                    <>
                        <Typography variant="subtitle2">Proje 3</Typography>
                        <Typography variant="h6">Eğitim İçerik Ekranı - Okul</Typography>
                        <Typography variant="body2">
                            Okullarda görsel içeriklerle dersler daha etkileşimli hale getirildi.
                        </Typography>
                    </>
                </Paper>
                <Paper>
                    <>
                        <CardMedia image='/images/res2.webp' title='Araç Üstü Kayan Yazı' sx={{ height: "70%" }} />
                    </>
                    <>
                        <Typography variant="subtitle2">Proje 3</Typography>
                        <Typography variant="h6">Araç Üstü Kayan Yazı</Typography>
                        <Typography variant="body2">
                            Mobil reklam çözümleriyle etkin mesaj iletimi sağlandı.
                        </Typography>
                    </>
                </Paper>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    justifyContent: "space-between",
                    paddingTop: 10
                }}
            >
                <Paper>
                    <>
                        <video
                            src="/images/vid1-v.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            style={{
                                width: "100%",
                                height: "70%",
                                objectFit: "cover",
                            }}
                        />
                    </>
                    <>
                        <Typography variant="subtitle2">Proje 5</Typography>
                        <Typography variant="h6">Duvardan Duvara LED</Typography>
                        <Typography variant="body2">
                            Büyük ölçekli iç/dış ekran uygulamalarıyla marka görünürlüğü üst seviyeye çıkarıldı.
                        </Typography>
                    </>
                </Paper>
                <Paper>
                    <>
                        <CardMedia image='/images/photo1.webp' title='Dış Cephe LED Tabela' sx={{ height: "70%" }} />
                    </>
                    <>
                        <Typography variant="subtitle2">Proje 6</Typography>
                        <Typography variant="h6">Dış Cephe LED Tabela</Typography>
                        <Typography variant="body2">
                            Dış cephe uygulamasıyla gece ve gündüz yüksek görünürlük sağlandı.
                        </Typography>
                    </>
                </Paper>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    justifyContent: "space-between",
                    paddingTop: 10
                }}
            >
                <Paper>
                    <>
                        <video
                            src="/images/vid2-h.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            style={{
                                width: "100%",
                                height: "70%",
                                objectFit: "cover",
                            }}
                        />
                    </>
                    <>
                        <Typography variant="subtitle2">Proje 7</Typography>
                        <Typography variant="h6">İç Mekân Menü Ekranı</Typography>
                        <Typography variant="body2">
                            Restoran ve mağazalar için menü gösterimleri ve dinamik içerik çözümleri.
                        </Typography>
                    </>
                </Paper>
                <Paper>
                    <>
                        <CardMedia image='/images/res3.webp' title='İç Mekân LED Menü Board' sx={{ height: "70%" }} />
                    </>
                    <>
                        <Typography variant="subtitle2">Proje 8</Typography>
                        <Typography variant="h6">İç Mekân LED Menü Board</Typography>
                        <Typography variant="body2">
                            Kısa metinler ve fiyat listeleri için okunaklı, çağdaş tasarımlar.
                        </Typography>
                    </>
                </Paper>
            </Box>
        </Box>
    );
}
export default Working;