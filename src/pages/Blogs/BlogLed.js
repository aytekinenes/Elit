import React from "react";
import Paper from "../../components/Paper";
import { Box, Typography, Button } from "@mui/material";
import CardMedia from "../../components/CardMedia";

const BlogLed = () => {
    return (
        <Box paddingBlock={11}>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    justifyContent: "center",
                }}
            >
                <Paper
                    sx={{
                        width: { xs: '90%', sm: '70%', md: '70%', lg: '70%', xl: '70%' },
                        flex: null,
                        aspectRatio: '20 / 25',
                        maxHeight: { xs: '1200px', sm:'1000px' },
                        minHeight: { xs: '1000px', sm: '800px', md:'500px' },
                        padding: { xs: 1, sm: 2, md: 3, lg: 10, xl: 10 }
                    }}
                >
                    <>
                        <CardMedia image='/images/lednedir.png' title='LED nedir?' sx={{ height: { xs: '20%', sm: '30%', md: '40%', lg: '50%' }  }}/>
                    </>
                    <>
                        <Typography variant="h4">
                            <strong>LED nedir?</strong>
                        </Typography>
                        <Typography variant='body1'>
                            <strong>Küçük bir yarıiletken, büyük farklar.</strong>
                        </Typography>
                        <Typography variant="body2">
                            Gündelik hayatımızın ayrılmaz bir parçası haline gelen LED teknolojisi, adını İngilizce'deki "Light Emitting Diode" kelimelerinin baş harflerinden alır. Türkçeye "Işık Yayan Diyot" olarak çevirebileceğimiz bu yarıiletken bileşenler, elektrik akımı geçtiğinde doğrudan ışık yayma özelliğine sahiptir.
                        </Typography>
                        <Typography variant="body2">
                            Klasik ampullerdeki gibi bir filamanın ısınarak ışık yayması yerine, LED'ler tamamen farklı bir prensiple çalışır: Elektrolüminesans. Bu süreç, enerjiyi ısıya dönüştürmeden direkt olarak ışığa çevirdiği için LED'leri enerji verimli ve uzun ömürlü kılar.
                        </Typography>
                        <Typography variant='body1'>
                            <strong>LED Ekran Nedir? Dijital Dünyanın Dev Tuvali</strong>
                        </Typography>
                        <Typography variant="body2">
                            LED ekranlar, binlerce hatta milyonlarca küçük LED lambasının bir araya gelmesiyle oluşur. Her bir LED, kırmızı, yeşil ve mavi bileşenleriyle (RGB) pikselleri oluşturur ve bu pikseller birleşerek canlı görüntüler ve videolar oluşturur.
                        </Typography>
                        <Typography variant="body2">
                            Modüller ve paneller aracılığıyla istenen boyutta ekran kurulabilir ve kontrol kartları sayesinde piksellerin parlaklığı ve renkleri gerçek zamanlı olarak yönetilir. Bu yapı reklam panolarından stadyum ekranlarına kadar geniş bir kullanım yelpazesi sunar.
                        </Typography>
                    </>
                </Paper>
            </Box>
        </Box>
    );
};

export default BlogLed;