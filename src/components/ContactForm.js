import React, { useEffect, useState, useRef } from "react";
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem, Typography, Box } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { getDeviceType } from '../helpers/device';
import axios from 'axios';

const deviceType = getDeviceType();

const ContactForm = (props) => {
    var cities = ["İstanbul", "Ankara", "İzmir", "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"];
    const [open, setOpen] = useState(false);
    const [calculatedResult, setCalculatedResult] = useState({});
    const [karliAraToplam, setKarliAraToplam] = useState(0);
    const [kdvTutari, setKdvTutari] = useState(0);
    const [satisFiyati, setSatisFiyati] = useState(0);
    const [isMobil, setIsmobil] = useState(deviceType === 'Mobil' || deviceType === 'Tablet');

    useEffect(() => {
        setOpen(props.open);
        setCalculatedResult(props.calculatedResult);
        if (props.calculatedResult.KarliAraToplam) {
            setKarliAraToplam(props.calculatedResult.KarliAraToplam);
        }
        if (props.calculatedResult.KdvTutari) {
            setKdvTutari(props.calculatedResult.KdvTutari);
        }
        if (props.calculatedResult.SatisFiyati) {
            setSatisFiyati(props.calculatedResult.SatisFiyati);
        }
    }, [props])

    const handleClose = () => {
        setOpen(false);
        props.handleClose?.();
    };

    const handleSubmit = async (values) => {
        const project = getDetailedEmailSummary();
        const formData = new FormData();
        formData.append("Ad", values.name ?? 'Belirtilmedi');
        formData.append("Soyad", values.surname ?? 'Belirtilmedi');
        formData.append("Telefon", values.phoneNumber);
        formData.append("İl", values.city);
        formData.append("E-posta", values.email ?? 'Belirtilmedi');
        formData.append("_subject", 'Web Siteden Yeni LED Ekran Teklif İsteği!');
        formData.append("_captcha", 'false');
        formData.append("Proje Özeti", project);
        formData.append("Cihaz Tipi", deviceType);
        axios.post('https://formsubmit.co/info@elitled.com', formData, { headers: { 'Accept': 'application/json' } })
            .then(function (response) {
                props.onSuccess?.();
                handleClose();
                if (isMobil) {
                    RedirectToWhatsApp(values);
                }
            })
            .catch(function (error) {
                alert("Form gönderimi sırasında bir hata oluştu.");
            });
    };

    const RedirectToWhatsApp = (values) => {
        const projectDescription = getFormattedSummary();
        const name = values.name ?? 'Belirtilmedi';
        const surname = values.surname ?? 'Belirtilmedi';
        const mail = values.email ?? 'Belirtilmedi';
        const city = values.city;
        const contactPhone = '905403061991';
        const mesaj = `Merhaba, web sitenizdeki hesaplayıcı üzerinden bir LED ekran teklifi almak istiyorum.\n\n ${projectDescription}\n\n` +
            `MÜŞTERİ BİLGİLERİ:\n--------------------------\n` +
            `Ad: ${name}\nSoyad: ${surname}\nİl: ${city}\nE-posta: ${mail}`;
        const encodedMesaj = encodeURIComponent(mesaj);
        const whatsappURL = `https://wa.me/${contactPhone}?text=${encodedMesaj}`;
        window.open(whatsappURL, '_blank');
    }

    const getFormattedSummary = () => {
        return (
            `PROJE ÖZETİ:\n--------------------------\n` +
            `Kullanım Alanı: ${calculatedResult.UseAreaText}\n` +
            `Montaj Tipi: ${calculatedResult.ScreenTypeText}\n` +
            `Kasa Tipi: ${calculatedResult.SafeTypeText}\n` +
            `Seçilen Piksel Aralığı: ${calculatedResult.PixelText.replace(' (Önerilen)', '')}\n` +
            `Ekran Boyutu: ${calculatedResult.Width} x ${calculatedResult.Height}\n` +
            `Ekran Çözünürlüğü: ${calculatedResult.TotalPixelX} X ${calculatedResult.TotalPixelY} Piksel\n` +
            `Tahmini Enerji Tüketimi (Maksimum): <strong>${calculatedResult.HourKwh} kW / saat</strong>` +
            `<small>Not: Tüketim değeri ekrandaki tüm ledler beyaz iken elde edilebilecek olan maksimum değerdir. Ortalama tüketim yaklaşık <strong>${calculatedResult.AvarageKwh} kW / saat</strong> değeridir.</small>\n\n`
        );
    };

    const getDetailedEmailSummary = () => {
        var formattedSummary = getFormattedSummary();
        var priceDetails = "DETAYLI FİYAT DÖKÜMÜ (MALİYET):\n" +
            "------------------------------------\n" +
            `LED Panel: ${calculatedResult.TotalModul} adet (${calculatedResult.ModulType}) -> ${calculatedResult.ModulTotalPrice.toFixed(2)} USD\n` +
            `CNC Kasa: 1 adet ${calculatedResult.SafeNot} -> ${calculatedResult.SafeTotalPrice.toFixed(2)} USD\n` +
            `Oynatıcı Kart: 1 adet (${calculatedResult.PlayerName}) -> ${calculatedResult.PlayerPrice.toFixed(2)} USD\n` +
            `Alıcı Kart (HD-R712): ${calculatedResult.CardCount} adet -> ${calculatedResult.CardTotalPrice.toFixed(2)} USD\n` +
            `Güç Kaynağı: ${calculatedResult.AdaptorNumber} adet (${calculatedResult.AdaptorType}) -> ${calculatedResult.AdaptorTotalPrice.toFixed(2)} USD\n` +
            `Sarf Malzemeler: 1 paket -> ${calculatedResult.ConsumablesPrice.toFixed(2)} USD\n` +
            "------------------------------------\n" +
            `MALİYET ARA TOPLAM: ${calculatedResult.CostTotal.toFixed(2)} USD\n` +
            `KAR MARJI UYGULANMIŞ TOPLAM (x${calculatedResult.KarMarji}): ${calculatedResult.KarliAraToplam.toFixed(2)} USD\n` +
            `KDV TUTARI (%${calculatedResult.KdvOrani * 100}): ${calculatedResult.KdvTutari.toFixed(2)} USD\n\n` +
            `ANAHTAR TESLİM SATIŞ FİYATI: ${calculatedResult.SatisFiyati.toFixed(2)} USD`;
        return formattedSummary + priceDetails;
    }

    return (
        <Dialog open={open}>
            <DialogTitle>Nihai Teklif İçin Lütfen Bilgilerinizi Giriniz.</DialogTitle>
            <DialogContent>
                <DialogContentText bgcolor='#fff7cc' padding={1}>
                    <Typography variant='body2' align="center">
                        <strong>Önemli Not:</strong> Fiyatlar tahmini olup, nihai teklifi içermemektedir.
                        Nihai teklif için lütfen aşağıdaki formu doldurunuz.
                    </Typography>
                </DialogContentText>
                <br />
                <DialogContentText bgcolor='#e2eefd'>
                    <Box sx={{ p: 1 }}>
                        <Typography variant="body1" align="center">
                            Ekran Çözünürlüğü: {calculatedResult.TotalPixelX} X {calculatedResult.TotalPixelY} Piksel
                        </Typography>
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <Typography variant="caption" align="center">
                            Tahmini Enerji Tüketimi (Maksimum): <strong>{calculatedResult.HourKwh} kW / saat</strong>
                        </Typography>
                        <Typography variant="caption" align="center">
                            <small>Not: Tüketim değeri ekrandaki tüm ledler beyaz iken elde edilebilecek olan maksimum değerdir. Ortalama tüketim yaklaşık <strong>{calculatedResult.AvarageKwh} kW / saat</strong> değeridir.</small>
                        </Typography>
                    </Box>
                </DialogContentText>
                <br />
                <DialogContentText bgcolor='#d3ab92ff'>
                    <Box sx={{ paddingInline: 3, paddingBlock: 1 }}>
                        <Typography variant="h6" align="center">
                            Proje Özeti ve Teklif
                        </Typography>
                        <Typography variant='body2'>
                            <strong>LED Panel:</strong>{calculatedResult.TotalModul} adet ({calculatedResult.ModulType})
                        </Typography>
                        <Typography variant='body2'>
                            <strong>CNC Kasa:</strong> 1 adet {calculatedResult.SafeNot}
                        </Typography>
                        <Typography variant='body2'>
                            <strong>Oynatıcı Kart:</strong> 1 adet {calculatedResult.PlayerName}
                        </Typography>
                        <Typography variant='body2'>
                            <strong>Alıcı Kart (HD-R712):</strong> {calculatedResult.CardCount} adet
                        </Typography>
                        <Typography variant='body2'>
                            <strong>Güç Kaynağı:</strong> {calculatedResult.AdaptorNumber} adet ({calculatedResult.AdaptorType})
                        </Typography>
                        <Typography variant='body2'>
                            <strong>Sarf Malzemeleri:</strong> 1 paket
                        </Typography>
                        <Typography variant='body2'>
                            <strong>Sarf Malzemeleri:</strong> 1 paket
                        </Typography>
                        <Typography variant='body2'>
                            <strong>ANAHTAR TESLİM SATIŞ FİYATI:</strong> {karliAraToplam.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD + {kdvTutari.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} KDV = <strong>{satisFiyati.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD</strong>
                        </Typography>
                    </Box>
                </DialogContentText>
                <Formik
                    initialValues={{
                        name: null,
                        surname: null,
                        phoneNumber: null,
                        city: null,
                        email: null,
                    }}
                    validationSchema={
                        Yup.object({
                            phoneNumber: Yup.string().matches(/^05\d{9}$/, "Geçerli bir telefon numarası giriniz (05XXXXXXXXX)").required('Telefon numarası zorunludur.'),
                            city: Yup.string().required("Şehir seçiniz."),
                            email: Yup.string().email("Geçerli bir e-posta adresi giriniz").nullable().notRequired()
                        })
                    }
                    onSubmit={(values, { resetForm }) => {
                        handleSubmit(values);
                        resetForm();
                    }}
                >
                    {({ errors, touched, handleChange, values, setFieldValue }) => (
                        <Form id="subscription-form">
                            <TextField
                                fullWidth
                                label="Adınız"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Soyadınız"
                                name="surname"
                                value={values.surname}
                                onChange={handleChange}
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Telefon"
                                name="phoneNumber"
                                value={values.phoneNumber}
                                onChange={handleChange}
                                error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                                helperText={touched.phoneNumber && errors.phoneNumber}
                                margin="normal"
                            />
                            <TextField
                                select
                                fullWidth
                                label="Şehir"
                                name="city"
                                value={values.city}
                                onChange={handleChange}
                                error={touched.city && Boolean(errors.city)}
                                helperText={touched.city && errors.city}
                                margin="normal"
                            >
                                <MenuItem value={null} disabled>Seçiniz</MenuItem>
                                {cities.map((city) => (
                                    <MenuItem key={city} value={city} selected={city}>
                                        {city}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                type='email'
                                fullWidth
                                label="E-Posta"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                                margin="normal"
                            />
                        </Form>
                    )}
                </Formik>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="success">İptal</Button>
                <Button type="submit" form="subscription-form" variant="contained" color="success">
                    {isMobil ? 'WhatsApp Üzerinden Teklif Al' : 'Teklif Al'}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
export default ContactForm;