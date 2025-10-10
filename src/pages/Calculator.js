import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
    Box,
    Button,
    TextField,
    MenuItem,
    Typography,
    Container,
    Grid
} from "@mui/material";

const validationSchema = Yup.object({
    useArea: Yup.string().required('Kullanım Alanı seçiniz.'),
    screenType: Yup.string()
        .required("Ekran Montaj Tipi seçiniz."),
});

const initialValues = {
    useArea: '',
    screenType: '',
    safeType: '',
    viewingDistance: null,
    pixel: '',
    width: '',
    height: ''
};

export default function ContactForm() {
    return (
        <Container maxWidth='xl' sx={{ paddingTop: 10 }}>
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
                        console.log("Form gönderildi:", values);
                        resetForm();
                    }}
                >
                    {({ errors, touched, handleChange, values }) => (
                        <Form>
                            <TextField
                                select
                                fullWidth
                                label="Kullanım Alanı"
                                name="useArea"
                                value={values.useArea}
                                onChange={handleChange}
                                error={touched.useArea && Boolean(errors.useArea)}
                                helperText={touched.useArea && errors.useArea}
                                margin="normal"
                            >
                                <MenuItem value='' disabled>Seçiniz</MenuItem>
                                <MenuItem value='1'>İç Mekan</MenuItem>
                                <MenuItem value='2'>Dış Mekan</MenuItem>
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
                                <MenuItem value='' disabled>Seçiniz</MenuItem>
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
                                <MenuItem value='' disabled>Seçiniz</MenuItem>
                                <MenuItem value='1'>Tek Taraflı</MenuItem>
                                <MenuItem value='2'>Çift Taraflı</MenuItem>
                            </TextField>

                            <TextField
                                fullWidth
                                label="İzleme Mesafesi (metre)"
                                name="viewingDistance"
                                type='number'
                                value={values.viewingDistance}
                                onChange={handleChange}
                                error={touched.viewingDistance && Boolean(errors.viewingDistance)}
                                helperText={touched.viewingDistance && errors.viewingDistance}
                                margin="normal"
                                inputProps={{ min: 1 }}
                            />

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
                                <MenuItem value='' disabled>Seçiniz</MenuItem>
                                <MenuItem value='1'>P1.86</MenuItem>
                                <MenuItem value='2'>P2.5 (Önerilen)</MenuItem>
                                <MenuItem value='3'>P3</MenuItem>
                                <MenuItem value='4'>P4</MenuItem>
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
                                        <MenuItem value='' disabled>Seçiniz</MenuItem>
                                        {Array.from({ length: 30 }, (_, i) => (
                                            <MenuItem key={i + 1} value= {`${i + 1}`}>
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
                                        <MenuItem value='' disabled>Seçiniz</MenuItem>
                                        {Array.from({ length: 60 }, (_, i) => (
                                            <MenuItem key={i + 1} value={`${i + 1}`}>
                                                {(i + 1) * 16} cm
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                            </Grid>

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ mt: 2 }}
                            >
                                Gönder
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Container>
    );
}