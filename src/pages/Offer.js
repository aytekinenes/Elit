import React, { useEffect, useState, useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField, MenuItem, Typography, Grid } from "@mui/material";
import ContactForm from "../components/ContactForm";

const initialValues = {
    useArea: 'inner',
    useAreaText: 'İç Mekan',
    screenType: '1',
    screenTypeText: "Duvara Monte",
    safeType: '1',
    safeTypeText: 'Tek Taraflı',
    pixel: '2.5',
    pixelText: 'P2.5 (Önerilen)',
    width: 32,
    height: 16
};

const modulWidth = 32;
const modulHeight = 16;
const karMarji = 1.40;
const kdvOrani = 0.20;
const consumablesPrice = 15.00;

const modul =
{
    inner: [
        {
            text: 'P1.86',
            value: '1.86',
            price: 36,
            pixel: {
                width: 172,
                height: 86
            }
        },
        {
            selected: true,
            text: 'P2.5 (Önerilen)',
            value: '2.5',
            price: 15.5,
            pixel: {
                width: 128,
                height: 64
            }
        },
        {
            text: 'P3',
            value: '3',
            price: 12.5,
            pixel: {
                width: 104,
                height: 52
            }
        },
        {
            price: 10,
            text: 'P4',
            value: '4',
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
            value: '2.5',
            pixel: {
                width: 128,
                height: 64
            }
        },
        {
            selected: true,
            price: 24,
            text: 'P3 (Önerilen)',
            value: '3',
            pixel: {
                width: 104,
                height: 52
            }
        },
        {
            text: 'P4',
            value: '4',
            price: 15,
            pixel: {
                width: 80,
                height: 40
            }
        },
        {
            text: 'P5',
            value: '5',
            price: 11,
            pixel: {
                width: 64,
                height: 32
            }
        },
        {
            text: 'P8',
            value: '8',
            price: 9,
            pixel: {
                width: 32,
                height: 16
            }
        },
        {
            text: 'P10',
            value: '10',
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

const adapters = {
    inner40a: 9,
    outher60a: 13
}

const cards = {
    r712: 12
}

const casesLookup = {
    '16': {
        '16x32': {
            tek: 6.5,
            cift: 13
        },
        '16x64': {
            tek: 10.5,
            cift: 21
        },
        '16x96': {
            tek: 14.5,
            cift: 29
        },
        '16x128': {
            tek: 17.5,
            cift: 35
        },
        '16x160': {
            tek: 21,
            cift: 42
        },
        '16x192': {
            tek: 24,
            cift: 46
        },
        '16x224': {
            tek: 27.5,
            cift: 52
        },
        '16x256': {
            tek: 30.5,
            cift: 59
        }
    },
    '32': {
        '32x32': {
            tek: 11.5,
            cift: 23
        },
        '32x64': {
            tek: 16,
            cift: 32
        },
        '32x96': {
            tek: 21,
            cift: 39.5
        },
        '32x128': {
            tek: 25,
            cift: 48
        },
        '32x160': {
            tek: 31.5,
            cift: 59
        },
        '32x192': {
            tek: 37,
            cift: 67
        },
        '32x224': {
            tek: 44,
            cift: 76.5
        },
        '32x256': {
            tek: 52.5,
            cift: 86.5
        }
    },
    '48': {
        '48x64': {
            tek: 21,
            cift: 40
        },
        '48x96': {
            tek: 28,
            cift: 52.5
        },
        '48x128': {
            tek: 39,
            cift: 62.5
        },
        '48x160': {
            tek: 43,
            cift: 75
        },
        '48x192': {
            tek: 48.5,
            cift: 87
        },
        '48x224': {
            tek: 55,
            cift: 97.5
        },
        '48x256': {
            tek: 64,
            cift: 112.5
        }
    },
    '64': {
        '64x64': {
            tek: 27,
            cift: 50
        },
        '64x96': {
            tek: 36,
            cift: 66
        },
        '64x128': {
            tek: 45.5,
            cift: 82.5
        },
        '64x160': {
            tek: 56,
            cift: 100
        },
        '64x192': {
            tek: 66,
            cift: 120.5
        },
        '64x224': {
            tek: 76.5,
            cift: 140.5
        },
        '64x256': {
            tek: 87,
            cift: 157
        }
    },
    '80': {
        '80x64': {
            tek: 32,
            cift: 60
        },
        '80x96': {
            tek: 44,
            cift: 80.5
        },
        '80x128': {
            tek: 54.5,
            cift: 99.5
        },
        '80x160': {
            tek: 66.5,
            cift: 120
        },
        '80x192': {
            tek: 82.5,
            cift: 141
        },
        '80x224': {
            tek: 89,
            cift: 159
        },
        '80x256': {
            tek: 99.5,
            cift: 180
        }
    },
    '96': {
        '96x64': {
            tek: 36,
            cift: 66
        },
        '96x96': {
            tek: 49,
            cift: 91
        },
        '96x128': {
            tek: 61.5,
            cift: 112
        },
        '96x160': {
            tek: 76.5,
            cift: 138
        },
        '96x192': {
            tek: 89,
            cift: 159.5
        },
        '96x224': {
            tek: 101.5,
            cift: 182.5
        },
        '96x256': {
            tek: 116,
            cift: 206.5
        }
    }
};

const cases_fallback_sqm = {
    tek_tarafli: 55,
    cift_tarafli: 100
}

const AMPER_CEKIMI_IC = 1.8;
const AMPER_CEKIMI_DIS = 2.0;
const ELEKTRIK_VOLTAJI = 220;

function selectedUseArea(useArea) {
    const selectetValue = modul[useArea].map((m) => {
        return { value: m.value, text: m.text, selected: m.selected, pixel: m.pixel }
    })
    return selectetValue;
}

export default function Offer() {
    const [pixelList, setPixel] = useState(selectedUseArea(initialValues.useArea));
    const [totalPixelX, setTotalPixelX] = useState(0);
    const [totalPixelY, setTotalPixelY] = useState(0);
    const [hourKwh, setHourKwh] = useState('');
    const [avarageKwh, setAvarageKwh] = useState('');
    const [totalPixelDisplay, setTotalPixelDisplay] = useState('none');
    const [totalKwhDisplay, setTotalKwhDisplay] = useState('none');
    const [contactFormOpen, setContactFormOpen] = useState(false);
    const [calculatedResult, setCalculatedResult] = useState({});
    const [formSubmit, setFormSubmit] = useState(false);
    const formikRef = useRef();

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
        var pixelResult = updatePixel(data.width, data.height, selectdModul)
        var energyResult = updateEnergy(data.width, data.height, data.useArea)
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
        var playerNote = '';
        if (!selectedPlayer) {
            selectedPlayer = players[players.length - 1];
            playerNote = ' (Çözünürlük Çok Yüksek!)';
        }
        var playerPrice = selectedPlayer.price;
        var playerName = selectedPlayer.name;

        var totalWidthMeter = (modulX * modulWidth) / 100;
        var totalHeigthMeter = (modulY * modulHeight) / 100;
        var totalAreaSquaremeters = totalWidthMeter * totalHeigthMeter;
        var totalModul = modulX * modulY;
        var modulTotalPrice = totalModul * selectdModul.price;
        var adaptorNumber = Math.ceil(totalModul / 6);
        var adaptorUnitPrice = data.useArea === "inner" ? adapters.inner40a : adapters.outher60a;
        var adaptorType = data.useArea === "inner" ? "40 Amper" : "60 Amper";
        var adaptorTotalPrice = adaptorNumber * adaptorUnitPrice;
        var cardCount;
        var selectedPixel = parseFloat(data.pixel);

        if (selectedPixel <= 1.86) {
            cardCount = modulX;

        }
        else if (selectedPixel <= 2.5) {
            cardCount = Math.ceil(modulX / 2) * Math.ceil(modulY / 12);
        }
        else {
            cardCount = Math.ceil(modulX / 3) * Math.ceil(modulY / 12);
        }

        cardCount = Math.max(1, cardCount);
        var cardUnitPrice = cards.r712;
        var cardTotalPrice = cardCount * cardUnitPrice;
        var d1 = Math.min(data.width, data.height);
        var d2 = Math.max(data.width, data.height);
        var seriKeys = ['16', '32', '48', '64', '80', '96'];
        var seriKey = null;

        if (seriKeys.indexOf(String(d1)) > -1) {
            seriKey = String(d1);
        } else if (seriKeys.indexOf(String(d2)) > -1) {
            seriKey = String(d2);
        }
        var boyutKey = d1 + "x" + d2;
        var safeTotalPrice;
        var safeNot;
        if (seriKey && casesLookup[seriKey] && casesLookup[seriKey][boyutKey]) {
            var prices = casesLookup[seriKey][boyutKey];
            safeTotalPrice = data.safeType === "1" ? prices.tek : prices.cift;
            safeNot = "(" + seriKey + " Serisi - " + boyutKey + ")";
        } else {
            var safeUnitPrice = data.safeType === "1" ? cases_fallback_sqm.tek_tarafli : cases_fallback_sqm.cift_tarafli;
            safeTotalPrice = totalAreaSquaremeters * safeUnitPrice;
            safeNot = "(Tahmini ~" + safeUnitPrice + "$/m²)";
        }

        var costTotal = modulTotalPrice + adaptorTotalPrice + cardTotalPrice + safeTotalPrice + playerPrice + consumablesPrice;
        var karliAraToplam = costTotal * karMarji;
        var kdvTutari = karliAraToplam * kdvOrani;
        var satisFiyati = karliAraToplam + kdvTutari;

        setCalculatedResult({
            TotalModul: totalModul,
            ModulType: selectdModul.text.replace('(Önerilen)', ''),
            ModulTotalPrice: modulTotalPrice,
            SafeNot: safeNot,
            SafeTotalPrice: safeTotalPrice,
            PlayerName: playerName + playerNote,
            PlayerPrice: playerPrice,
            CardCount: cardCount,
            CardTotalPrice: cardTotalPrice,
            AdaptorNumber: adaptorNumber,
            AdaptorType: adaptorType,
            AdaptorTotalPrice: adaptorTotalPrice,
            ConsumablesPrice: consumablesPrice,
            CostTotal: costTotal,
            KarMarji: karMarji,
            KarliAraToplam: karliAraToplam,
            KdvOrani: kdvOrani,
            KdvTutari: kdvTutari,
            SatisFiyati: satisFiyati,
            TotalPixelX: pixelResult.totalPixelX,
            TotalPixelY: pixelResult.totalPixelY,
            HourKwh: energyResult.hourKwh,
            AvarageKwh: energyResult.avarageKwh,
            UseAreaText: data.useAreaText,
            ScreenTypeText: data.screenTypeText,
            SafeTypeText: data.safeTypeText,
            PixelText: data.pixelText,
            Width: data.width,
            Height: data.height
        });

        setContactFormOpen(true);
    }

    function updatePixel(width, height, pixelSelected) {
        var width = parseInt(width);
        var height = parseInt(height);
        var modulNumberX = Math.ceil(width / modulWidth);
        var modulNumberY = Math.ceil(height / modulHeight);
        var _totalPixelX = modulNumberX * pixelSelected.pixel.width;
        var _totalPixelY = modulNumberY * pixelSelected.pixel.height;
        setTotalPixelX(_totalPixelX);
        setTotalPixelY(_totalPixelY);
        setTotalPixelDisplay('');
        return {
            totalPixelX: _totalPixelX,
            totalPixelY: _totalPixelY
        }
    }

    function updateEnergy(width, height, useArea) {
        var width = parseInt(width);
        var height = parseInt(height);
        var modulNumberX = Math.ceil(width / modulWidth);
        var modulNumberY = Math.ceil(height / modulHeight);

        var totalModul = modulNumberX * modulNumberY;
        var adaptorNumber = Math.ceil(totalModul / 6);
        var amperCekimi = (useArea === 'inner') ? AMPER_CEKIMI_IC : AMPER_CEKIMI_DIS;
        var toplamAmper220V = adaptorNumber * amperCekimi;
        var toplamGucWatt = toplamAmper220V * ELEKTRIK_VOLTAJI;
        var saatlikTuketimKWh = toplamGucWatt / 1000;
        var ortalamaTuketimKWh = saatlikTuketimKWh / 2;
        setHourKwh(saatlikTuketimKWh.toFixed(2));
        setAvarageKwh(ortalamaTuketimKWh.toFixed(2));
        setTotalKwhDisplay('');
        return {
            hourKwh: saatlikTuketimKWh.toFixed(2),
            avarageKwh: ortalamaTuketimKWh.toFixed(2)
        }
    }

    function contactFormClose() {
        setContactFormOpen(false);
    }

    return (
        <Box sx={{ paddingTop: 10 }}>
            <Grid size={12} justifyContent='center' alignItems='center' textAlign='center'>
                <Typography variant="h2">
                    Teklif Al
                </Typography>
            </Grid>
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
                    innerRef={formikRef}
                    initialValues={initialValues}
                    onSubmit={(values) => {
                        calculator(values);
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
                                    var pixelSelected = {};
                                    pixelSelectedList.map(
                                        (x) => {
                                            if (x.selected) {
                                                valid = x.value
                                                pixelSelected = x;
                                            }
                                        }
                                    );
                                    setFieldValue("pixel", valid);
                                    updatePixel(values.width, values.height, pixelSelected)
                                    updateEnergy(values.width, values.height, e.target.value)
                                }}
                                error={touched.useArea && Boolean(errors.useArea)}
                                helperText={touched.useArea && errors.useArea}
                                margin="normal"
                            >
                                <MenuItem value='inner' onClick={() => setFieldValue("useAreaText", "İç Mekan")}>İç Mekan</MenuItem>
                                <MenuItem value='outer' onClick={() => setFieldValue("useAreaText", "Dış Mekan")}>Dış Mekan</MenuItem>
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
                                <MenuItem value='1' onClick={() => setFieldValue("screenTypeText", "Duvara Monte")}>Duvara Monte</MenuItem>
                                <MenuItem value='2' onClick={() => setFieldValue("screenTypeText", "Ayaklı Stand (Poster)")}>Ayaklı Stand (Poster)</MenuItem>
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
                                <MenuItem value='1' onClick={() => setFieldValue("safeTypeText", "Tek Taraflı")}>Tek Taraflı</MenuItem>
                                <MenuItem value='2' onClick={() => setFieldValue("safeTypeText", "Çift Taraflı")}>Çift Taraflı</MenuItem>
                            </TextField>

                            <TextField
                                select
                                fullWidth
                                label="Piksel Aralığı"
                                name="pixel"
                                value={values.pixel}
                                onChange={(e) => {
                                    handleChange(e);
                                    var pixelSelected = {};
                                    pixelList.map(
                                        (x) => {
                                            if (x.selected) {
                                                pixelSelected = x;
                                            }
                                        }
                                    );
                                    updatePixel(values.width, values.height, pixelSelected)
                                    updateEnergy(values.width, values.height, values.useArea)
                                }}
                                error={touched.pixel && Boolean(errors.pixel)}
                                helperText={touched.pixel && errors.pixel}
                                margin="normal"
                            >
                                {pixelList.map((pixel) => (
                                    <MenuItem key={pixel.value} value={pixel.value} selected={pixel.selected}
                                        onClick={() => setFieldValue("pixelText", pixel.text)}>
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
                                        onChange={(e) => {
                                            handleChange(e);
                                            var pixelSelected = {};
                                            pixelList.map(
                                                (x) => {
                                                    if (x.selected) {
                                                        pixelSelected = x;
                                                    }
                                                }
                                            );
                                            updatePixel(e.target.value, values.height, pixelSelected)
                                            updateEnergy(e.target.value, values.height, values.useArea)
                                        }}
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
                                        onChange={(e) => {
                                            handleChange(e);
                                            var pixelSelected = {};
                                            pixelList.map(
                                                (x) => {
                                                    if (x.selected) {
                                                        pixelSelected = x;
                                                    }
                                                }
                                            );
                                            updatePixel(values.width, e.target.value, pixelSelected)
                                            updateEnergy(values.width, e.target.value, values.useArea)
                                        }}
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
                            <Box sx={{ p: 1, backgroundColor: '#e2eefd' }} display={totalPixelDisplay}>
                                <Typography variant="h6" align="center">
                                    Ekran Çözünürlüğü: {totalPixelX} X {totalPixelY} Piksel
                                </Typography>
                            </Box>
                            <br />
                            <Box sx={{ p: 1, backgroundColor: '#e2eefd' }} display={totalKwhDisplay}>
                                <Typography variant="h6" align="center">
                                    Tahmini Enerji Tüketimi (Maksimum): <strong>{hourKwh} kW / saat</strong>
                                </Typography>
                                <Typography variant="h6" align="center">
                                    <small>Not: Tüketim değeri ekrandaki tüm ledler beyaz iken elde edilebilecek olan maksimum değerdir. Ortalama tüketim yaklaşık <strong>{avarageKwh} kW / saat</strong> değeridir.</small>
                                </Typography>
                            </Box>
                            {!formSubmit ? (
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="success"
                                    fullWidth
                                    sx={{ mt: 2 }}
                                >
                                    Fiyat Hesapla
                                </Button>
                            ) : null}
                            {formSubmit ? (
                                <>
                                    <br />
                                    <Box sx={{ p: 1, backgroundColor: '#28a745' }}>
                                        <Typography variant="h6" align="center">
                                            Talebiniz tarafımıza başarıyla ulaştır.
                                        </Typography>
                                    </Box></>
                            ) : null}
                        </Form>
                    )}
                </Formik>
                <ContactForm open={contactFormOpen} onSuccess={() => { formikRef.current?.resetForm(); setFormSubmit(true) }} handleClose={() => contactFormClose()} calculatedResult={calculatedResult} />
            </Box>
        </Box>
    );
}