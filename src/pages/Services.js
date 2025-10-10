import React, { useEffect, useState } from "react";
import Paper from "../components/Paper";
import { Box, Typography, Button, Container } from '@mui/material';
import '../css/Elit.css'
import { TelButton, MailButton } from '../components/Button';
import CardMedia from "../components/CardMedia";
import SeviceProcess from '../components/ServiceProcess'

const Services = () => {
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    justifyContent: "space-between",
                    paddingInline: 1,
                    paddingTop: 10
                }}
            >
                <Paper>
                    <>
                        <CardMedia image='/images/modul_tamir.png' title='LED Modül Tamiri' />
                    </>
                    <>
                        <Typography gutterBottom variant="h5" component="div">
                            LED Modül Tamiri
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Ölü piksel, parlaklık düşüşü, su teması ve güç arızaları için kart–komponent seviyesinde onarım.
                        </Typography>
                        <br />
                        <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                            Modül/segment değişimi
                        </Typography>
                        <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                            Lehim & hat düzeltmeleri
                        </Typography>
                        <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                            Optik/dağıtıcı panel yenileme
                        </Typography>
                    </>
                    <>
                        <TelButton text="Hemen Ara" />
                        <MailButton text="E-Posta" />
                    </>
                </Paper>
                <Paper>
                    <>
                        <CardMedia image='/images/led_ekspertiz.png' title='Ekspertiz & Fiyatlandırma' />
                    </>
                    <>
                        <Typography gutterBottom variant="h5" component="div">
                            Ekspertiz & Fiyatlandırma
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Çalışmayan veya hatalı ekranlar için yerinde keşif ve detaylı rapor. İşe başlamadan net fiyat.
                        </Typography>
                        <br />
                        <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                            Arıza tespiti ve test
                        </Typography>
                        <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                            Parça/işçilik kalemleri
                        </Typography>
                        <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                            Tahmini süre ve garanti
                        </Typography>
                    </>
                    <>
                        <Box sx={{ p: 1, backgroundColor: '#fff7cc' }}>
                            <Typography gutterBottom variant="h6" component="div">
                                Not: Bazı durumlarda keşif ücreti talep edilebilir; fiyattan düşülür.
                            </Typography>
                        </Box>
                    </>
                </Paper>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    justifyContent: "space-between",
                    paddingInline: 1,
                    paddingTop: 10
                }}
            >
                <Paper>
                    <>
                        <CardMedia image='/images/montaj_kurulum.png' title='Montaj & Kurulum' />
                    </>
                    <>
                        <Typography gutterBottom variant="h5" component="div">
                            Montaj & Kurulum
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Dış/iç mekân LED ekranların güvenli montajı, kablolama ve ilk içerik ayarları.
                        </Typography>
                        <br />
                        <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                            Uygun güç/koruma seçimi
                        </Typography>
                        <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                            Konstrüksiyon ve sabitleme
                        </Typography>
                        <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                            İlk yayın/kalibrasyon
                        </Typography>
                    </>
                </Paper>
                <Paper>
                    <>
                        <CardMedia image='/images/Kontrol_Kartı_Programlama.png' title='Kontrol Kartı Programlama' />
                    </>
                    <>
                        <Typography gutterBottom variant="h5" component="div">
                            Kontrol Kartı Programlama
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Asenkron/senkron kontrol kartlarında ağ kurulumu, zamanlama ve içerik yönetimi.
                        </Typography>
                        <br />
                        <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                            Uzaktan erişim & güncelleme
                        </Typography>
                        <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                            Parlaklık/renk profili
                        </Typography>
                        <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                            Yedekleme & geri yükleme
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
                    paddingInline: 1,
                    paddingTop: 10
                }}
            >
                <Paper>
                    <>
                        <CardMedia image='/images/bakım_temizlik.png' title='Periyodik Bakım & Temizlik' />
                    </>
                    <>
                        <Typography gutterBottom variant="h5" component="div">
                            Periyodik Bakım & Temizlik
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Uzun ömür ve stabil performans için düzenli bakım programları.
                        </Typography>
                        <br />
                        <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                            Toz/nem temizliği
                        </Typography>
                        <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                            Konnektör & kablo kontrol
                        </Typography>
                        <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                            Firmware/ayar optimizasyonu
                        </Typography>
                    </>
                </Paper>
                <Paper>
                    <>
                        <CardMedia image='/images/destek.png' title='Acil Onarım (7/24)' />
                    </>
                    <>
                        <Typography gutterBottom variant="h5" component="div">
                            Acil Onarım (7/24)
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Etkinlik ve kampanya dönemlerinde hızlı müdahale. Yedek parça ile yerinde çözüm.
                        </Typography>
                        <br />
                        <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                            Hızlı randevu
                        </Typography>
                        <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                            Geçici çözüm/Bypass
                        </Typography>
                        <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                            Kesinti süresini azaltma
                        </Typography>
                    </>
                </Paper>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                    paddingInline: 1,
                    paddingTop: 10
                }}
            >
                <Paper>
                    <Container maxWidth="md" sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography gutterBottom variant="h4">
                            Servis Süreci
                        </Typography>
                        <SeviceProcess />
                        <Container maxWidth="sm">
                            <Typography gutterBottom variant="h6">
                                * Fiyatlandırma için ekspertiz zorunludur. Bazı durumlarda keşif ücreti uygulanabilir; anlaşma sağlanırsa toplamdan düşülür.
                            </Typography>
                        </Container>
                        <Box sx={{
                            display: 'flex',
                            gap: 2,
                        }}>
                            <TelButton text="0530 306 19 91’i Ara" />
                            <MailButton text="Ekspertiz Randevusu Al" />
                        </Box>
                    </Container>
                </Paper>
            </Box>
        </Box>
    );
}
export default Services;