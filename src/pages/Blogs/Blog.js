import React from "react";
import Paper from "../../components/Paper";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Blog = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box paddingTop={11}>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        justifyContent: "center",
                    }}
                >
                    <Paper
                        sx={{
                            width: { xs: "90%", sm: "35%" },
                            flex: null,
                            aspectRatio: '16 / 9',
                            minHeight: 0,
                            padding: 10
                        }}
                    >
                        <>
                            <Typography gutterBottom variant="h5">
                                <strong>1. LED nedir?</strong>
                            </Typography>
                        </>
                        <>
                            <Typography gutterBottom variant="body1">
                                LED (Light Emitting Diode) nedir, nasıl çalışır, avantajları nelerdir — kısa özet.
                            </Typography>
                        </>
                        <>
                            <Button sx={{ borderRadius: 3 }} variant="contained" onClick={()=> navigate("/led-nedir")}>Devamını Oku</Button>
                        </>
                    </Paper>
                    <Paper
                        sx={{
                            width: { xs: "90%", sm: "35%" },
                            flex: null,
                            aspectRatio: '16 / 9',
                            minHeight: 0,
                            padding: 10
                        }}
                    >
                        <>
                            <Typography gutterBottom variant="h5">
                                <strong>2. LED ekran nedir?</strong>
                            </Typography>
                        </>
                        <>
                            <Typography gutterBottom variant="body1">
                                LED ekranların yapısı ve modüler mimarisi hakkında temel bilgiler.
                            </Typography>
                        </>
                        <>
                            <Button sx={{ borderRadius: 3 }} variant="contained" onClick={()=> navigate("/led-ekran-nedir")}>Devamını Oku</Button>
                        </>
                    </Paper>
                </Box>
            </Box>
            <Box paddingTop={11}>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        justifyContent: "center",
                    }}
                >
                    <Paper
                        sx={{
                            width: { xs: "90%", sm: "35%" },
                            flex: null,
                            aspectRatio: '16 / 9',
                            minHeight: 0,
                            padding: 10
                        }}
                    >
                        <>
                            <Typography gutterBottom variant="h5">
                                <strong>3. Piksel ve çözünürlük</strong>
                            </Typography>
                        </>
                        <>
                            <Typography gutterBottom variant="body1">
                                Piksel nedir, çözünürlük nasıl hesaplanır ve görüntü kalitesini nasıl etkiler?
                            </Typography>
                        </>
                        <>
                            <Button sx={{ borderRadius: 3 }} variant="contained" onClick={()=> navigate("/piksel-çozunurluk")}>Devamını Oku</Button>
                        </>
                    </Paper>
                    <Paper
                        sx={{
                            width: { xs: "90%", sm: "35%" },
                            flex: null,
                            aspectRatio: '16 / 9',
                            minHeight: 0,
                            padding: 10
                        }}
                    >
                        <>
                            <Typography gutterBottom variant="h5">
                                <strong>4. P1.86 / P2.5 / P3 / P4 / P5</strong>
                            </Typography>
                        </>
                        <>
                            <Typography gutterBottom variant="body1">
                                Farklı piksel pitch değerlerinin anlamı ve hangi senaryolar için uygun oldukları.
                            </Typography>
                        </>
                        <>
                            <Button sx={{ borderRadius: 3 }} variant="contained" onClick={()=> navigate("/pitchler")}>Devamını Oku</Button>
                        </>
                    </Paper>
                </Box>
            </Box>
            <Box paddingTop={11}>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        justifyContent: "center",
                    }}
                >
                    <Paper
                        sx={{
                            width: { xs: "90%", sm: "35%" },
                            flex: null,
                            aspectRatio: '16 / 9',
                            minHeight: 0,
                            padding: 10
                        }}
                    >
                        <>
                            <Typography gutterBottom variant="h5">
                                <strong>5. İzleme mesafesi ve tercih</strong>
                            </Typography>
                        </>
                        <>
                            <Typography gutterBottom variant="body1">
                                İzleme mesafesi nasıl hesaplanır ve seçim yaparken hangi kriterlere bakılır?
                            </Typography>
                        </>
                        <>
                            <Button sx={{ borderRadius: 3 }} variant="contained" onClick={()=> navigate("/izleme-mesafesi")}>Devamını Oku</Button>
                        </>
                    </Paper>
                    <Paper
                        sx={{
                            width: { xs: "90%", sm: "35%" },
                            flex: null,
                            aspectRatio: '16 / 9',
                            minHeight: 0,
                            padding: 10
                        }}
                    >
                        <>
                            <Typography gutterBottom variant="h5">
                                <strong>6. İç / dış mekan modül farkları</strong>
                            </Typography>
                        </>
                        <>
                            <Typography gutterBottom variant="body1">
                                İç ve dış mekan LED modüller arasındaki teknik farklılıklar ve kullanım senaryoları.
                            </Typography>
                        </>
                        <>
                            <Button sx={{ borderRadius: 3 }} variant="contained" onClick={()=> navigate("/moduller")}>Devamını Oku</Button>
                        </>
                    </Paper>
                </Box>
            </Box>
            <Box paddingTop={11}>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        justifyContent: "center",
                    }}
                >
                    <Paper
                        sx={{
                            width: { xs: "90%", sm: "35%" },
                            flex: null,
                            aspectRatio: '16 / 9',
                            minHeight: 0,
                            padding: 10
                        }}
                    >
                        <>
                            <Typography gutterBottom variant="h5">
                                <strong>7. Ölçü seçenekleri</strong>
                            </Typography>
                        </>
                        <>
                            <Typography gutterBottom variant="body1">
                                Modül boyutları, adım ölçüleri ve kurulu ekran boyutlarını belirlerken dikkat edilecekler.
                            </Typography>
                        </>
                        <>
                            <Button sx={{ borderRadius: 3 }} variant="contained" onClick={()=> navigate("/blog-secenekleri")}>Devamını Oku</Button>
                        </>
                    </Paper>
                    <Paper
                        sx={{
                            width: { xs: "90%", sm: "35%" },
                            flex: null,
                            aspectRatio: '16 / 9',
                            minHeight: 0,
                            padding: 10
                        }}
                    >
                        <>
                            <Typography gutterBottom variant="h5">
                                <strong>8. İnternet üzerinden kontrol</strong>
                            </Typography>
                        </>
                        <>
                            <Typography gutterBottom variant="body1">
                                Uzaktan içerik yönetimi, güvenlik ve entegrasyon seçenekleri.
                            </Typography>
                        </>
                        <>
                            <Button sx={{ borderRadius: 3 }} variant="contained" onClick={()=> navigate("/internet-uzerinden-kontrol")}>Devamını Oku</Button>
                        </>
                    </Paper>
                </Box>
            </Box>
            <Box paddingBlock={11}>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        justifyContent: "center",
                    }}
                >
                    <Paper
                        sx={{
                            width: { xs: "90%", sm: "35%" },
                            flex: null,
                            aspectRatio: '16 / 9',
                            minHeight: 0,
                            padding: 10
                        }}
                    >
                        <>
                            <Typography gutterBottom variant="h5">
                                <strong>9. HD Player kullanımı</strong>
                            </Typography>
                        </>
                        <>
                            <Typography gutterBottom variant="body1">
                                HD Player nedir, neden önemlidir ve hangi özelliklere dikkat edilmeli?
                            </Typography>
                        </>
                        <>
                            <Button sx={{ borderRadius: 3 }} variant="contained" onClick={()=> navigate("/hd-player-kullanimi")}>Devamını Oku</Button>
                        </>
                    </Paper>
                    <Paper
                        sx={{
                            width: { xs: "90%", sm: "35%" },
                            flex: null,
                            aspectRatio: '16 / 9',
                            minHeight: 0,
                            padding: 10
                        }}
                    >
                        <>
                            <Typography gutterBottom variant="h5">
                                <strong>10. LED ekran kullanım alanları</strong>
                            </Typography>
                        </>
                        <>
                            <Typography gutterBottom variant="body1">
                                LED ekranların yaygın kullanım alanları ve sektör örnekleri.
                            </Typography>
                        </>
                        <>
                            <Button sx={{ borderRadius: 3 }} variant="contained" onClick={()=> navigate("/kullanim-alanlari")}>Devamını Oku</Button>
                        </>
                    </Paper>
                </Box>
            </Box>
        </>
    );
};

export default Blog;
