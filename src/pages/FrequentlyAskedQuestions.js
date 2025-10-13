import * as React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Box } from "@mui/material";

const FrequentlyAskedQuestions = () => {
  return (
    <Box sx={{ paddingTop: 10 }}>
      <Grid size={12} justifyContent='center' alignItems='center' textAlign='center'>
        <Typography variant="h2">
          Sıkça Sorulan Sorular
        </Typography>
      </Grid>
      <Box sx={{ paddingTop: 5 }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon  />}
            aria-controls="ekspertiz"
            id="ekspertiz"
          >
            <Typography variant='body1'>Ekspertiz ücreti nedir?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='body2'>
              Uzaklık ve kapsamına göre değişir; servis onayı verildiğinde toplam tutardan düşülür.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon  />}
            aria-controls="garanti"
            id="garanti"
          >
            <Typography variant='body1'>Garanti veriyor musunuz?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='body2'>
              Parça ve işçilik için işin niteliğine göre 3–12 ay arası garanti sunuyoruz.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon  />}
            aria-controls="yedekparca"
            id="yedekparca"
          >
            <Typography variant='body1'>Yedek parça stoklarınız var mı?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='body2'>
              Sık kullanılan modüller, güç kaynakları ve kontrol kartları stokta tutulur; özel parçalar sipariş edilir.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
export default FrequentlyAskedQuestions;