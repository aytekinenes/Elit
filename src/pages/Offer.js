import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField, MenuItem, Typography, Container, Grid } from "@mui/material";

const validationSchema = Yup.object({
    useArea: Yup.string().required('Kullanım Alanı seçiniz.'),
    screenType: Yup.string()
        .required("Ekran Montaj Tipi seçiniz."),
});

const initialValues = {
    useArea: 'inner',
    screenType: '1',
    safeType: '1',
    pixel: 'p2.5',
    width: 32,
    height: 16
};

const modulWidth = 32;
const modulHeight = 16;

const modul =
{
    inner: [
        {
            text: 'P1.86',
            value: 'p1.86',
            price: 36,
            pixel: {
                width: 172,
                height: 86
            }
        },
        {
            selected: true,
            text: 'P2.5 (Önerilen)',
            value: 'p2.5',
            price: 15.5,
            pixel: {
                width: 128,
                height: 64
            }
        },
        {
            text: 'P3',
            value: 'P3',
            price: 12.5,
            pixel: {
                width: 104,
                height: 52
            }
        },
        {
            price: 10,
            text: 'P4',
            value: 'p4',
            pixel: {
                width: 80,
                height: 40
            }
        }
    ],
    outer: [
        {
            price: 36,
            text: 'P2.5',
            value: 'p2.5',
            pixel: {
                width: 128,
                height: 64
            }
        },
        {
            selected: true,
            price: 24,
            text: 'P3 (Önerilen)',
            value: 'p3',
            pixel: {
                width: 104,
                height: 52
            }
        },
        {
            text: 'P4',
            value: 'p4',
            price: 15,
            pixel: {
                width: 80,
                height: 40
            }
        },
        {
            text: 'P5',
            value: 'p5',
            price: 11,
            pixel: {
                width: 64,
                height: 32
            }
        },
        {
            text: 'P8',
            value: 'p8',
            price: 9,
            pixel: {
                width: 32,
                height: 16
            }
        },
        {
            text: 'P10',
            value: 'p10',
            price: 8,
            pixel: {
                width: 32,
                height: 16
            }
        }
    ]
}

const players = [
    { name: "HD-A3L SDK'LI", maxPixel: 655360, price: 85 },
    { name: 'HD-A5L', maxPixel: 1310720, price: 175 },
    { name: 'HD-A6L', maxPixel: 2304000, price: 285 },
    { name: 'HD-A7', maxPixel: 5160960, price: 1400 },
    { name: 'HD-A8', maxPixel: 8294400, price: 1975 }
];

function selectedUseArea(useArea) {
    const selectetValue = modul[useArea].map((m) => {
        return { value: m.value, text: m.text, selected: m.selected }
    })
    return selectetValue;
}

export default function Offer() {
    const [pixelList, setPixel] = useState(selectedUseArea(initialValues.useArea));
    const [playerNote, setPlayerNote] = useState('');

    function calculator(data) {
        var modulX = Math.ceil(data.width / modulWidth);
        var modulY = Math.ceil(data.height / modulHeight);
        var modulInfo = modul[data.useArea];
        var selectdModul = {};
        modulInfo.map((m) => {
            if (m.value === data.pixel) {
                selectdModul = m;
            }
        })
        var totalPixelX = modulX * selectdModul.pixel.width;
        var totalPixelY = modulY * selectdModul.pixel.height;
        var screenTotalPiksel = totalPixelX * totalPixelY;
        var selectedPlayer = null;
        players.some(p => {
            if (p.maxPixel >= screenTotalPiksel) {
                selectedPlayer = p;
                return true;
            }
        });
        if (!selectedPlayer) {
            selectedPlayer = players[players.length - 1];
            setPlayerNote(' <small>(Çözünürlük Çok Yüksek!)</small>')
        }
        var playerPrice = selectedPlayer.price;
        var playerNme = selectedPlayer.name;

        var toplamGenislikMetre = (modulX * modulWidth) / 100;
        var toplamYukseklikMetre = (modulY * modulHeight) / 100;
        var toplamAlanMetrekare = toplamGenislikMetre * toplamYukseklikMetre;
        var toplamModul = modulX * modulY;
        var modulBirimFiyat = selectdModul.price;
        var modulToplamFiyat = toplamModul * modulBirimFiyat;
        var adaptorSayisi = Math.ceil(toplamModul / 6);
        //var adaptorBirimFiyat = alan === "ic" ? PRICES.adapters.ic_40a : PRICES.adapters.dis_60a;
    }
    return (
        <Box sx={{ paddingTop: 10 }}>
            <Typography variant="h4" gutterBottom align="center">
                Teklif Al
            </Typography>
            <Typography variant="h5" gutterBottom align="center">
                Profesyonel LED Ekran Fiyat Hesaplama (USD)
            </Typography>
            <Box
                sx={{
                    mx: "auto",
                    mt: 5,
                    p: 3,
                    border: "1px solid #ddd",
                    borderRadius: 2,
                }}
            >
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => {
                        calculator(values);
                        //resetForm();
                    }}
                >
                    {({ errors, touched, handleChange, values, setFieldValue }) => (
                        <Form>
                            <TextField
                                select
                                fullWidth
                                label="Kullanım Alanı"
                                name="useArea"
                                value={values.useArea}
                                onChange={(e) => {
                                    handleChange(e);
                                    const pixelSelectedList = selectedUseArea(e.target.value);
                                    setPixel(pixelSelectedList)
                                    var valid = '';
                                    pixelSelectedList.map(
                                        (x) => {
                                            if (x.selected) {
                                                valid = x.value
                                            }
                                        }
                                    );
                                    setFieldValue("pixel", valid);
                                }}
                                error={touched.useArea && Boolean(errors.useArea)}
                                helperText={touched.useArea && errors.useArea}
                                margin="normal"
                            >
                                <MenuItem value='inner'>İç Mekan</MenuItem>
                                <MenuItem value='outer'>Dış Mekan</MenuItem>
                            </TextField>

                            <TextField
                                select
                                fullWidth
                                label="Ekran Montaj Tipi"
                                name="screenType"
                                value={values.screenType}
                                onChange={handleChange}
                                error={touched.screenType && Boolean(errors.screenType)}
                                helperText={touched.screenType && errors.screenType}
                                margin="normal"
                            >
                                <MenuItem value='1'>Duvara Monte</MenuItem>
                                <MenuItem value='2'>Ayaklı Stand (Poster)</MenuItem>
                            </TextField>

                            <TextField
                                select
                                fullWidth
                                label="Kasa Tipi"
                                name="safeType"
                                value={values.safeType}
                                onChange={handleChange}
                                error={touched.safeType && Boolean(errors.safeType)}
                                helperText={touched.safeType && errors.safeType}
                                margin="normal"
                            >
                                <MenuItem value='1'>Tek Taraflı</MenuItem>
                                <MenuItem value='2'>Çift Taraflı</MenuItem>
                            </TextField>

                            <TextField
                                select
                                fullWidth
                                label="Piksel Aralığı"
                                name="pixel"
                                value={values.pixel}
                                onChange={handleChange}
                                error={touched.pixel && Boolean(errors.pixel)}
                                helperText={touched.pixel && errors.pixel}
                                margin="normal"
                            >
                                {pixelList.map((pixel) => (
                                    <MenuItem key={pixel.value} value={pixel.value} selected={pixel.selected}>
                                        {pixel.text}
                                    </MenuItem>
                                ))}
                            </TextField>

                            <Typography variant="subtitle1">
                                Ekran Boyutu
                            </Typography>

                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        select
                                        fullWidth
                                        label="Genişlik (cm)"
                                        name="width"
                                        value={values.width}
                                        onChange={handleChange}
                                        error={touched.width && Boolean(errors.width)}
                                        helperText={touched.width && errors.width}
                                        margin="normal"
                                    >
                                        {Array.from({ length: 30 }, (_, i) => (
                                            <MenuItem key={i + 1} value={(i + 1) * 32}>
                                                {(i + 1) * 32} cm
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>

                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        select
                                        fullWidth
                                        label="Yükseklik (cm)"
                                        name="height"
                                        value={values.height}
                                        onChange={handleChange}
                                        error={touched.height && Boolean(errors.height)}
                                        helperText={touched.height && errors.height}
                                        margin="normal"
                                    >
                                        {Array.from({ length: 60 }, (_, i) => (
                                            <MenuItem key={i + 1} value={(i + 1) * 16}>
                                                {(i + 1) * 16} cm
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                            </Grid>

                            <Button
                                type="submit"
                                variant="contained"
                                color="success"
                                fullWidth
                                sx={{ mt: 2 }}
                            >
                                Fiyat Hesapla
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Box>
    );
}